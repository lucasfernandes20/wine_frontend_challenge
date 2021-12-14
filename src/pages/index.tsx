import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import Header from '../components/Header'
import WineList from '../components/WineList'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { Wines } from '../Redux/ducks/Wines/types'

interface HomeProps {
  data: Wines[]
}

const Home: React.FC<HomeProps> = ({ data }) => {
  return (
    <Container>
      <Head>
        <title>Wine</title>
      </Head>
      <Header />
      <WineList wines={data} />
    </Container>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(
    'https://wine-back-test.herokuapp.com/products?page=1&limit=10'
  )
  return { props: { data: res.data.items } }
}

export default Home
