import React from 'react'
import { WinesState } from '../../Redux/ducks/Wines/types'
import { useSelector } from 'react-redux'
import WineCard from '../WineCard'
import { ListContainer, List } from './styles'

export interface ApplicationState {
  wines: WinesState
}

const WineList: React.FC = () => {
  const wines = useSelector((state: ApplicationState) => state.wines.data)
  return (
    <ListContainer>
      <h1>lista</h1>
      <List>{wines && wines.map(e => <WineCard key={e.id} wine={e} />)}</List>
    </ListContainer>
  )
}

export default WineList
