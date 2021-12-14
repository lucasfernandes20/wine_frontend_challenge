import { createStore, Store, applyMiddleware } from 'redux'
import { WinesState } from './ducks/Wines/types'
import rootReducer from './ducks/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export interface ApplicationState {
  wines: WinesState
}

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
)

export default store
