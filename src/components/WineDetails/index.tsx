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
  Prices
} from './styles'
import { BsChevronRight } from 'react-icons/bs'
import useWineBox from '../../hooks/useWineBox'

interface WineDetailsProps {
  wine: Wines
}

const WineDetails: React.FC<WineDetailsProps> = ({ wine }) => {
  const { addWineToState } = useWineBox()
  return (
    <DetailContainer>
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
        <img src={wine.image} alt="wine" />
      </Apresentation>
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
          <button type="button" onClick={() => addWineToState(wine)}>
            Adicionar
          </button>
        </ToCartContainer>
      </Description>
    </DetailContainer>
  )
}

export default WineDetails
