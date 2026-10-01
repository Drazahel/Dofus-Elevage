import { getVariant } from './data/catalog.ts'
import {
  SEX_LABELS,
  SPECIES_LABELS,
  STATUS_LABELS,
  type Filters,
  type Mount,
  type ReproductiveStatus,
  type Sex,
  type Species,
} from './types.ts'

export type StockSummary = {
  total: number
  bySpecies: Record<Species, number>
  males: number
  females: number
  fertile: number
}

export function createMounts(
  input: Omit<Mount, 'id'>,
  count: number,
  createId: () => string = () => crypto.randomUUID(),
): Mount[] {
  const size = Math.max(1, Math.floor(count))
  return Array.from({ length: size }, () => ({
    ...input,
    nickname: input.nickname.trim(),
    id: createId(),
  }))
}

export function summarize(mounts: Mount[]): StockSummary {
  const summary: StockSummary = {
    total: mounts.length,
    bySpecies: { dragodinde: 0, muldo: 0, volkorne: 0 },
    males: 0,
    females: 0,
    fertile: 0,
  }

  for (const mount of mounts) {
    const variant = getVariant(mount.catalogId)
    if (variant) summary.bySpecies[variant.species] += 1
    if (mount.sex === 'male') summary.males += 1
    if (mount.sex === 'female') summary.females += 1
    if (mount.status === 'fertile') summary.fertile += 1
  }

  return summary
}

function fold(value: string): string {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLocaleLowerCase('fr')
}

export function filterMounts(mounts: Mount[], filters: Filters): Mount[] {
  const query = fold(filters.query.trim())

  return mounts.filter((mount) => {
    const variant = getVariant(mount.catalogId)
    if (!variant) return false
    if (filters.species !== 'all' && variant.species !== filters.species) return false
    if (filters.sex !== 'all' && mount.sex !== filters.sex) return false
    if (filters.status !== 'all' && mount.status !== filters.status) return false
    if (filters.generation !== 'all' && variant.generation !== filters.generation) return false
    if (!query) return true

    const haystack = fold(
      [
        variant.name,
        SPECIES_LABELS[variant.species],
        SEX_LABELS[mount.sex],
        STATUS_LABELS[mount.status],
      ].join(' '),
    )
    return haystack.includes(query)
  })
}

const SPECIES_ORDER: Record<Species, number> = {
  dragodinde: 0,
  muldo: 1,
  volkorne: 2,
}

const SEX_ORDER: Record<Sex, number> = {
  female: 0,
  male: 1,
}

const STATUS_ORDER: Record<ReproductiveStatus, number> = {
  fertile: 0,
  raising: 1,
  sterile: 2,
  senile: 3,
}

export type StockGroup = {
  key: string
  mounts: Mount[]
}

export function groupMounts(mounts: Mount[]): StockGroup[] {
  const groups = new Map<string, Mount[]>()
  const order: string[] = []

  for (const mount of mounts) {
    const key = [mount.catalogId, mount.sex, mount.status, String(mount.level)].join('\u0000')
    const existing = groups.get(key)
    if (existing) {
      existing.push(mount)
    } else {
      groups.set(key, [mount])
      order.push(key)
    }
  }

  return order.map((key) => ({ key, mounts: groups.get(key) ?? [] }))
}

export function sortMounts(mounts: Mount[]): Mount[] {
  return [...mounts].sort((left, right) => {
    const leftVariant = getVariant(left.catalogId)
    const rightVariant = getVariant(right.catalogId)
    const speciesDelta =
      SPECIES_ORDER[leftVariant?.species ?? 'dragodinde'] -
      SPECIES_ORDER[rightVariant?.species ?? 'dragodinde']
    if (speciesDelta) return speciesDelta

    const leftGeneration = leftVariant?.generation ?? 99
    const rightGeneration = rightVariant?.generation ?? 99
    if (leftGeneration !== rightGeneration) return leftGeneration - rightGeneration

    const nameDelta = (leftVariant?.name ?? '').localeCompare(rightVariant?.name ?? '', 'fr')
    if (nameDelta) return nameDelta

    const sexDelta = SEX_ORDER[left.sex] - SEX_ORDER[right.sex]
    if (sexDelta) return sexDelta

    const statusDelta = STATUS_ORDER[left.status] - STATUS_ORDER[right.status]
    if (statusDelta) return statusDelta

    return left.level - right.level
  })
}
