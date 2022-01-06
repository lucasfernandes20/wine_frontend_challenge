import styled from 'styled-components'
import { BsCartPlusFill } from 'react-icons/bs'

export const WarningContainer = styled.aside`
  display: none;
  @media (min-width: 1440px) {
    position: fixed;
    z-index: 300;
    right: 10px;
    width: 7vw;
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
  padding: 10px;
  border-radius: 30px 30px 0 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
`

export const Text = styled.p`
  font-size: 100%;
  color: white;
  font-weight: 600;
  text-align: center;
`
export const CartIcon = styled(BsCartPlusFill)`
  color: white;
  width: 25px;
  height: 25px;
`
