import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { CATALOG, getVariant, variantsForSpecies } from './data/catalog.ts'
import { filterMounts, sortMounts, summarize, createMounts } from './stock.ts'
import { parseStock, readStock, serializeStock, writeStock } from './storage.ts'
import {
  EMPTY_FILTERS,
  SEX_LABELS,
  SEXES,
  SPECIES,
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
  nickname: string
  count: string
}

const DEFAULT_DRAFT: Draft = {
  species: 'dragodinde',
  catalogId: 'dragodinde-amande',
  sex: 'female',
  status: 'raising',
  level: '1',
  nickname: '',
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
    nickname: mount.nickname,
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
  const [draft, setDraft] = useState<Draft>(DEFAULT_DRAFT)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formError, setFormError] = useState('')
  const [notice, setNotice] = useState('')

  useEffect(() => {
    writeStock(localStorage, mounts)
  }, [mounts])

  const summary = useMemo(() => summarize(mounts), [mounts])
  const visible = useMemo(
    () => sortMounts(filterMounts(mounts, filters)),
    [mounts, filters],
  )
  const variants = variantsForSpecies(draft.species)
  const selectedVariant = getVariant(draft.catalogId)

  function updateDraft(patch: Partial<Draft>) {
    setDraft((current) => ({ ...current, ...patch }))
    setFormError('')
  }

  function changeSpecies(species: Species) {
    const nextVariants = variantsForSpecies(species)
    updateDraft({
      species,
      catalogId: nextVariants[0]?.id ?? '',
    })
  }

  function resetForm() {
    setDraft(DEFAULT_DRAFT)
    setEditingId(null)
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
      nickname: draft.nickname,
    }

    if (editingId) {
      setMounts((current) =>
        current.map((mount) =>
          mount.id === editingId ? { ...mount, ...payload, nickname: payload.nickname.trim() } : mount,
        ),
      )
      setNotice('Monture mise à jour.')
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
    setDraft((current) => ({ ...current, nickname: '', count: '1' }))
  }

  function startEdit(mount: Mount) {
    setEditingId(mount.id)
    setDraft(draftFromMount(mount))
    setFormError('')
    setNotice('')
    document.getElementById('stock-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function removeMount(mount: Mount) {
    const variant = getVariant(mount.catalogId)
    const label = variant ? `${SPECIES_LABELS[variant.species]} ${variant.name}` : 'cette monture'
    if (!window.confirm(`Retirer ${label} du stock ?`)) return
    setMounts((current) => current.filter((entry) => entry.id !== mount.id))
    if (editingId === mount.id) resetForm()
    setNotice('Monture retirée du stock.')
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

      <form id="stock-form" className="panel" onSubmit={submitForm}>
        <div className="panel-heading">
          <h2>{editingId ? 'Modifier une monture' : 'Ajouter au stock'}</h2>
          {editingId ? (
            <button type="button" className="ghost" onClick={resetForm}>
              Annuler
            </button>
          ) : null}
        </div>
        <div className="form-grid">
          <label>
            Espèce
            <select
              value={draft.species}
              onChange={(event) => changeSpecies(event.target.value as Species)}
            >
              {SPECIES.map((species) => (
                <option key={species} value={species}>
                  {SPECIES_LABELS[species]}
                </option>
              ))}
            </select>
          </label>
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
          <label>
            Sexe
            <select
              value={draft.sex}
              onChange={(event) => updateDraft({ sex: event.target.value as Sex })}
            >
              {SEXES.map((sex) => (
                <option key={sex} value={sex}>
                  {SEX_LABELS[sex]}
                </option>
              ))}
            </select>
          </label>
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
          <label>
            Surnom
            <input
              value={draft.nickname}
              maxLength={40}
              placeholder="Optionnel"
              onChange={(event) => updateDraft({ nickname: event.target.value })}
            />
          </label>
          {editingId ? null : (
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
          <button type="submit">{editingId ? 'Enregistrer' : 'Ajouter'}</button>
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
          <label>
            Espèce
            <select
              value={filters.species}
              onChange={(event) =>
                setFilters((current) => ({
                  ...current,
                  species: event.target.value as Filters['species'],
                }))
              }
            >
              <option value="all">Toutes</option>
              {SPECIES.map((species) => (
                <option key={species} value={species}>
                  {SPECIES_LABELS[species]}
                </option>
              ))}
            </select>
          </label>
          <label>
            Sexe
            <select
              value={filters.sex}
              onChange={(event) =>
                setFilters((current) => ({ ...current, sex: event.target.value as Filters['sex'] }))
              }
            >
              <option value="all">Tous</option>
              {SEXES.map((sex) => (
                <option key={sex} value={sex}>
                  {SEX_LABELS[sex]}
                </option>
              ))}
            </select>
          </label>
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
              placeholder="Nom ou surnom"
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
                  <th>Espèce</th>
                  <th>Variante</th>
                  <th>Génération</th>
                  <th>Sexe</th>
                  <th>État</th>
                  <th>Niveau</th>
                  <th>Surnom</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {visible.map((mount) => {
                  const variant = getVariant(mount.catalogId)
                  return (
                    <tr key={mount.id} className={mount.id === editingId ? 'editing' : undefined}>
                      <td>{variant ? SPECIES_LABELS[variant.species] : '—'}</td>
                      <td>{variant?.name ?? 'Variante inconnue'}</td>
                      <td>{generationLabel(variant?.generation ?? null)}</td>
                      <td>{SEX_LABELS[mount.sex]}</td>
                      <td>{STATUS_LABELS[mount.status]}</td>
                      <td>{mount.level}</td>
                      <td>{mount.nickname || '—'}</td>
                      <td className="row-actions">
                        <button type="button" className="ghost" onClick={() => startEdit(mount)}>
                          Modifier
                        </button>
                        <button type="button" className="danger" onClick={() => removeMount(mount)}>
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
      <p className="footer">{CATALOG.length} variantes au catalogue.</p>
    </div>
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
