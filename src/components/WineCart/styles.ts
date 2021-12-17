import styled from 'styled-components'

export const WineCartContainer = styled.section`
  width: 100vw;
  @media (min-width: 768px) {
    max-width: 1210px;
    margin: auto;
  }
`

export const WineBoxList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const Complement = styled.div`
  width: 100;
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
  box-shadow: 0px 10px 10px #888;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    box-shadow: 0 0 0;
  }
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
