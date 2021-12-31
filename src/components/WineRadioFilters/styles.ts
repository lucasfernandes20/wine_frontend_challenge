import styled, { keyframes } from 'styled-components'
import { AiOutlineCloseCircle } from 'react-icons/ai'

interface CloseIcon {
  active: boolean
}

interface FilterBlock {
  filterOpen: boolean
}

const slideUpAnimation = keyframes`  
  from { transform: translatex(-100%); }
  to { transform: translatex(0); }
`

export const FilterContainer = styled.section<FilterBlock>`
  width: 100vw;
  transition: ease-in 300ms;
  padding: 10px;
  display: ${props => (props.filterOpen ? 'flex' : 'none')};
  animation: ${slideUpAnimation} 300ms ease-in-out;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  @media (min-width: 768px) {
    opacity: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
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

export const PerPriceDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`

export const RadioContainer = styled.section`
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
export const RemoveFilterContainer = styled.div<CloseIcon>`
  display: flex;
  align-items: center;
  cursor: ${props => (props.active ? 'pointer' : 'auto')};
  p {
    font-size: 12px;
    color: ${props => (props.active ? '#555' : 'lightgray')};
  }
`

export const CloseIcon = styled(AiOutlineCloseCircle)<CloseIcon>`
  margin-right: 5px;
  color: ${props => (props.active ? '#555' : 'lightgray')};
`
