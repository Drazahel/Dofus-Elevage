import { useMemo, useState } from 'react'
import { getVariant, variantImage, variantsForSpecies } from './data/catalog.ts'
import { offspringIds, parentCouples, stockByCatalog, stockFor, type SexStock } from './genetics.ts'
import { SPECIES, SPECIES_IMAGES, SPECIES_LABELS, type Mount, type Species } from './types.ts'

const START: Record<Species, string> = {
  dragodinde: 'dragodinde-amande',
  muldo: 'muldo-roux',
  volkorne: 'volkorne-roux',
}

export function GeneticsPanel({ mounts }: { mounts: Mount[] }) {
  const [species, setSpecies] = useState<Species>('muldo')
  const [focusId, setFocusId] = useState(START.muldo)
  const stock = useMemo(() => stockByCatalog(mounts), [mounts])
  const focus = getVariant(focusId)
  const couples = parentCouples(focusId)
  const children = offspringIds(focusId)
  const reminder = couples[0]
  const options = useMemo(() => groupByGeneration(variantsForSpecies(species)), [species])

  function openSpecies(next: Species) {
    setSpecies(next)
    setFocusId(START[next])
  }

  function openMount(catalogId: string) {
    const variant = getVariant(catalogId)
    if (!variant) return
    setSpecies(variant.species)
    setFocusId(catalogId)
  }

  return (
    <section className="panel genetics">
      <div className="panel-heading">
        <h2>Génétique</h2>
      </div>
      <div className="species-cards" role="group" aria-label="Espèce">
        {SPECIES.map((item) => (
          <button
            key={item}
            type="button"
            className={species === item ? 'species-card chosen' : 'species-card'}
            aria-pressed={species === item}
            onClick={() => openSpecies(item)}
          >
            <img src={SPECIES_IMAGES[item]} alt="" />
            <span className="species-card-label">
              <strong>{SPECIES_LABELS[item]}</strong>
            </span>
          </button>
        ))}
      </div>
      <label className="gene-picker">
        Monture
        <select value={focusId} onChange={(event) => openMount(event.target.value)}>
          {options.map((group) => (
            <optgroup key={group.label} label={group.label}>
              {group.variants.map((variant) => (
                <option key={variant.id} value={variant.id}>
                  {variant.name}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </label>

      <div className="gene-tree">
        {reminder ? (
          <>
            <p className="gene-caption">Gènes parentaux</p>
            <div className="gene-parents">
              <GeneCard catalogId={reminder[0]} onOpen={openMount} />
              <GeneCard catalogId={reminder[1]} onOpen={openMount} />
            </div>
            <div className="gene-bridge" aria-hidden="true" />
          </>
        ) : (
          <p className="hint gene-caption">
            {focus?.breedable
              ? 'Aucun parent : cette monture se capture à l’état sauvage.'
              : 'Cette monture ne s’élève pas.'}
          </p>
        )}
        <div className="gene-center">
          {focus ? <GeneCard catalogId={focus.id} featured /> : null}
        </div>
        <p className="gene-caption">Ce qu’elle peut produire</p>
        {children.length === 0 ? (
          <p className="hint">Pas de descendance directe.</p>
        ) : (
          <div className="gene-children">
            {children.map((catalogId) => (
              <GeneCard key={catalogId} catalogId={catalogId} compact onOpen={openMount} />
            ))}
          </div>
        )}
      </div>

      <div className="gene-possible">
        <h3>Parents possibles</h3>
        {focus ? (
          <div className="pair-focus">
            <img src={variantImage(focus.icon)} alt="" />
            <div>
              <strong>{focus.name}</strong>
              <span>{generationLabel(focus.generation)}</span>
            </div>
          </div>
        ) : null}
        {couples.length === 0 ? (
          <p className="hint">Aucun couple ne produit cette monture.</p>
        ) : (
          <ul className="pair-list">
            {couples.map((pair) => (
              <li key={pair.join('|')}>
                <GeneCard
                  catalogId={pair[0]}
                  compact
                  stock={stockFor(stock, pair[0])}
                  onOpen={openMount}
                />
                <span className="pair-join" aria-hidden="true">
                  +
                </span>
                <GeneCard
                  catalogId={pair[1]}
                  compact
                  stock={stockFor(stock, pair[1])}
                  onOpen={openMount}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

function GeneCard({
  catalogId,
  onOpen,
  featured = false,
  compact = false,
  stock,
}: {
  catalogId: string
  onOpen?: (catalogId: string) => void
  featured?: boolean
  compact?: boolean
  stock?: SexStock
}) {
  const variant = getVariant(catalogId)
  if (!variant) return null
  const className = [
    'gene-card',
    featured ? 'featured' : '',
    compact ? 'compact' : '',
    onOpen ? '' : 'static',
  ]
    .filter(Boolean)
    .join(' ')
  const body = (
    <>
      <img src={variantImage(variant.icon)} alt="" />
      <span className="gene-gen">{generationLabel(variant.generation)}</span>
      <span className="gene-name">{variant.name}</span>
      {stock ? <StockMarks stock={stock} /> : null}
    </>
  )
  if (!onOpen) {
    return <div className={className}>{body}</div>
  }
  return (
    <button type="button" className={className} title={variant.name} onClick={() => onOpen(catalogId)}>
      {body}
    </button>
  )
}

function StockMarks({ stock }: { stock: SexStock }) {
  return (
    <span className="gene-stock">
      <span className={stock.female > 0 ? 'has-female' : ''}>{stock.female} ♀</span>
      <span className={stock.male > 0 ? 'has-male' : ''}>{stock.male} ♂</span>
    </span>
  )
}

function generationLabel(generation: number | null): string {
  return generation == null ? 'Spéciale' : `GEN. ${generation}`
}

function groupByGeneration(variants: ReturnType<typeof variantsForSpecies>) {
  const groups = new Map<string, typeof variants>()
  for (const variant of variants) {
    if (!variant.breedable) continue
    const label = variant.generation == null ? 'Spéciales' : `Génération ${variant.generation}`
    const current = groups.get(label) ?? []
    current.push(variant)
    groups.set(label, current)
  }
  return [...groups.entries()].map(([label, group]) => ({ label, variants: group }))
}
