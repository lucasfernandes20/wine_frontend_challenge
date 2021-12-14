import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: #ffff;
  width: 45vw;
  height: 50vh;
  box-shadow: 0px 1px 3px lightgray;
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
  width: 50%;
  color: #c81b79;
  font-weight: 800;
  font-size: 13px;
  display: flex;
  flex-wrap: nowrap;
  gap: 3px;
  align-items: flex-end;
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
  justify-content: center;
`

export const P = styled.span`
  font-size: 12px;
  width: 40px;
  text-align: right;
  margin-right: 10px;
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
