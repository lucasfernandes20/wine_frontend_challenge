import styled from 'styled-components'
import { IoChevronBackOutline } from 'react-icons/io5'

export const WinePrice = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
  p:nth-child(1) {
    font-size: 16px;
    font-weight: 800;
    color: #c81a78;
    span {
      font-size: 30px;
    }
  }
  p:nth-child(2) {
    font-size: 13px;
    color: #888;
    font-weight: 500;
  }
`

export const WineInfos = styled.div`
  display: none;
  @media (min-width: 768px) {
    order: 4;
    display: flex;
  }
`

export const BackIcon = styled(IoChevronBackOutline)`
  width: 30px;
  height: 30px;
`

export const DetailContainer = styled.section`
  width: 100vw;
  padding: 15px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 1200px;
    margin: auto;
  }
`
export const Preview = styled.img`
  width: 250px;
  margin: auto;
  @media (min-width: 768px) {
    width: 40vw;
    order: 2;
  }
`

export const Apresentation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  gap: 20px;
  @media (min-width: 768px) {
    order: 3;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    h2 {
      text-align: start;
      order: 2;
    }
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
  @media (min-width: 768px) {
    order: 3;
    justify-content: flex-start;
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
  @media (min-width: 768px) {
    order: 1;
  }
`

export const BackBtn = styled.div`
  display: none;
  @media (min-width: 768px) {
    cursor: pointer;
    order: 1;
    display: flex;

    a {
      display: flex;
      align-self: flex-start;
      color: inherit;
      align-items: center;
    }
  }
`

export const Description = styled.div`
  width: 100%;
  padding: 25px 0 110px 0;
  @media (min-width: 768px) {
    display: none;
  }
`

export const SommelierComment = styled.div`
  width: 100%;
  padding: 25px 0 110px 0;
`

export const AddCartContainer = styled.div`
  width: 70%;
  display: flex;
  background-color: #7ebc43;
  align-items: center;
  border-radius: 5px;
  gap: 10px;
  margin-top: 40px;
  .quantity-btn:nth-child(1) {
    margin-left: 10px;
  }
  .quantity-btn {
    width: 35px;
    cursor: pointer;
    height: 35px;
    background-color: #7ebc43;
    border: 1px solid white;
    border-radius: 50%;
    color: white;
    font-weight: 500;
    font-size: 24px;
  }
  p {
    width: 10%;
    color: white;
    font-size: 20px;
    font-weight: 800;
  }
`
export const AddtoCart = styled.button`
  cursor: pointer;
  width: 30%;
  padding: 15px 0;
  background-color: #7ebc43;
  font-size: 19px;
  font-weight: 600;
  color: white;
  border: none;
  border-radius: 5px;
  margin-left: 10%;
`

export const Comment = styled.p`
  color: #555555;
  font-size: 18px;
  padding-top: 10px;
  @media (min-width: 768px) {
    text-align: start;
  }
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
