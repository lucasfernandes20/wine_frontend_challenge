import React, { useState } from 'react'
import {
  HeaderContainer,
  Logo,
  UserImg,
  UserContent,
  Div,
  MenuHamburguer,
  Nav,
  SearchIcon,
  Li,
  WineBoxQuantity
} from './styles'
import SideBar from '../SideBar'
import SearchBar from '../SearchBar'
import Link from 'next/link'
import { useRouter } from 'next/router'
import WineCart from '../WineCart'
import { useSelector } from 'react-redux'
import { WinesState } from '../../Redux/ducks/Wines/types'

interface SelectorState {
  wines: WinesState
}

const Header: React.FC = () => {
  const [useSideBar, setSideBar] = useState(false)
  const [useSearchBar, setSearchBar] = useState(false)
  const [useSideCart, setSideCart] = useState(false)
  const { pathname } = useRouter()
  const wineBox = useSelector((state: SelectorState) => state.wines.wineBox)
  return (
    <HeaderContainer searchBar={useSearchBar}>
      <SideBar open={useSideBar} closeSideBar={setSideBar} />
      <Div>
        <MenuHamburguer onClick={() => setSideBar(true)} />
        <Link href="/">
          <a>
            <Logo src="https://img.wine.com.br/logo/wine/black/wine.svg"></Logo>
          </a>
        </Link>
        <Nav>
          <ul>
            <Link href="/notImplemented">
              <a>
                <Li>Clube</Li>
              </a>
            </Link>
            <Link href="/">
              <a>
                <Li On={pathname === '/'}>Loja</Li>
              </a>
            </Link>
            <Link href="/notImplemented">
              <a>
                <Li On={pathname === '/ShoppingCart'}>Produtores</Li>
              </a>
            </Link>
            <Link href="/notImplemented">
              <a>
                <Li>Ofertas</Li>
              </a>
            </Link>
            <Link href="/notImplemented">
              <a>
                <Li>Eventos</Li>
              </a>
            </Link>
          </ul>
        </Nav>
      </Div>
      <Div>
        <SearchIcon onClick={() => setSearchBar(!useSearchBar)} />
        {useSearchBar && <SearchBar />}
        <UserContent onClick={() => setSideCart(true)}>
          <WineBoxQuantity>{wineBox.length}</WineBoxQuantity>
          <UserImg src="https://img.wine.com.br/fenix/image/_big_bang/icons/header-sprite.svg" />
        </UserContent>
        <WineCart
          HeaderCart={true}
          closeCart={setSideCart}
          isOpen={useSideCart}
        />
      </Div>
    </HeaderContainer>
  )
}

export default Header
