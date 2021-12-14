import React from 'react'
import { SideBarContainer, UserContainer, Nav } from './styles'
import { CgClose } from 'react-icons/cg'

interface SideBarProps {
  open: boolean
  closeSideBar: React.Dispatch<React.SetStateAction<boolean>>
}

const SideBar: React.FC<SideBarProps> = ({ open, closeSideBar }) => {
  return (
    <SideBarContainer open={open}>
      <CgClose size="30px" onClick={() => closeSideBar(false)} />
      <UserContainer>
        <p>user</p>
      </UserContainer>
      <Nav>
        <ul>
          <li>Home</li>
        </ul>
      </Nav>
    </SideBarContainer>
  )
}

export default SideBar
