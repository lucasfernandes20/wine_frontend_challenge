import { createStore, Store, applyMiddleware } from 'redux'
import { WinesState } from './ducks/Wines/types'
import rootReducer from './ducks/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export interface ApplicationState {
  wines: WinesState
}

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['wines']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store: Store<ApplicationState> = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware())
)
const persistor = persistStore(store)

export { store, persistor }
