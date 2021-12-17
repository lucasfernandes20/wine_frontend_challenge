import React from 'react'
import useWineBox from '../../hooks/useWineBox'
import WineBoxCard from '../WineBoxCard'
import {
  WineBoxList,
  WineCartContainer,
  Complement,
  TotalValue,
  BuyBtn,
  CartInfo,
  TotalItens,
  ClearBtn,
  CloseBtn
} from './styles'

const WineCart = ({
  HeaderCart,
  closeCart,
  isOpen
}: {
  HeaderCart: boolean
  closeCart?: (arg: boolean) => void
  isOpen?: boolean
}): JSX.Element => {
  const { wineBox, removeWineBox } = useWineBox()

  return (
    <WineCartContainer HeaderCart={HeaderCart} isOpen={isOpen}>
      <CloseBtn onClick={() => closeCart(false)} HeaderCart={HeaderCart} />
      <CartInfo>
        <TotalItens>
          Total de itens: <span>{wineBox.length}</span>
        </TotalItens>
        <ClearBtn type="button" onClick={() => removeWineBox(-10)}>
          Limpar Carrinho
        </ClearBtn>
      </CartInfo>
      <WineBoxList>
        {wineBox &&
          wineBox
            .sort((a, b) => a.id - b.id)
            .map(wine => (
              <WineBoxCard key={parseInt(String(wine.id), 10)} wine={wine} />
            ))}
      </WineBoxList>
      <Complement>
        <TotalValue>
          <h3>Valor Total:</h3>
          <p>
            R$
            <span>
              {wineBox
                .reduce((acc, cur) => acc + cur.wineBoxPrice, 0)
                .toFixed(2)}
            </span>
          </p>
        </TotalValue>
        <BuyBtn type="button">Comprar</BuyBtn>
      </Complement>
    </WineCartContainer>
  )
}

export default WineCart
