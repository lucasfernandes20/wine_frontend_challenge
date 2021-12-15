import styled from 'styled-components'

export const DetailContainer = styled.section`
  width: 100vw;
  padding: 15px;
`
export const Apresentation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  gap: 20px;
  img {
    width: 250px;
  }
`

export const Tags = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  img {
    width: 20px;
  }
  p:nth-child(2) {
    color: #333333;
  }
  p {
    color: #555555;
  }
`

export const Local = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #888888;
  p:nth-child(-n + 3) {
    color: #c81a78;
  }
`

export const Description = styled.div`
  width: 100%;
  padding: 25px 0 110px 0;
`

export const Comment = styled.p`
  color: #555555;
  font-size: 18px;
  padding-top: 10px;
`

export const ToCartContainer = styled.div`
  padding: 15px;
  width: 100vw;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 -3px 10px #8888;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    width: 50%;
    padding: 15px 0;
    background-color: #7ebc43;
    font-size: 19px;
    font-weight: 600;
    color: white;
    border: none;
    border-radius: 5px;
  }
`

export const Prices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
  p:nth-child(1) {
    transform: translateY(-26px);
    margin-bottom: -26px;
    font-size: 12px;
    font-weight: 600;
    color: white;
    background-color: #f26649;
    padding: 3px;
    border-radius: 4px;
  }
  p:nth-child(2) {
    text-decoration: line-through;
    color: #555555;
    font-size: 13px;
    font-weight: 500;
  }
  p:nth-child(3) {
    color: #c81a78;
    font-size: 16px;
    font-weight: 600;
    span {
      font-size: 26px;
    }
  }
  p:nth-child(4) {
    font-size: 11px;
    font-weight: 500;
    color: #555555;
  }
`
