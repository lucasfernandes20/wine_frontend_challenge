import { Reducer } from 'redux'
import { WinesState, ActionTypes } from './types'

const INITIAL_STATE: WinesState = {
  wineBox: []
}

const reducer: Reducer<WinesState> = (state = INITIAL_STATE, action) => {
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

export default reducer
