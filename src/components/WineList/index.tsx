import React from 'react'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'
import { Wines } from '../../Redux/ducks/Wines/types'
import WineCard from '../WineCard'
import { ListContainer, List } from './styles'

const WineList = ({ wines }: { wines: Wines[] }): JSX.Element => {
  const currentWines = useInfiniteScroll(wines)

  return (
    <ListContainer>
      <h1>lista</h1>
      <List>
        {currentWines &&
          currentWines.map(wine => <WineCard key={wine.id} wine={wine} />)}
        <div
          id="sentinela"
          style={{
            backgroundColor: 'green',
            width: '100vw',
            height: '100px'
          }}
        />
      </List>
    </ListContainer>
  )
}

export default WineList
