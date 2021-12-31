import styled from 'styled-components'

export const FilterBtn = styled.button`
  display: block;
  width: 30%;
  color: white;
  background-color: #c81b79;
  padding: 10px;
  border: none;
  border-radius: 5px;
  @media (min-width: 768px) {
    display: none;
  }
`

export const ListContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media (min-width: 768px) {
    align-items: flex-start;
    flex-direction: row;
  }
`

export const WinePageContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 10px;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1210px;
    margin: auto;
  }
`

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 40px 0;
  margin-top: 30px;
  @media (min-width: 768px) {
    width: 60%;
  }
  @media (min-width: 1210px) {
    width: 75%;
  }
`

export const ListInfo = styled.div`
  width: 100vw;
  padding: 15px;
  border-bottom: 1px solid #d5d5d5;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    font-size: 25px;
    font-weight: 800;
    span {
      margin-left: 5px;
      font-size: 16px;
      color: #888;
      font-weight: 500;
    }
  }
`
export const Loading = styled.img`
  width: 50px;
  align-self: center;
  margin-top: 5px;
`
