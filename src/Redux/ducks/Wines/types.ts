// ACTION TYPES

export enum ActionTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCESS = '@repositories/LOAD_SUCESS',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE'
}

// DATA TYPES

export interface Wines {
  avaliations: number
  classification: string
  country: string
  discount: number
  flag: string
  id: number
  image: string
  name: string
  price: number
  priceMember: number
  priceNonMember: number
  rating: number
  region: string
  size: string
  sommelierComment: string
  type: string
}

// STATE TYPES

export interface WinesState {
  readonly data: Wines[]
  readonly loading: boolean
  readonly error: boolean
}
