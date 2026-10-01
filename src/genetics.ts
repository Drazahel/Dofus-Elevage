import { getVariant } from './data/catalog.ts'
import { LINEAGE, type ParentPair } from './data/lineage.ts'
import type { Mount } from './types.ts'

export type SexStock = { female: number; male: number }

const EMPTY_STOCK: SexStock = { female: 0, male: 0 }

export function stockByCatalog(mounts: Mount[]): Map<string, SexStock> {
  const counts = new Map<string, SexStock>()
  for (const mount of mounts) {
    const current = counts.get(mount.catalogId) ?? { female: 0, male: 0 }
    current[mount.sex] += 1
    counts.set(mount.catalogId, current)
  }
  return counts
}

export function stockFor(counts: Map<string, SexStock>, catalogId: string): SexStock {
  return counts.get(catalogId) ?? EMPTY_STOCK
}

export function parentCouples(catalogId: string): ParentPair[] {
  return LINEAGE[catalogId]?.parentPairs ?? []
}

export function offspringIds(catalogId: string): string[] {
  const ids = LINEAGE[catalogId]?.children ?? []
  return [...ids].sort((left, right) => {
    const leftVariant = getVariant(left)
    const rightVariant = getVariant(right)
    const generationDelta = (leftVariant?.generation ?? 99) - (rightVariant?.generation ?? 99)
    if (generationDelta) return generationDelta
    return (leftVariant?.name ?? '').localeCompare(rightVariant?.name ?? '', 'fr')
  })
}
