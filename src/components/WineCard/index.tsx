import Link from 'next/link'
import React from 'react'
import useWineBox from '../../hooks/useWineBox'
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
  const { addWineToState } = useWineBox()
  return (
    <CardContainer>
      <Link href={`/details/${wine.id}`}>
        <a>
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
        </a>
      </Link>
      <ToCartBtn onClick={() => addWineToState(wine)}>Adicionar</ToCartBtn>
    </CardContainer>
  )
}

export default WineCard
