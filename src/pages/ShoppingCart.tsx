import React from 'react'
import Header from '../components/Header'
import WineCart from '../components/WineCart'
import { Container } from '../styles/pages/Home'

const ShoppingCart: React.FC = () => {
  return (
    <Container>
      <Header />
      <WineCart HeaderCart={false} />
    </Container>
  )
}

export default ShoppingCart
