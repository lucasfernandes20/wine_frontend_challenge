import { Reducer } from 'redux'
import { WinesState, ActionTypes, FilterState } from './types'

const INITIAL_STATE: WinesState = {
  wineBox: []
}

export const wines: Reducer<WinesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_WINE:
      return {
        ...state,
        wineBox: [...state.wineBox, action.payload]
      }
    case ActionTypes.ADD_WINE:
      return {
        ...state,
        wineBox: action.payload
      }
    default:
      return state
  }
}

const INITIAL_FILTER: FilterState = {
  filter: ''
}

export const filter: Reducer<FilterState> = (
  state = INITIAL_FILTER,
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_FILTER:
      return {
        ...state,
        filter: action.payload
      }
    default:
      return state
  }
}
