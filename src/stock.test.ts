import { describe, expect, it } from 'vitest'
import { CATALOG } from './data/catalog.ts'
import { filterMounts, summarize } from './stock.ts'
import { parseStock, readStock, serializeStock, writeStock } from './storage.ts'
import { EMPTY_FILTERS, type Mount } from './types.ts'

const amande: Mount = {
  id: 'm1',
  catalogId: 'dragodinde-amande',
  sex: 'female',
  status: 'fertile',
  level: 100,
  nickname: 'Lina',
}

const dore: Mount = {
  id: 'm2',
  catalogId: 'muldo-dore',
  sex: 'male',
  status: 'raising',
  level: 12,
  nickname: '',
}

const prune: Mount = {
  id: 'm3',
  catalogId: 'volkorne-prune',
  sex: 'female',
  status: 'sterile',
  level: 200,
  nickname: 'Émeraude-bis',
}

describe('catalogue', () => {
  it('couvre les trois familles et les deux spéciales', () => {
    const counts = { dragodinde: 0, muldo: 0, volkorne: 0 }
    let specials = 0
    for (const variant of CATALOG) {
      counts[variant.species] += 1
      if (!variant.breedable) specials += 1
    }
    expect(counts).toEqual({ dragodinde: 68, muldo: 120, volkorne: 120 })
    expect(specials).toBe(2)
  })
})

describe('filtrage', () => {
  const stock = [amande, dore, prune]

  it('filtre par espèce, sexe, état et génération', () => {
    expect(filterMounts(stock, { ...EMPTY_FILTERS, species: 'muldo' })).toEqual([dore])
    expect(filterMounts(stock, { ...EMPTY_FILTERS, sex: 'female' })).toEqual([amande, prune])
    expect(filterMounts(stock, { ...EMPTY_FILTERS, status: 'fertile' })).toEqual([amande])
    expect(filterMounts(stock, { ...EMPTY_FILTERS, generation: 1 })).toEqual([amande, dore])
  })

  it('recherche le nom et le surnom sans tenir compte des accents', () => {
    expect(filterMounts(stock, { ...EMPTY_FILTERS, query: 'emeraude' })).toEqual([prune])
    expect(filterMounts(stock, { ...EMPTY_FILTERS, query: 'lina' })).toEqual([amande])
  })
})

describe('résumé', () => {
  it('compte les espèces, les sexes et les fécondes', () => {
    expect(summarize([amande, dore, prune])).toEqual({
      total: 3,
      bySpecies: { dragodinde: 1, muldo: 1, volkorne: 1 },
      males: 1,
      females: 2,
      fertile: 1,
    })
  })
})

describe('stockage', () => {
  it('relit un export valide', () => {
    const result = parseStock(serializeStock([amande]))
    expect(result).toEqual({ ok: true, mounts: [amande], skipped: 0 })
  })

  it('refuse un fichier qui n’est pas une liste', () => {
    expect(parseStock('{"id":1}').ok).toBe(false)
    expect(parseStock('pas du json').ok).toBe(false)
  })

  it('ignore les fiches inconnues et conserve les valides', () => {
    const raw = JSON.stringify([
      amande,
      { ...dore, catalogId: 'inexistant' },
      { ...prune, level: 0 },
    ])
    const result = parseStock(raw)
    expect(result).toEqual({ ok: true, mounts: [amande], skipped: 2 })
  })

  it('écrit et relit via un stockage mémoire', () => {
    const memory = new Map<string, string>()
    const storage = {
      getItem: (key: string) => memory.get(key) ?? null,
      setItem: (key: string, value: string) => {
        memory.set(key, value)
      },
    }
    writeStock(storage, [dore])
    expect(readStock(storage)).toEqual([dore])
    storage.setItem('dofus-elevage-stock-v1', '{')
    expect(readStock(storage)).toEqual([])
  })
})
