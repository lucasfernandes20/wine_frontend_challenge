import styled from 'styled-components'

export const CardContainer = styled.div`
  a {
    text-decoration: none;
    color: inherit;
    background-color: #ffff;
    width: 45vw;
    height: 380px;
    box-shadow: 0px 1px 4px 0px #00000033;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    @media (min-width: 768px) {
      width: 200px;
    }
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export const Preview = styled.img`
  width: 130px;
`

export const Flag = styled.img`
  width: 30px;
  margin-right: -30px;
  transform: translate(-0.5vw, -15px);
`

export const WineName = styled.h3`
  font-size: 16px;
  font-weight: 800;
  text-align: center;
`
export const Discount = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  p:nth-child(1) {
    text-decoration: line-through;
    font-size: 13px;
    color: #888;
  }
  p:nth-child(2) {
    background-color: #f19452;
    color: white;
    padding: 3px;
    border-radius: 3px;
    font-size: 14px;
  }
`

export const WinePrice = styled.span`
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
  cursor: pointer;
  width: 100%;
  height: 40px;
  background-color: #7ebc43;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: 700;
  border-radius: 4px;
  margin-top: 8px;
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
