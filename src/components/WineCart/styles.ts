import styled from 'styled-components'
import { CgClose } from 'react-icons/cg'

interface CartContainer {
  HeaderCart: boolean
  isOpen?: boolean
}

export const WineCartContainer = styled.section<CartContainer>`
  width: 100%;
  display: ${props => (props.HeaderCart ? 'none' : 'block')};
  position: relative;
  z-index: 100000000;
  @media (min-width: 768px) {
    right: ${props => (props.isOpen ? '0' : '-500px')};
    display: block;
    width: 500px;
    height: 100vh;
    position: fixed;
    top: 0;
    background-color: #f5f5f5;
    box-shadow: ${props => (props.isOpen ? '2px 5px 10px #888;' : '0 0 0')};
    overflow-y: scroll;
    overflow-x: hidden;
    transition: ease-in-out 500ms;
  }
`

export const CloseBtn = styled(CgClose)<CartContainer>`
  width: 25px;
  cursor: pointer;
  margin: 10px 0 0 10px;
  display: ${props => (props.HeaderCart ? 'block' : 'none')};
`

export const WineBoxList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const Complement = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 50px;
  }
`
export const TotalValue = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-size: 26px;
  }
  p {
    font-size: 17px;
    font-weight: 800;
    color: #c81b79;
    span {
      font-size: 35px;
    }
  }
`
export const BuyBtn = styled.button`
  width: 90%;
  padding: 10px;
  font-size: 25px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #7ebc43;
  @media (min-width: 768px) {
    cursor: pointer;
    width: 40%;
  }
`
export const CartInfo = styled.section`
  width: 100%;
  padding: 15px;
  border-bottom: 1px solid #888;
  box-shadow: 0px 5px 3px #888;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TotalItens = styled.h4`
  font-size: 16px;
  display: flex;
  align-items: baseline;
  gap: 4px;
  span {
    font-size: 24px;
    font-weight: 800;
  }
`

export const ClearBtn = styled.button`
  width: 40%;
  padding: 5px;
  background-color: #c81b79;
  color: #ffff;
  font-weight: 800;
  border: none;
  border-radius: 5px;
  @media (min-width: 768px) {
    cursor: pointer;
    width: 20%;
    font-size: 14px;
    padding: 10px;
  }
`
