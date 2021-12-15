import { useDispatch, useSelector } from 'react-redux'
import {
  getWineBoxAction,
  AddMoreOneAction
} from '../Redux/ducks/Wines/actions'
import { WinesState, Wines } from '../Redux/ducks/Wines/types'

export interface ApplicationState {
  wines: WinesState
}

const useWineBox = () => {
  const dispatch = useDispatch()
  const wineBox = useSelector((state: ApplicationState) => state.wines.wineBox)

  const addWineToState = (newWine: Wines) => {
    const alreadyExists = wineBox.find(e => newWine.id === e.id)
    if (alreadyExists) {
      alreadyExists.quantity += 1
      alreadyExists.wineBoxPrice += alreadyExists.wineBoxPrice
      const removedItem = wineBox.filter(e => e.id !== newWine.id)
      return dispatch(AddMoreOneAction([...removedItem, alreadyExists]))
    }
    newWine.quantity = 1
    newWine.wineBoxPrice = newWine.priceMember
    return dispatch(getWineBoxAction(newWine))
  }

  const changeQuantity = (newQuantity, wine) => {
    if (newQuantity >= 0 && newQuantity <= 999) {
      const removedItem = wineBox.filter(e => e.id !== wine.id)
      wine.quantity = newQuantity
      const newWineBoxPrice = (wine.priceMember * newQuantity).toFixed(2)
      wine.wineBoxPrice = Number(newWineBoxPrice)
      dispatch(AddMoreOneAction([...removedItem, wine]))
    }
  }

  const removeWineBox = id => {
    if (!id) {
      return dispatch(AddMoreOneAction([]))
    }
    const removedItem = wineBox.filter(wine => wine.id !== id)
    return dispatch(AddMoreOneAction(removedItem))
  }

  return {
    addWineToState,
    changeQuantity,
    removeWineBox,
    wineBox
  }
}

export default useWineBox
