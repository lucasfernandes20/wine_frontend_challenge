import React, { useState } from 'react'
import { SearchBarContainer } from './styles'
import { IoIosSearch } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { getFilterAction } from '../../Redux/ducks/Wines/actions'

const SearchBar: React.FC = () => {
  const [currentFilter, setFilter] = useState('')
  const dispatch = useDispatch()

  return (
    <SearchBarContainer>
      <input
        placeholder="Pesquisar"
        onChange={({ target }) => setFilter(target.value)}
      />
      <button
        type="button"
        onClick={() => dispatch(getFilterAction(currentFilter))}
      >
        <IoIosSearch size="30px" />
      </button>
    </SearchBarContainer>
  )
}

export default SearchBar
