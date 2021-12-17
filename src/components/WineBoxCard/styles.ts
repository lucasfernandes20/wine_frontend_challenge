import styled from 'styled-components'

export const WineBoxCardContainer = styled.section`
  width: 100vw;
  padding-right: 15px;
  height: 130px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #8888;
  @media (min-width: 768px) {
    max-width: 1210px;
    margin: auto;
  }
`

export const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    @media (min-width: 768px) {
      cursor: pointer;
    }
  }
`
export const WineName = styled.h3`
  width: 70%;
  font-size: 14px;
  font-weight: 700;
`

export const WineCountry = styled.p`
  font-size: 10px;
  color: #888;
  font-weight: 500;
`

export const PricePerQtd = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Price = styled.p`
  font-size: 13px;
  color: #c81b79;
  font-weight: 700;
  span {
    font-size: 23px;
    color: #c81b79;
    margin-left: 5px;
  }
`

export const Preview = styled.img`
  height: 90%;
`
export const CardInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`

export const Quantity = styled.div`
  width: 90px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: black;
  font-size: 15px;
  border-radius: 10px;
  border: 1px solid #888;
  button {
    background-color: transparent;
    width: 30px;
    font-size: 15px;
    color: black;
    border: none;
    border-radius: 5px;
    @media (min-width: 768px) {
      cursor: pointer;
    }
  }
  p {
    width: 30px;
  }
`
