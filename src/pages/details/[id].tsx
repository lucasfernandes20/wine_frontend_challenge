import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import Header from '../../components/Header'
import WineDetails from '../../components/WineDetails'
import { Wines } from '../../Redux/ducks/Wines/types'
import { Container } from '../../styles/pages/Home'

interface DetailsProps {
  data: Wines
}

const wineDetails: React.FC<DetailsProps> = ({ data }) => {
  return (
    <Container>
      <Header />
      <WineDetails wine={data} />
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await axios.get(
    'https://wine-back-test.herokuapp.com/products'
  )

  const paths = result.data.items.map(e => ({
    params: { id: String(e.id) }
  }))
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params
  const res = await axios.get(
    `https://wine-back-test.herokuapp.com/products?page=${
      Number(id) + 1
    }&limit=1`
  )
  return { props: { data: res.data.items[0] }, revalidate: 10 }
}

export default wineDetails
