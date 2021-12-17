import styled from 'styled-components'
import { AiOutlineCloseCircle } from 'react-icons/ai'

interface CloseIcon {
  active: string
}

interface FilterBlock {
  filterOpen: boolean
}

export const CloseIcon = styled(AiOutlineCloseCircle)<CloseIcon>`
  width: 30px;
  color: ${props => (props.active === 'true' ? '#555' : 'lightgray')};
`

export const RemoveFilterContainer = styled.div<CloseIcon>`
  display: flex;
  align-items: center;
  cursor: pointer;
  p {
    font-size: 12px;
    color: ${props => (props.active === 'true' ? '#555' : 'lightgray')};
  }
`

export const FilterContainer = styled.section<FilterBlock>`
  width: 100vw;
  height: ${props => (props.filterOpen ? '300px' : '0px')};
  opacity: ${props => (props.filterOpen ? '1' : '0')};
  transition: ease-in 300ms;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  @media (min-width: 768px) {
    opacity: 1;
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 40%;
    height: 600px;
    margin-top: 30px;
    padding: 10px;
    h1 {
      font-size: 23px;
    }
  }
  @media (min-width: 1210px) {
    width: 25%;
  }
`

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

export const RadioInputContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  label {
    font-size: 14px;
    color: #555;
    input {
      margin-right: 15px;
      cursor: pointer;
    }
  }
`

export const ListContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
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
    padding: 10px;
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
