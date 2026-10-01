import { getVariant } from './data/catalog.ts'
import { SEXES, STATUSES, type Mount } from './types.ts'

export const STORAGE_KEY = 'dofus-elevage-stock-v1'

export type ImportResult =
  | { ok: true; mounts: Mount[]; skipped: number }
  | { ok: false; error: string }

type StorageLike = Pick<Storage, 'getItem' | 'setItem'>

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function parseMount(value: unknown, usedIds: Set<string>): Mount | null {
  if (!isRecord(value)) return null
  if (typeof value.catalogId !== 'string' || !getVariant(value.catalogId)) return null
  if (typeof value.sex !== 'string' || !SEXES.includes(value.sex as Mount['sex'])) return null
  if (typeof value.status !== 'string' || !STATUSES.includes(value.status as Mount['status'])) {
    return null
  }
  if (typeof value.level !== 'number' || !Number.isInteger(value.level)) return null
  if (value.level < 1 || value.level > 200) return null
  if (value.nickname !== undefined && typeof value.nickname !== 'string') return null

  let id = typeof value.id === 'string' && value.id.trim() ? value.id.trim() : crypto.randomUUID()
  if (usedIds.has(id)) id = crypto.randomUUID()
  usedIds.add(id)

  return {
    id,
    catalogId: value.catalogId,
    sex: value.sex as Mount['sex'],
    status: value.status as Mount['status'],
    level: value.level,
    nickname: typeof value.nickname === 'string' ? value.nickname.trim() : '',
  }
}

export function parseStock(raw: string): ImportResult {
  let parsed: unknown
  try {
    parsed = JSON.parse(raw)
  } catch {
    return { ok: false, error: 'Le fichier n’est pas un JSON valide.' }
  }

  if (!Array.isArray(parsed)) {
    return { ok: false, error: 'Le fichier doit contenir une liste de montures.' }
  }

  const usedIds = new Set<string>()
  const mounts: Mount[] = []
  let skipped = 0
  for (const entry of parsed) {
    const mount = parseMount(entry, usedIds)
    if (mount) mounts.push(mount)
    else skipped += 1
  }

  return { ok: true, mounts, skipped }
}

export function serializeStock(mounts: Mount[]): string {
  return JSON.stringify(mounts, null, 2)
}

export function readStock(storage: StorageLike, key = STORAGE_KEY): Mount[] {
  const raw = storage.getItem(key)
  if (!raw) return []
  const result = parseStock(raw)
  return result.ok ? result.mounts : []
}

export function writeStock(storage: StorageLike, mounts: Mount[], key = STORAGE_KEY): void {
  storage.setItem(key, serializeStock(mounts))
}
