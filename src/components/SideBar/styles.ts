import styled from 'styled-components'

interface sideBarProps {
  open: boolean
}

export const SideBarContainer = styled.section<sideBarProps>`
  position: fixed;
  background-color: darkorchid;
  height: 100vh;
  bottom: 0;
  width: 80vw;
  left: ${props => (props.open ? '0' : '-80vw')};
  transition: ease-in-out 300ms;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 10px;
`

export const UserContainer = styled.div`
  width: 100%;
  height: 20vh;
  background-color: white;
`

export const Nav = styled.nav`
  width: 100%;
  height: 60vh;
  background-color: darkred;
`
