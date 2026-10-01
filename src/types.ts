export const SPECIES = ['dragodinde', 'muldo', 'volkorne'] as const
export type Species = (typeof SPECIES)[number]

export const SEXES = ['male', 'female'] as const
export type Sex = (typeof SEXES)[number]

export const STATUSES = ['raising', 'fertile', 'sterile', 'senile'] as const
export type ReproductiveStatus = (typeof STATUSES)[number]

export type CatalogVariant = {
  id: string
  species: Species
  name: string
  generation: number | null
  breedable: boolean
}

export type Mount = {
  id: string
  catalogId: string
  sex: Sex
  status: ReproductiveStatus
  level: number
  nickname: string
}

export type Filters = {
  species: Species | 'all'
  sex: Sex | 'all'
  status: ReproductiveStatus | 'all'
  generation: number | 'all'
  query: string
}

export const SPECIES_LABELS: Record<Species, string> = {
  dragodinde: 'Dragodinde',
  muldo: 'Muldo',
  volkorne: 'Volkorne',
}

export const SEX_LABELS: Record<Sex, string> = {
  male: 'Mâle',
  female: 'Femelle',
}

export const STATUS_LABELS: Record<ReproductiveStatus, string> = {
  raising: 'En élevage',
  fertile: 'Féconde',
  sterile: 'Stérile',
  senile: 'Sénile',
}

export const EMPTY_FILTERS: Filters = {
  species: 'all',
  sex: 'all',
  status: 'all',
  generation: 'all',
  query: '',
}
