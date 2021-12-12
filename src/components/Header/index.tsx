import React from 'react'
import { HeaderContainer, Logo, UserImg, UserContent, Div } from './styles'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosSearch } from 'react-icons/io'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Div>
        <GiHamburgerMenu size="25px" />
        <Logo src="https://img.wine.com.br/logo/wine/black/wine.svg"></Logo>
      </Div>
      <Div>
        <IoIosSearch size="30px" />
        <UserContent>
          <UserImg src="https://img.wine.com.br/fenix/image/_big_bang/icons/header-sprite.svg" />
        </UserContent>
      </Div>
    </HeaderContainer>
  )
}

export default Header
