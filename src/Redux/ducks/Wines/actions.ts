import { action } from 'typesafe-actions'
import { Wines, ActionTypes } from './types'

export interface getWineBox {
  type: ActionTypes
  payload: Wines
}

export interface addWineBox {
  type: ActionTypes
  payload: Wines[]
}

export interface addFilter {
  type: ActionTypes
  payload: string
}

export const getWineBoxAction = (data: Wines): getWineBox =>
  action(ActionTypes.GET_WINE, data)

export const AddMoreOneAction = (data: Wines[]): addWineBox =>
  action(ActionTypes.ADD_WINE, data)

export const getFilterAction = (data: string): addFilter =>
  action(ActionTypes.ADD_FILTER, data)
