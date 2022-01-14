import React from 'react'
import useWarning from '../../hooks/useWarning'
import {
  WarningContainer,
  Message,
  Text,
  CartIcon,
  HeaderContainer,
  Div
} from './styles'

const WarningAddToCart: React.FC = () => {
  const { warning } = useWarning()

  return (
    <WarningContainer>
      {warning &&
        warning.map(e => (
          <Message key={e}>
            <Div>
              <CartIcon />
              <HeaderContainer>Adicionado ao carrinho</HeaderContainer>
            </Div>
            <Text>{e}</Text>
          </Message>
        ))}
    </WarningContainer>
  )
}

export default WarningAddToCart
