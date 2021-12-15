// ACTION TYPES

export enum ActionTypes {
  GET_WINE = '@wines/GET_WINE',
  ADD_WINE = '@wines/ADD_WINE'
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
  quantity?: number
  wineBoxPrice?: number
}

// STATE TYPES

export interface WinesState {
  readonly wineBox: Wines[]
}
