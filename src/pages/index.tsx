import React, { useEffect } from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import Header from '../components/Header'
import WineList from '../components/WineList'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { Wines } from '../Redux/ducks/Wines/types'
import { useDispatch } from 'react-redux'
import { loadSucess } from '../Redux/ducks/Wines/actions'

interface HomeProps {
  data: Wines[]
}

const Home: React.FC<HomeProps> = ({ data }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadSucess(data))
  }, [])

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
  const res = await axios.get('https://wine-back-test.herokuapp.com/products')
  return { props: { data: res.data.items } }
}

export default Home
