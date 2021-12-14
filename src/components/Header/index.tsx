import React, { useState } from 'react'
import { HeaderContainer, Logo, UserImg, UserContent, Div } from './styles'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosSearch } from 'react-icons/io'
import SideBar from '../SideBar'

const Header: React.FC = () => {
  const [useSideBar, setSideBar] = useState(false)
  return (
    <HeaderContainer>
      <SideBar open={useSideBar} closeSideBar={setSideBar} />
      <Div>
        <GiHamburgerMenu size="25px" onClick={() => setSideBar(true)} />
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
