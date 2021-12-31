import React from 'react'
import {
  RadioContainer,
  FilterContainer,
  RemoveFilterContainer,
  CloseIcon,
  PerPriceDiv
} from './styles'

interface ApplicationState {
  setPriceFilter: (arg: string) => void
  resetPage: () => void
  filterOpen: boolean
  priceFilter: string
}

const WineRadioFilters: React.FC<ApplicationState> = ({
  setPriceFilter,
  resetPage,
  filterOpen,
  priceFilter
}) => {
  return (
    <FilterContainer filterOpen={filterOpen}>
      <h1>Refine sua busca</h1>
      <PerPriceDiv>
        <h4>Por Preço</h4>
        <RemoveFilterContainer
          active={!!priceFilter}
          onClick={() => resetPage()}
        >
          <CloseIcon active={!!priceFilter} />
          <p>Remover filtros</p>
        </RemoveFilterContainer>
      </PerPriceDiv>
      <RadioContainer>
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
      </RadioContainer>
    </FilterContainer>
  )
}
export default WineRadioFilters
