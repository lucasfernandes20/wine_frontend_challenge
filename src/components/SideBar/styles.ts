import styled from 'styled-components'

interface sideBarProps {
  open: boolean
}

export const SideBarContainer = styled.section<sideBarProps>`
  z-index: 10000000;
  position: fixed;
  background-color: #f3f3f3;
  height: 100vh;
  bottom: 0;
  width: 80vw;
  left: ${props => (props.open ? '0' : '-80vw')};
  transition: ease-in-out 300ms;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 10px;
  box-shadow: ${props => (props.open ? '2px 2px 5px gray' : null)};
`

export const UserContainer = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: center;
  margin-bottom: 80px;
`
export const EnterBtn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  color: #c81b78;
  a {
    color: #c81b78;
    text-decoration: none;
  }
`
export const UserContent = styled.div`
  height: 50px;
  width: 50px;
  overflow: hidden;
  float: right;
`
export const UserImg = styled.img`
  left: -100px;
  width: 150px;
  position: relative;
`

export const H3 = styled.h3`
  font-size: 19px;
  font-weight: 100;
  color: #555555;
`

export const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 30px;
`

export const Nav = styled.nav`
  width: 100%;
  height: 60vh;
`

export const MenuList = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px;
`

export const MenuItem = styled.li`
  margin-right: -10px;
  padding: 10px;
  border-right: 5px solid #c81b78;
  a {
    text-decoration: none;
    color: #c81b78;
    text-transform: uppercase;
  }
`
