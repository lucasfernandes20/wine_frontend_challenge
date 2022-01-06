import React, { useState } from 'react'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'
import { Wines } from '../../Redux/ducks/Wines/types'
import CarouselBanner from '../Carousel'
import WarningAddToCart from '../WarningAddToCart'
import WineCard from '../WineCard'
import WineRadioFilters from '../WineRadioFilters'
import {
  ListContainer,
  List,
  ListInfo,
  Loading,
  FilterBtn,
  WinePageContainer
} from './styles'

const WineList = ({ wines }: { wines: Wines[] }): JSX.Element => {
  const [filterOpen, setFilterOpen] = useState(false)
  const { currentWines, winesEnd, setPriceFilter, resetPage, priceFilter } =
    useInfiniteScroll(wines)

  return (
    <WinePageContainer>
      <CarouselBanner />
      <FilterBtn type="button" onClick={() => setFilterOpen(!filterOpen)}>
        Filtrar por preço
      </FilterBtn>
      <ListContainer>
        <WineRadioFilters
          filterOpen={filterOpen}
          setPriceFilter={setPriceFilter}
          resetPage={resetPage}
          priceFilter={priceFilter}
        />
        <List>
          {currentWines &&
            currentWines.map(wine => <WineCard key={wine.id} wine={wine} />)}
          <ListInfo id="sentinela">
            <p>
              {currentWines.length}
              <span>Produtos encontrados</span>
            </p>
            {!winesEnd && <Loading src="./loading.gif" alt="loading" />}
          </ListInfo>
        </List>
      </ListContainer>
      <WarningAddToCart />
    </WinePageContainer>
  )
}

export default WineList
