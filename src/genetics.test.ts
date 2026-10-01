import { describe, expect, it } from 'vitest'
import { offspringIds, parentCouples, stockByCatalog, stockFor } from './genetics.ts'
import type { Mount } from './types.ts'

function mount(catalogId: string, sex: Mount['sex']): Mount {
  return {
    id: catalogId + sex,
    catalogId,
    sex,
    status: 'fertile',
    level: 80,
    nickname: '',
  }
}

describe('génétique', () => {
  it('liste les six couples qui donnent un muldo roux', () => {
    expect(parentCouples('muldo-roux')).toEqual([
      ['muldo-dore-et-pourpre', 'muldo-dore-et-indigo'],
      ['muldo-dore-et-pourpre', 'muldo-dore-et-ebene'],
      ['muldo-dore-et-pourpre', 'muldo-dore-et-orchidee'],
      ['muldo-dore-et-orchidee', 'muldo-dore-et-indigo'],
      ['muldo-dore-et-orchidee', 'muldo-dore-et-ebene'],
      ['muldo-dore-et-ebene', 'muldo-dore-et-indigo'],
    ])
  })

  it('rappelle le couple parental d’une amande et sa descendance', () => {
    expect(parentCouples('muldo-amande')[0]).toEqual([
      'muldo-indigo-et-pourpre',
      'muldo-ebene-et-orchidee',
    ])
    expect(offspringIds('muldo-amande')).toContain('muldo-roux-et-amande')
    expect(offspringIds('muldo-dore-et-pourpre')).toContain('muldo-roux')
  })

  it('compte le stock par sexe pour une variante', () => {
    const mounts: Mount[] = [
      mount('muldo-dore', 'male'),
      mount('muldo-dore', 'male'),
      mount('muldo-dore', 'female'),
    ]
    const counts = stockByCatalog(mounts)
    expect(stockFor(counts, 'muldo-dore')).toEqual({ female: 1, male: 2 })
    expect(stockFor(counts, 'muldo-pourpre')).toEqual({ female: 0, male: 0 })
  })

  it('laisse les bases de génération 1 sans parent', () => {
    expect(parentCouples('muldo-dore')).toEqual([])
    expect(offspringIds('muldo-dore')).toContain('muldo-dore-et-pourpre')
  })
})
