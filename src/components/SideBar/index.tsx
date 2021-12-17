import React from 'react'
import {
  SideBarContainer,
  UserContainer,
  Nav,
  UserContent,
  UserImg,
  H3,
  LoginSection,
  EnterBtn,
  MenuList,
  MenuItem
} from './styles'
import { CgClose } from 'react-icons/cg'
import Link from 'next/link'
import { BsArrowRight, BsCart3 } from 'react-icons/bs'
import { IoWineSharp, IoDiamondOutline } from 'react-icons/io5'

interface SideBarProps {
  open: boolean
  closeSideBar: React.Dispatch<React.SetStateAction<boolean>>
}

const SideBar: React.FC<SideBarProps> = ({ open, closeSideBar }) => {
  return (
    <SideBarContainer open={open}>
      <CgClose size="30px" onClick={() => closeSideBar(false)} />
      <UserContainer>
        <UserContent>
          <UserImg src="https://img.wine.com.br/fenix/image/_big_bang/icons/header-sprite.svg" />
        </UserContent>
        <LoginSection>
          <H3>Acesse sua conta</H3>
          <EnterBtn>
            <Link href="/not_implemented">Entrar</Link>
            <BsArrowRight />
          </EnterBtn>
        </LoginSection>
      </UserContainer>
      <Nav>
        <MenuList>
          <MenuItem>
            <Link href="/notImplemented">
              <a onClick={() => closeSideBar(false)}>
                Assinar a Wine
                <IoDiamondOutline style={{ marginLeft: '10px' }} />
              </a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/notImplemented">
              <a onClick={() => closeSideBar(false)}>
                Ofertas
                <IoDiamondOutline style={{ marginLeft: '10px' }} />
              </a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/ShoppingCart">
              <a onClick={() => closeSideBar(false)}>
                Carrinho
                <BsCart3 style={{ marginLeft: '10px' }} />
              </a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/">
              <a onClick={() => closeSideBar(false)}>
                Loja
                <IoWineSharp style={{ marginLeft: '10px' }} />
              </a>
            </Link>
          </MenuItem>
        </MenuList>
      </Nav>
    </SideBarContainer>
  )
}

export default SideBar
