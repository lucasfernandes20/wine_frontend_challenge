import React from 'react'
import { Wines } from '../../Redux/ducks/Wines/types'
import {
  WineBoxCardContainer,
  Preview,
  CardInfo,
  Quantity,
  WineName,
  WineCountry,
  PricePerQtd,
  Price,
  Div
} from './styles'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import useWineBox from '../../hooks/useWineBox'

const WineBoxCard = ({ wine }: { wine: Wines }): JSX.Element => {
  const { changeQuantity, removeWineBox } = useWineBox()
  return (
    <WineBoxCardContainer>
      <Preview src={wine.image} alt="wine" />
      <CardInfo>
        <Div>
          <WineName>{wine.name}</WineName>
          <AiOutlineCloseCircle
            onClick={() => removeWineBox(wine.id)}
            size="20px"
            color="#555"
          />
        </Div>
        <WineCountry>{wine.country}</WineCountry>
        <PricePerQtd>
          <Quantity>
            <button
              type="button"
              onClick={() => changeQuantity(wine.quantity - 1, wine)}
            >
              -
            </button>
            <p>{wine.quantity}</p>
            <button
              type="button"
              onClick={() => changeQuantity(wine.quantity + 1, wine)}
            >
              +
            </button>
          </Quantity>
          <Price>
            R$<span>{wine.wineBoxPrice}</span>
          </Price>
        </PricePerQtd>
      </CardInfo>
    </WineBoxCardContainer>
  )
}

export default WineBoxCard
