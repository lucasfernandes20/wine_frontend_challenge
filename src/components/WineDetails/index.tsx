import React from 'react'
import { Wines } from '../../Redux/ducks/Wines/types'
import {
  DetailContainer,
  Apresentation,
  Tags,
  Local,
  Description,
  Comment,
  ToCartContainer,
  Prices,
  BackIcon,
  Preview,
  WineInfos,
  SommelierComment,
  WinePrice,
  AddCartContainer,
  BackBtn,
  AddtoCart
} from './styles'
import { BsChevronRight } from 'react-icons/bs'
import useWineBox from '../../hooks/useWineBox'
import Link from 'next/link'
import WarningAddToCart from '../WarningAddToCart'

interface WineDetailsProps {
  wine: Wines
}

const WineDetails: React.FC<WineDetailsProps> = ({ wine }) => {
  const { addWineToState, AddToCartWithQuantity, quantity } = useWineBox()
  return (
    <DetailContainer>
      <BackBtn>
        <Link href="/">
          <a>
            <BackIcon />
            <p>Voltar</p>
          </a>
        </Link>
      </BackBtn>
      <Apresentation>
        <Local>
          <p>Vinho</p>
          <BsChevronRight size="15px" color="#888888" />
          <p>{wine.country}</p>
          <BsChevronRight size="15px" color="#888888" />
          <p>{wine.region}</p>
        </Local>
        <h2>{wine.name}</h2>
        <Tags>
          <img src={wine.flag} alt="contry flag" />
          <p>{wine.country}</p>
          <p>{wine.type}</p>
          <p>{wine.classification}</p>
          <p>{wine.size}</p>
        </Tags>
        <WineInfos>
          <SommelierComment>
            <WinePrice>
              <p>
                R$ <span>{wine.priceMember}</span>
              </p>
              <p>{`NÃO-SÓCIO R$ ${wine.priceNonMember}/UN.`}</p>
            </WinePrice>
            <h2>Descrição</h2>
            <Comment>{wine.sommelierComment}</Comment>
            <AddCartContainer>
              <button
                className="quantity-btn"
                type="button"
                onClick={() => AddToCartWithQuantity(wine, true)}
              >
                +
              </button>
              <p>{quantity}</p>
              <button
                className="quantity-btn"
                type="button"
                onClick={() => AddToCartWithQuantity(wine, false)}
              >
                -
              </button>
              <AddtoCart type="button" onClick={() => addWineToState(wine)}>
                Adicionar
              </AddtoCart>
            </AddCartContainer>
          </SommelierComment>
        </WineInfos>
      </Apresentation>
      <Preview src={wine.image} alt="wine" />
      <Description>
        <h2>Descrição</h2>
        <Comment>{wine.sommelierComment}</Comment>
        <ToCartContainer>
          <Prices>
            <p>{`${wine.discount}% OFF`}</p>
            <p>{`R$ ${wine.price}`}</p>
            <p>
              R$ <span>{wine.priceMember}</span>
            </p>
            <p>{`PREÇO NÃO-SÓCIO R$ ${wine.priceNonMember}`}</p>
          </Prices>
          <AddtoCart type="button" onClick={() => addWineToState(wine)}>
            Adicionar
          </AddtoCart>
        </ToCartContainer>
      </Description>
      <WarningAddToCart />
    </DetailContainer>
  )
}

export default WineDetails
