import { useEffect, useMemo, useState } from 'react'
import { CrownToggle } from './CrownToggle.tsx'
import { variantImage, variantsForSpecies } from './data/catalog.ts'
import { stockByCatalog, stockFor } from './genetics.ts'
import { setSexQuantity } from './stock.ts'
import {
  SPECIES,
  SPECIES_IMAGES,
  SPECIES_LABELS,
  type Mount,
  type Sex,
  type Species,
} from './types.ts'

export function StockBoard({
  mounts,
  obtained,
  onChange,
  onOpenGenetics,
  onToggleObtained,
}: {
  mounts: Mount[]
  obtained: Set<string>
  onChange: (mounts: Mount[]) => void
  onOpenGenetics: (catalogId: string) => void
  onToggleObtained: (catalogId: string) => void
}) {
  const [species, setSpecies] = useState<Species>('muldo')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const counts = useMemo(() => stockByCatalog(mounts), [mounts])
  const groups = useMemo(() => groupByGeneration(variantsForSpecies(species)), [species])

  useEffect(() => {
    if (!selectedId) return
    const slotId = selectedId
    function close(event: MouseEvent) {
      const slot = document.querySelector(`[data-slot="${CSS.escape(slotId)}"]`)
      if (event.target instanceof Node && slot?.contains(event.target)) return
      setSelectedId(null)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [selectedId])

  function changeQuantity(catalogId: string, sex: Sex, quantity: number) {
    onChange(setSexQuantity(mounts, catalogId, sex, quantity))
  }

  return (
    <section className="panel">
      <div className="panel-heading">
        <h2>Stock</h2>
      </div>
      <div className="species-cards" role="group" aria-label="Espèce">
        {SPECIES.map((item) => (
          <button
            key={item}
            type="button"
            className={species === item ? 'species-card chosen' : 'species-card'}
            aria-pressed={species === item}
            onClick={() => {
              setSpecies(item)
              setSelectedId(null)
            }}
          >
            <img src={SPECIES_IMAGES[item]} alt="" />
            <span className="species-card-label">
              <strong>{SPECIES_LABELS[item]}</strong>
            </span>
          </button>
        ))}
      </div>
      {groups.map((group) => (
        <div key={group.label} className="stock-generation">
          <h3>{group.label}</h3>
          <div className="stock-grid">
            {group.variants.map((variant) => {
              const stock = stockFor(counts, variant.id)
              const owned = stock.female + stock.male > 0
              const open = selectedId === variant.id
              return (
                <div key={variant.id} className={open ? 'stock-slot open' : 'stock-slot'} data-slot={variant.id}>
                  <button
                    type="button"
                    className={owned ? 'stock-card owned' : 'stock-card'}
                    aria-pressed={open}
                    onClick={() => setSelectedId(open ? null : variant.id)}
                  >
                    <img src={variantImage(variant.icon)} alt="" />
                    <span className="gene-name">{variant.name}</span>
                    <span className="stock-qty">
                      <span>
                        {stock.female} <span className="sex-female">♀</span>
                      </span>
                      <span>
                        {stock.male} <span className="sex-male">♂</span>
                      </span>
                    </span>
                  </button>
                  <CrownToggle
                    obtained={obtained.has(variant.id)}
                    label={variant.name}
                    onToggle={() => onToggleObtained(variant.id)}
                  />
                  {open ? (
                    <div className="qty-editor" role="dialog" aria-label={`Quantités de ${variant.name}`}>
                      <strong>{variant.name}</strong>
                      <QuantityLine
                        label="Femelle"
                        tone="female"
                        value={stock.female}
                        onChange={(quantity) => changeQuantity(variant.id, 'female', quantity)}
                      />
                      <QuantityLine
                        label="Mâle"
                        tone="male"
                        value={stock.male}
                        onChange={(quantity) => changeQuantity(variant.id, 'male', quantity)}
                      />
                      <button
                        type="button"
                        className="ghost gene-jump"
                        onClick={() => onOpenGenetics(variant.id)}
                      >
                        Comment l’obtenir
                      </button>
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </section>
  )
}

function QuantityLine({
  label,
  tone,
  value,
  onChange,
}: {
  label: string
  tone: 'female' | 'male'
  value: number
  onChange: (quantity: number) => void
}) {
  const [text, setText] = useState(String(value))

  useEffect(() => {
    setText(String(value))
  }, [value])

  return (
    <label className={`qty-line ${tone}`}>
      <span>
        {label} <span className={tone === 'female' ? 'sex-female' : 'sex-male'}>{tone === 'female' ? '♀' : '♂'}</span>
      </span>
      <span className="qty-controls">
        <button type="button" onClick={() => onChange(value - 1)} disabled={value === 0}>
          −
        </button>
        <input
          inputMode="numeric"
          value={text}
          aria-label={`Quantité ${label.toLowerCase()}`}
          onChange={(event) => {
            const raw = event.target.value
            setText(raw)
            if (/^\d+$/.test(raw)) onChange(Math.min(99, Number(raw)))
          }}
        />
        <button type="button" onClick={() => onChange(value + 1)} disabled={value >= 99}>
          +
        </button>
      </span>
    </label>
  )
}

function groupByGeneration(variants: ReturnType<typeof variantsForSpecies>) {
  const groups = new Map<string, typeof variants>()
  for (const variant of variants) {
    const label = variant.generation == null ? 'Spéciales' : `Génération ${variant.generation}`
    const current = groups.get(label) ?? []
    current.push(variant)
    groups.set(label, current)
  }
  return [...groups.entries()].map(([label, group]) => ({ label, variants: group }))
}
