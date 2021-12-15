import React from 'react'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'
import { Wines } from '../../Redux/ducks/Wines/types'
import WineCard from '../WineCard'
import { ListContainer, List, ListInfo } from './styles'

const WineList = ({ wines }: { wines: Wines[] }): JSX.Element => {
  const currentWines = useInfiniteScroll(wines)

  return (
    <ListContainer>
      <ListInfo>
        <p>
          {currentWines.length}
          <span>Produtos encontrados</span>
        </p>
      </ListInfo>
      <List>
        {currentWines &&
          currentWines.map(wine => <WineCard key={wine.id} wine={wine} />)}
        <div
          id="sentinela"
          style={{
            width: '100vw',
            height: '20px'
          }}
        />
      </List>
    </ListContainer>
  )
}

export default WineList
