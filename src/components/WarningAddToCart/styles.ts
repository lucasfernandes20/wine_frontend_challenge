import styled from 'styled-components'
import { BsCartPlusFill } from 'react-icons/bs'

export const WarningContainer = styled.aside`
  display: none;
  @media (min-width: 1440px) {
    position: fixed;
    z-index: 300;
    right: 10px;
    width: 12vw;
    max-height: 70vh;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`
export const Message = styled.div`
  width: 100%;
  background-color: #c81b79;
  border-radius: 30px 30px 0 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 101px;
`

export const Text = styled.p`
  font-size: 100%;
  color: white;
  font-weight: 600;
  text-align: center;
  padding: 5px;
  max-width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const CartIcon = styled(BsCartPlusFill)`
  color: white;
  width: 20px;
  height: 20px;
`
export const HeaderContainer = styled.p`
  color: #fff;
  font-weight: 800;
  text-align: center;
`
export const Div = styled.div`
  border-bottom: 1px solid #ffff;
  background-color: #75164a;
  border-radius: 30px 30px 0 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 5px;
`
