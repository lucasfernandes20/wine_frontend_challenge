import React from 'react'
import { SearchBarContainer } from './styles'
import { IoIosSearch } from 'react-icons/io'

const SearchBar: React.FC = () => {
  return (
    <SearchBarContainer>
      <input placeholder="Pesquisar" />
      <button type="button">
        <IoIosSearch size="30px" />
      </button>
    </SearchBarContainer>
  )
}

export default SearchBar
