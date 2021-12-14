import React from 'react'
import { Wines } from '../../Redux/ducks/Wines/types'
import WineCard from '../WineCard'
import { ListContainer, List } from './styles'

export interface ApplicationState {
  wines: Wines[]
}

const WineList = ({ wines }: { wines: Wines[] }): JSX.Element => {
  return (
    <ListContainer>
      <h1>lista</h1>
      <List>
        {wines && wines.map(wine => <WineCard key={wine.id} wine={wine} />)}
      </List>
    </ListContainer>
  )
}

export default WineList
