import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { CATALOG, getVariant, variantImage, variantsForSpecies } from './data/catalog.ts'
import { GeneticsPanel } from './GeneticsPanel.tsx'
import { filterMounts, groupMounts, sortMounts, summarize, createMounts } from './stock.ts'
import { parseStock, readStock, serializeStock, writeStock } from './storage.ts'
import {
  EMPTY_FILTERS,
  SEX_LABELS,
  SPECIES,
  SPECIES_IMAGES,
  SPECIES_LABELS,
  STATUS_LABELS,
  STATUSES,
  type Filters,
  type Mount,
  type ReproductiveStatus,
  type Sex,
  type Species,
} from './types.ts'

type Draft = {
  species: Species
  catalogId: string
  sex: Sex
  status: ReproductiveStatus
  level: string
  count: string
}

const DEFAULT_DRAFT: Draft = {
  species: 'dragodinde',
  catalogId: 'dragodinde-amande',
  sex: 'female',
  status: 'raising',
  level: '1',
  count: '1',
}

function draftFromMount(mount: Mount): Draft {
  const variant = getVariant(mount.catalogId)
  return {
    species: variant?.species ?? 'dragodinde',
    catalogId: mount.catalogId,
    sex: mount.sex,
    status: mount.status,
    level: String(mount.level),
    count: '1',
  }
}

function parseBoundedInteger(value: string, min: number, max: number): number | null {
  if (!/^\d+$/.test(value.trim())) return null
  const parsed = Number(value)
  if (parsed < min || parsed > max) return null
  return parsed
}

function generationLabel(generation: number | null): string {
  return generation === null ? 'Spéciale' : `G${generation}`
}

export default function App() {
  const [mounts, setMounts] = useState<Mount[]>(() => readStock(localStorage))
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS)
  const [formGeneration, setFormGeneration] = useState<number | null>(null)
  const [draft, setDraft] = useState<Draft>(DEFAULT_DRAFT)
  const [editingIds, setEditingIds] = useState<string[]>([])
  const [formError, setFormError] = useState('')
  const [notice, setNotice] = useState('')
  const [view, setView] = useState<'stock' | 'genetics'>('genetics')

  useEffect(() => {
    writeStock(localStorage, mounts)
  }, [mounts])

  const summary = useMemo(() => summarize(mounts), [mounts])
  const visible = useMemo(
    () => sortMounts(filterMounts(mounts, filters)),
    [mounts, filters],
  )
  const groups = useMemo(() => groupMounts(visible), [visible])
  const editing = editingIds.length > 0
  const variants = variantsForSpecies(draft.species)
  const generationVariants =
    formGeneration == null
      ? []
      : variants.filter((variant) => variant.generation === formGeneration)
  const selectedVariant = getVariant(draft.catalogId)

  function updateDraft(patch: Partial<Draft>) {
    setDraft((current) => ({ ...current, ...patch }))
    setFormError('')
  }

  function changeSpecies(species: Species) {
    const nextVariants = variantsForSpecies(species)
    const pool =
      formGeneration == null
        ? nextVariants
        : nextVariants.filter((variant) => variant.generation === formGeneration)
    const currentStillValid = pool.some((variant) => variant.id === draft.catalogId)
    updateDraft({
      species,
      catalogId: currentStillValid ? draft.catalogId : (pool[0]?.id ?? ''),
    })
    setFilters((current) => ({ ...current, species }))
  }

  function selectFormGeneration(generation: number | null) {
    setFormGeneration(generation)
    if (generation == null) return
    const matches = variants.filter((variant) => variant.generation === generation)
    if (!matches.some((variant) => variant.id === draft.catalogId)) {
      updateDraft({ catalogId: matches[0]?.id ?? draft.catalogId })
    }
  }

  function resetForm() {
    setDraft(DEFAULT_DRAFT)
    setEditingIds([])
    setFormGeneration(null)
    setFormError('')
  }

  function submitForm(event: FormEvent) {
    event.preventDefault()
    const level = parseBoundedInteger(draft.level, 1, 200)
    if (!draft.catalogId || !getVariant(draft.catalogId)) {
      setFormError('Choisis une variante du catalogue.')
      return
    }
    if (level === null) {
      setFormError('Le niveau doit être un entier entre 1 et 200.')
      return
    }

    const payload = {
      catalogId: draft.catalogId,
      sex: draft.sex,
      status: draft.status,
      level,
      nickname: '',
    }

    if (editingIds.length > 0) {
      const ids = new Set(editingIds)
      const nickname = ''
      setMounts((current) =>
        current.map((mount) => (ids.has(mount.id) ? { ...mount, ...payload, nickname } : mount)),
      )
      setNotice(
        editingIds.length > 1 ? `${editingIds.length} montures mises à jour.` : 'Monture mise à jour.',
      )
      resetForm()
      return
    }

    const count = parseBoundedInteger(draft.count, 1, 50)
    if (count === null) {
      setFormError('La quantité doit être un entier entre 1 et 50.')
      return
    }

    setMounts((current) => [...current, ...createMounts(payload, count)])
    setNotice(count > 1 ? `${count} montures ajoutées.` : 'Monture ajoutée.')
    setDraft((current) => ({ ...current, count: '1' }))
  }

  function startEdit(ids: string[], mount: Mount) {
    setEditingIds(ids)
    setFormGeneration(null)
    setDraft(draftFromMount(mount))
    setFormError('')
    setNotice('')
    document.getElementById('stock-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function removeGroup(ids: string[], label: string) {
    const count = ids.length
    const question =
      count > 1 ? `Retirer ces ${count} ${label} du stock ?` : `Retirer ${label} du stock ?`
    if (!window.confirm(question)) return
    const removed = new Set(ids)
    setMounts((current) => current.filter((entry) => !removed.has(entry.id)))
    if (editingIds.some((id) => removed.has(id))) resetForm()
    setNotice(count > 1 ? `${count} montures retirées du stock.` : 'Monture retirée du stock.')
  }

  function exportStock() {
    const blob = new Blob([serializeStock(mounts)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'stock-elevage.json'
    link.click()
    URL.revokeObjectURL(url)
    setNotice('Export téléchargé.')
  }

  function importStock(file: File) {
    const reader = new FileReader()
    reader.onload = () => {
      const result = parseStock(String(reader.result ?? ''))
      if (!result.ok) {
        setNotice('')
        setFormError(result.error)
        return
      }
      if (
        mounts.length > 0 &&
        !window.confirm('Remplacer le stock actuel par le fichier importé ?')
      ) {
        return
      }
      setMounts(result.mounts)
      resetForm()
      const skipped =
        result.skipped > 0
          ? `, ${result.skipped} entrée${result.skipped > 1 ? 's' : ''} ignorée${result.skipped > 1 ? 's' : ''}`
          : ''
      setNotice(`${result.mounts.length} monture${result.mounts.length > 1 ? 's' : ''} importée${result.mounts.length > 1 ? 's' : ''}${skipped}.`)
    }
    reader.readAsText(file)
  }

  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">Dofus 3.5</p>
        <h1>Stock d’élevage</h1>
        <p className="lede">
          Dragodindes, muldos et volkornes : sexe, génération et état de reproduction, enregistrés dans ce navigateur.
        </p>
      </header>

      <section className="summary" aria-label="Résumé du stock">
        <article>
          <span>Total</span>
          <strong>{summary.total}</strong>
        </article>
        {SPECIES.map((species) => (
          <article key={species}>
            <span>{SPECIES_LABELS[species]}s</span>
            <strong>{summary.bySpecies[species]}</strong>
          </article>
        ))}
        <article>
          <span>Mâles</span>
          <strong>{summary.males}</strong>
        </article>
        <article>
          <span>Femelles</span>
          <strong>{summary.females}</strong>
        </article>
        <article>
          <span>Fécondes</span>
          <strong>{summary.fertile}</strong>
        </article>
      </section>

      <nav className="view-tabs" aria-label="Sections">
        <button type="button" className={view === 'stock' ? '' : 'ghost'} onClick={() => setView('stock')}>
          Stock
        </button>
        <button
          type="button"
          className={view === 'genetics' ? '' : 'ghost'}
          onClick={() => setView('genetics')}
        >
          Génétique
        </button>
      </nav>

      {view === 'genetics' ? <GeneticsPanel mounts={mounts} /> : null}
      {view === 'stock' ? (
      <>
      <form id="stock-form" className="panel" onSubmit={submitForm}>
        <div className="panel-heading">
          <h2>
            {editing
              ? editingIds.length > 1
                ? `Modifier ${editingIds.length} montures`
                : 'Modifier une monture'
              : 'Ajouter au stock'}
          </h2>
          {editing ? (
            <button type="button" className="ghost" onClick={resetForm}>
              Annuler
            </button>
          ) : null}
        </div>
        <div className="species-cards" role="group" aria-label="Espèce">
          {SPECIES.map((species) => {
            const selected = draft.species === species
            return (
              <button
                key={species}
                type="button"
                className={selected ? 'species-card chosen' : 'species-card'}
                aria-pressed={selected}
                onClick={() => changeSpecies(species)}
              >
                <img src={SPECIES_IMAGES[species]} alt="" />
                <span className="species-card-label">
                  <strong>{SPECIES_LABELS[species]}</strong>
                  <small>{summary.bySpecies[species]} en stock</small>
                </span>
              </button>
            )
          })}
        </div>
        {filters.species === 'all' ? (
          <p className="hint">Choisir une espèce filtre aussi le stock affiché.</p>
        ) : (
          <button
            type="button"
            className="ghost species-clear"
            onClick={() => setFilters((current) => ({ ...current, species: 'all' }))}
          >
            Voir tout le stock
          </button>
        )}
        <div className="form-row">
          <label>
            Génération
            <select
              value={formGeneration ?? ''}
              onChange={(event) =>
                selectFormGeneration(event.target.value === '' ? null : Number(event.target.value))
              }
            >
              <option value="">Toutes</option>
              {Array.from({ length: 10 }, (_, index) => index + 1).map((generation) => (
                <option key={generation} value={generation}>
                  Génération {generation}
                </option>
              ))}
            </select>
          </label>
        </div>
        {formGeneration == null ? (
          <div className="form-grid">
            <label>
              Variante
              <select
                value={draft.catalogId}
                onChange={(event) => updateDraft({ catalogId: event.target.value })}
              >
                {groupVariants(variants).map((group) => (
                  <optgroup key={group.label} label={group.label}>
                    {group.variants.map((variant) => (
                      <option key={variant.id} value={variant.id}>
                        {variant.name}
                        {variant.breedable ? '' : ' (non élevable)'}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </label>
          </div>
        ) : generationVariants.length === 0 ? (
          <p className="hint">Aucune variante pour cette génération.</p>
        ) : (
          <div className="variant-cards" role="group" aria-label="Variante">
            {generationVariants.map((variant) => {
              const selected = draft.catalogId === variant.id
              return (
                <button
                  key={variant.id}
                  type="button"
                  className={selected ? 'variant-card chosen' : 'variant-card'}
                  aria-pressed={selected}
                  onClick={() => updateDraft({ catalogId: variant.id })}
                >
                  <img src={variantImage(variant.icon)} alt="" />
                  <span>{variant.name}</span>
                </button>
              )
            })}
          </div>
        )}
        <div className="details-row">
          <SexChoice
            value={draft.sex}
            onChange={(sex) => updateDraft({ sex })}
          />
          <label>
            État
            <select
              value={draft.status}
              onChange={(event) =>
                updateDraft({ status: event.target.value as ReproductiveStatus })
              }
            >
              {STATUSES.map((status) => (
                <option key={status} value={status}>
                  {STATUS_LABELS[status]}
                </option>
              ))}
            </select>
          </label>
          <label>
            Niveau
            <input
              inputMode="numeric"
              value={draft.level}
              onChange={(event) => updateDraft({ level: event.target.value })}
            />
          </label>
          {editing ? null : (
            <label>
              Quantité
              <input
                inputMode="numeric"
                value={draft.count}
                onChange={(event) => updateDraft({ count: event.target.value })}
              />
            </label>
          )}
        </div>
        {selectedVariant && !selectedVariant.breedable ? (
          <p className="hint">Cette variante spéciale n’est pas reproductible.</p>
        ) : null}
        {formError ? <p className="error">{formError}</p> : null}
        <div className="actions">
          <button type="submit">{editing ? 'Enregistrer' : 'Ajouter'}</button>
        </div>
      </form>

      <section className="panel">
        <div className="panel-heading">
          <h2>Stock</h2>
          <p className="count">
            {visible.length === 1
              ? `1 affichée sur ${mounts.length}`
              : `${visible.length} affichées sur ${mounts.length}`}
          </p>
        </div>
        <div className="filters">
          <SexChoice
            value={filters.sex === 'all' ? null : filters.sex}
            onChange={(sex) =>
              setFilters((current) => ({
                ...current,
                sex: current.sex === sex ? 'all' : sex,
              }))
            }
          />
          <label>
            État
            <select
              value={filters.status}
              onChange={(event) =>
                setFilters((current) => ({
                  ...current,
                  status: event.target.value as Filters['status'],
                }))
              }
            >
              <option value="all">Tous</option>
              {STATUSES.map((status) => (
                <option key={status} value={status}>
                  {STATUS_LABELS[status]}
                </option>
              ))}
            </select>
          </label>
          <label>
            Génération
            <select
              value={filters.generation}
              onChange={(event) =>
                setFilters((current) => ({
                  ...current,
                  generation:
                    event.target.value === 'all' ? 'all' : Number(event.target.value),
                }))
              }
            >
              <option value="all">Toutes</option>
              {Array.from({ length: 10 }, (_, index) => index + 1).map((generation) => (
                <option key={generation} value={generation}>
                  Génération {generation}
                </option>
              ))}
            </select>
          </label>
          <label className="search">
            Recherche
            <input
              value={filters.query}
              placeholder="Nom"
              onChange={(event) =>
                setFilters((current) => ({ ...current, query: event.target.value }))
              }
            />
          </label>
        </div>

        {visible.length === 0 ? (
          <p className="empty">
            {mounts.length === 0
              ? 'Le stock est vide. Ajoute une première monture.'
              : 'Aucune monture ne correspond à ces filtres.'}
          </p>
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Qté</th>
                  <th>Espèce</th>
                  <th>Variante</th>
                  <th>Génération</th>
                  <th>Sexe</th>
                  <th>État</th>
                  <th>Niveau</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {groups.map((group) => {
                  const mount = group.mounts[0]
                  const ids = group.mounts.map((entry) => entry.id)
                  const variant = mount ? getVariant(mount.catalogId) : undefined
                  const label = variant
                    ? `${SPECIES_LABELS[variant.species]} ${variant.name}`
                    : 'ces montures'
                  const isEditing = ids.some((id) => editingIds.includes(id))
                  return (
                    <tr key={group.key} className={isEditing ? 'editing' : undefined}>
                      <td className="qty">{group.mounts.length}</td>
                      <td>{variant ? SPECIES_LABELS[variant.species] : '—'}</td>
                      <td>{variant?.name ?? 'Variante inconnue'}</td>
                      <td>{generationLabel(variant?.generation ?? null)}</td>
                      <td>{mount ? SEX_LABELS[mount.sex] : '—'}</td>
                      <td>{mount ? STATUS_LABELS[mount.status] : '—'}</td>
                      <td>{mount?.level ?? '—'}</td>
                      <td className="row-actions">
                        <button
                          type="button"
                          className="ghost"
                          onClick={() => mount && startEdit(ids, mount)}
                        >
                          Modifier
                        </button>
                        <button type="button" className="danger" onClick={() => removeGroup(ids, label)}>
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}

        <div className="backup">
          <button type="button" className="ghost" onClick={exportStock} disabled={mounts.length === 0}>
            Exporter JSON
          </button>
          <label className="file">
            Importer JSON
            <input
              type="file"
              accept="application/json,.json"
              onChange={(event) => {
                const file = event.target.files?.[0]
                event.target.value = ''
                if (file) importStock(file)
              }}
            />
          </label>
        </div>
        {notice ? <p className="notice">{notice}</p> : null}
      </section>
      </>
      ) : null}
      <p className="footer">{CATALOG.length} variantes au catalogue.</p>
    </div>
  )
}

function SexChoice({ value, onChange }: { value: Sex | null; onChange: (sex: Sex) => void }) {
  return (
    <div className="sex-choice">
      <span>Sexe</span>
      <div className="sex-logos" role="group" aria-label="Sexe">
        <button
          type="button"
          className={value === 'female' ? 'sex-logo female chosen' : 'sex-logo female'}
          aria-pressed={value === 'female'}
          aria-label="Femelle"
          onClick={() => onChange('female')}
        >
          <FemaleMark />
        </button>
        <button
          type="button"
          className={value === 'male' ? 'sex-logo male chosen' : 'sex-logo male'}
          aria-pressed={value === 'male'}
          aria-label="Mâle"
          onClick={() => onChange('male')}
        >
          <MaleMark />
        </button>
      </div>
    </div>
  )
}

function FemaleMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="9" r="5.2" />
      <path d="M12 14.2V21M9.2 18.2h5.6" />
    </svg>
  )
}

function MaleMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="10" cy="14" r="5.2" />
      <path d="M13.7 10.3 20 4M15.2 4H20v4.8" />
    </svg>
  )
}

function groupVariants(variants: ReturnType<typeof variantsForSpecies>) {
  const groups = new Map<string, typeof variants>()
  for (const variant of variants) {
    const label = variant.generation === null ? 'Spéciales' : `Génération ${variant.generation}`
    const current = groups.get(label) ?? []
    current.push(variant)
    groups.set(label, current)
  }
  return [...groups.entries()].map(([label, group]) => ({ label, variants: group }))
}
