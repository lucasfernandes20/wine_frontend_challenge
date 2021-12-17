import React, { useState } from 'react'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'
import { Wines } from '../../Redux/ducks/Wines/types'
import WineCard from '../WineCard'
import {
  ListContainer,
  List,
  ListInfo,
  Loading,
  FilterContainer,
  RadioInputContainer,
  CloseIcon,
  RemoveFilterContainer,
  FilterBtn
} from './styles'

const WineList = ({ wines }: { wines: Wines[] }): JSX.Element => {
  const [filterOpen, setFilterOpen] = useState(false)
  const { currentWines, winesEnd, setPriceFilter, resetPage } =
    useInfiniteScroll(wines)

  return (
    <ListContainer>
      <FilterBtn type="button" onClick={() => setFilterOpen(!filterOpen)}>
        Filtrar por preço
      </FilterBtn>
      <FilterContainer filterOpen={filterOpen}>
        <h1>Refine sua busca</h1>
        <RadioInputContainer>
          <h4>Por Preço</h4>
          <RemoveFilterContainer
            active={String(!!true)}
            onClick={() => resetPage()}
          >
            <CloseIcon active={String(!!true)} />
            <p>Remover filtros</p>
          </RemoveFilterContainer>
          <label htmlFor="less-40">
            <input
              type="radio"
              id="less-40"
              value="0-40"
              name="price"
              onClick={({ target }) =>
                setPriceFilter((target as HTMLInputElement).value)
              }
            />
            Até R$40
          </label>
          <label htmlFor="less60">
            <input
              type="radio"
              id="less60"
              name="price"
              value="40-60"
              onClick={({ target }) =>
                setPriceFilter((target as HTMLInputElement).value)
              }
            />
            De R$40 à R$60
          </label>
          <label htmlFor="less200">
            <input
              type="radio"
              id="less200"
              name="price"
              value="100-200"
              onClick={({ target }) =>
                setPriceFilter((target as HTMLInputElement).value)
              }
            />
            De R$100 à R$200
          </label>
          <label htmlFor="less500">
            <input
              type="radio"
              id="less500"
              name="price"
              value="200-500"
              onClick={({ target }) =>
                setPriceFilter((target as HTMLInputElement).value)
              }
            />
            De R$200 à R$500
          </label>
          <label htmlFor="more500">
            <input
              type="radio"
              id="more500"
              name="price"
              value="500-999999999999"
              onClick={({ target }) =>
                setPriceFilter((target as HTMLInputElement).value)
              }
            />
            Acima de R$500
          </label>
        </RadioInputContainer>
      </FilterContainer>
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
  )
}

export default WineList
