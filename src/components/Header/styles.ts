import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoIosSearch } from 'react-icons/io'

interface SearchBarProps {
  searchBar: boolean
}

interface navProps {
  On?: boolean
}

export const SearchIcon = styled(IoIosSearch)`
  width: 30px;
  height: 30px;
  @media (min-width: 768px) {
    cursor: pointer;
    height: 40px;
    width: 40px;
    padding: 3px;
    border: 1px solid black;
    border-radius: 50%;
  }
`

export const Nav = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: block;
    ul {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 3vw;
      font-size: 14px;
    }
  }
`

export const Li = styled.li<navProps>`
  display: flex;
  align-items: center;
  height: 70px;
  color: ${props => (props.On ? '#D14B8F' : '#555555')};
  border-bottom: ${props => (props.On ? '2px solid #D14B8F' : null)};
`

export const MenuHamburguer = styled(GiHamburgerMenu)`
  size: 25px;
  @media (min-width: 768px) {
    display: none;
  }
`

export const HeaderContainer = styled.header<SearchBarProps>`
  width: 100vw;
  height: 70px;
  padding: 0 5vw;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => (props.searchBar ? '70px' : '20px')};
`

export const Logo = styled.img`
  height: 20px;
  @media (min-width: 768px) {
    height: 25px;
    margin-right: 8vw;
  }
`

export const UserImg = styled.img`
  left: -100px;
  width: 150px;
  position: relative;
`

export const UserContent = styled.div`
  height: 60px;
  width: 50px;
  overflow: hidden;
  float: right;
  cursor: pointer;
`
export const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
