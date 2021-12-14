import React from 'react'
import { Wines } from '../../Redux/ducks/Wines/types'
import {
  CardContainer,
  Preview,
  WineName,
  WinePrice,
  ToCartBtn,
  MemberPrice,
  NomMenberPrice,
  P
} from './styles'

const WineCard = ({ wine }: { wine: Wines }): JSX.Element => {
  return (
    <CardContainer>
      <Preview src={wine.image} alt="wine" />
      <WineName>{wine.name}</WineName>
      <MemberPrice>
        <P>SÓCIO WINE</P>
        <WinePrice>
          R$ <span>{wine.priceMember}</span>
        </WinePrice>
      </MemberPrice>
      <NomMenberPrice>
        <span>{`NÃO SÓCIO  R$ ${wine.priceNonMember}`}</span>
      </NomMenberPrice>
      <ToCartBtn>Adicionar</ToCartBtn>
    </CardContainer>
  )
}

export default WineCard
