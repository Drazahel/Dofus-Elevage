import { useEffect, useMemo, useState } from 'react'
import { CATALOG } from './data/catalog.ts'
import { GeneticsPanel } from './GeneticsPanel.tsx'
import { StockBoard } from './StockBoard.tsx'
import { summarize } from './stock.ts'
import { parseStock, readObtained, readStock, serializeStock, writeObtained, writeStock } from './storage.ts'
import { SPECIES, SPECIES_LABELS, type Mount } from './types.ts'

export default function App() {
  const [mounts, setMounts] = useState<Mount[]>(() => readStock(localStorage))
  const [obtained, setObtained] = useState<Set<string>>(() => readObtained(localStorage))
  const [notice, setNotice] = useState('')
  const [view, setView] = useState<'stock' | 'genetics'>('stock')
  const [geneFocus, setGeneFocus] = useState<{ id: string; token: number } | null>(null)
  const summary = useMemo(() => summarize(mounts), [mounts])

  useEffect(() => {
    writeStock(localStorage, mounts)
  }, [mounts])

  useEffect(() => {
    writeObtained(localStorage, obtained)
  }, [obtained])

  function toggleObtained(catalogId: string) {
    setObtained((current) => {
      const next = new Set(current)
      if (next.has(catalogId)) next.delete(catalogId)
      else next.add(catalogId)
      return next
    })
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
        setNotice(result.error)
        return
      }
      if (
        mounts.length > 0 &&
        !window.confirm('Remplacer le stock actuel par le fichier importé ?')
      ) {
        return
      }
      setMounts(result.mounts)
      const skipped =
        result.skipped > 0
          ? `, ${result.skipped} entrée${result.skipped > 1 ? 's' : ''} ignorée${result.skipped > 1 ? 's' : ''}`
          : ''
      setNotice(
        `${result.mounts.length} monture${result.mounts.length > 1 ? 's' : ''} importée${result.mounts.length > 1 ? 's' : ''}${skipped}.`,
      )
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

      {view === 'genetics' ? (
        <GeneticsPanel
          mounts={mounts}
          obtained={obtained}
          focusRequest={geneFocus}
          onToggleObtained={toggleObtained}
        />
      ) : null}
      {view === 'stock' ? (
        <>
          <StockBoard
            mounts={mounts}
            obtained={obtained}
            onChange={setMounts}
            onOpenGenetics={(catalogId) => {
              setGeneFocus({ id: catalogId, token: Date.now() })
              setView('genetics')
            }}
            onToggleObtained={toggleObtained}
          />
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
        </>
      ) : null}
      <p className="footer">{CATALOG.length} variantes au catalogue.</p>
    </div>
  )
}
