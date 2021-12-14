import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 45vw;
  height: 50vh;
  box-shadow: 4px 4px 10px black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Preview = styled.img`
  width: 60%;
`

export const WineName = styled.h3`
  font-size: 16px;
  font-weight: 800;
  text-align: center;
`
export const WinePrice = styled.span`
  width: 60%;
  color: #c81b79;
  font-weight: 800;
  font-size: 13px;
  text-align: left;
  span {
    font-size: 20px;
  }
`

export const ToCartBtn = styled.button`
  width: 100%;
  height: 30px;
  background-color: #7ebc43;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 700;
  border-radius: 4px;
`

export const MemberPrice = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`

export const P = styled.span`
  font-size: 12px;
  width: 40%;
  text-align: right;
`
export const NomMenberPrice = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 9px;
    color: #555555;
  }
`
