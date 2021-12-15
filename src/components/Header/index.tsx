import React, { useState } from 'react'
import { HeaderContainer, Logo, UserImg, UserContent, Div } from './styles'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosSearch } from 'react-icons/io'
import SideBar from '../SideBar'
import SearchBar from '../SearchBar'
import Link from 'next/link'

const Header: React.FC = () => {
  const [useSideBar, setSideBar] = useState(false)
  const [useSearchBar, setSearchBar] = useState(false)
  return (
    <HeaderContainer searchBar={useSearchBar}>
      <SideBar open={useSideBar} closeSideBar={setSideBar} />
      <Div>
        <GiHamburgerMenu size="25px" onClick={() => setSideBar(true)} />
        <Link href="/">
          <a>
            <Logo src="https://img.wine.com.br/logo/wine/black/wine.svg"></Logo>
          </a>
        </Link>
      </Div>
      <Div>
        <IoIosSearch size="30px" onClick={() => setSearchBar(!useSearchBar)} />
        {useSearchBar && <SearchBar />}
        <UserContent>
          <UserImg src="https://img.wine.com.br/fenix/image/_big_bang/icons/header-sprite.svg" />
        </UserContent>
      </Div>
    </HeaderContainer>
  )
}

export default Header
