import { Reducer } from 'redux'
import { WinesState, ActionTypes } from './types'

const INITIAL_STATE: WinesState = {
  data: [],
  error: false,
  loading: false
}

const reducer: Reducer<WinesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_REQUEST:
      return { ...state, loading: true }
    case ActionTypes.LOAD_SUCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload
      }
    case ActionTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] }
    default:
      return state
  }
}

export default reducer
