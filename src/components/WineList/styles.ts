import styled from 'styled-components'

export const ListContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 40px 0;
`

export const ListInfo = styled.div`
  width: 100vw;
  padding: 15px;
  border-bottom: 1px solid #d5d5d5;
  margin-bottom: 20px;
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
