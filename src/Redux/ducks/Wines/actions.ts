import { action } from 'typesafe-actions'
import { Wines, ActionTypes } from './types'

export interface Load {
  type: ActionTypes
  payload?: Wines[]
}

export const loadRequest = (): Load => action(ActionTypes.LOAD_REQUEST)

export const loadSucess = (data: Wines[]): Load =>
  action(ActionTypes.LOAD_SUCESS, data)

export const loadFailure = (): Load => action(ActionTypes.LOAD_FAILURE)
