import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  padding: 10px;
  width: 100vw;
  position: fixed;
  top: 70px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  input {
    border: none;
    border-radius: 5px;
    width: 80%;
    height: 40px;
    ::placeholder {
      font-weight: 100;
      color: #a0a0a0;
      font-size: 20px;
      padding-left: 10px;
    }
  }
  button {
    background-color: #ffff;
    border: none;
    height: 40px;
    color: #c81b79;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    max-width: 500px;
    right: 100px;
    left: auto;
  }
`
