import React from 'react'
import useWarning from '../../hooks/useWarning'
import { WarningContainer, Message, Text, CartIcon } from './styles'

const WarningAddToCart: React.FC = () => {
  const { warning } = useWarning()

  return (
    <WarningContainer>
      {warning &&
        warning.map(e => (
          <Message key={e}>
            <Text>{e}</Text>
            <CartIcon />
          </Message>
        ))}
    </WarningContainer>
  )
}

export default WarningAddToCart
