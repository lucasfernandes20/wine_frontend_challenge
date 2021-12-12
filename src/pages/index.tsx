import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import Header from '../components/Header'
import WineList from '../components/WineList'
import { GetStaticProps } from 'next'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Wine</title>
      </Head>
      <Header />
      <WineList />
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://...')
  const data = await res.json()

  return { props: { data } }
}

export default Home
