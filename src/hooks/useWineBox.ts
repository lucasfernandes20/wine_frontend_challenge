import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  getWineBoxAction,
  AddMoreOneAction
} from '../Redux/ducks/Wines/actions'
import { WinesState, Wines } from '../Redux/ducks/Wines/types'

export interface SelectorState {
  wines: WinesState
}

interface ApplicationState {
  addWineToState: (arg: Wines) => void
  changeQuantity: (arg1: number, arg2: Wines) => void
  removeWineBox: (arg: number) => void
  AddToCartWithQuantity: (arg: Wines, arg2: boolean) => void
  quantity: number
  wineBox: Wines[]
}

const useWineBox = (): ApplicationState => {
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const wineBox = useSelector((state: SelectorState) => state.wines.wineBox)

  const addWineToState = (newWine: Wines) => {
    const alreadyExists = wineBox.find(e => newWine.id === e.id)
    if (alreadyExists) {
      alreadyExists.quantity += 1
      alreadyExists.wineBoxPrice += alreadyExists.wineBoxPrice
      const removedItem = wineBox.filter(e => e.id !== newWine.id)
      dispatch(AddMoreOneAction([...removedItem, alreadyExists]))
      return
    }
    newWine.quantity = quantity
    newWine.wineBoxPrice = Number((newWine.priceMember * quantity).toFixed(2))
    dispatch(getWineBoxAction(newWine))
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

  const removeWineBox = (id: number) => {
    if (id === -10) {
      dispatch(AddMoreOneAction([]))
      return
    }
    const removedItem = wineBox.filter(wine => wine.id !== id)
    dispatch(AddMoreOneAction(removedItem))
  }

  const AddToCartWithQuantity = (wine: Wines, upOrDown: boolean) => {
    const MORE_OR_LESS = upOrDown ? 1 : -1
    setQuantity(prevQuantity =>
      prevQuantity + MORE_OR_LESS < 0 ? 0 : prevQuantity + MORE_OR_LESS
    )
  }

  return {
    addWineToState,
    changeQuantity,
    removeWineBox,
    AddToCartWithQuantity,
    quantity,
    wineBox
  }
}

export default useWineBox
