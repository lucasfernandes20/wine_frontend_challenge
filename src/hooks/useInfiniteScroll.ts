import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Wines, FilterState } from '../Redux/ducks/Wines/types'

interface InfiniteScrollProps {
  currentWines: Wines[]
  winesEnd: boolean
  setPriceFilter: (arg: string) => void
  resetPage: () => void
  priceFilter: string
}

interface ApplicationState {
  filter: FilterState
}

const useInfiniteScroll = (wines: Wines[]): InfiniteScrollProps => {
  const [usePages, setPages] = useState(1)
  const [currentWines, setWines] = useState(wines)
  const [winesEnd, setEndOfArray] = useState(false)
  const [priceFilter, setPriceFilter] = useState('')

  const filter = useSelector((state: ApplicationState) => state.filter.filter)

  const getWines = async () => {
    const ENDPOINT = 'https://wine-back-test.herokuapp.com/products'
    const result = await axios.get(ENDPOINT)
    const { items } = result.data
    if (items.length > 0) {
      const newValues = priceFilter.split('-')
      const filteredData = items.filter(
        (wine: Wines) =>
          wine.priceMember > Number(newValues[0]) &&
          wine.priceMember < Number(newValues[1])
      )
      setWines(() => filteredData)
    }
    setEndOfArray(true)
  }

  useEffect(() => {
    if (priceFilter !== '') {
      getWines()
    }
  }, [priceFilter])

  const resetPage = () => {
    setPages(1)
    setWines(wines)
    setEndOfArray(false)
    setPriceFilter('')
  }

  useEffect(() => {
    const getWines = async () => {
      if (usePages === 1) {
        return setWines(previewsState => previewsState)
      }
      const ENDPOINT = `https://wine-back-test.herokuapp.com/products?page=${usePages}&limit=10`
      const result = await axios.get(ENDPOINT)
      const { items } = result.data
      if (items.length > 0) {
        return setTimeout(() => {
          setWines(previewsState => [...previewsState, ...result.data.items])
        }, 500)
      }
      return setEndOfArray(true)
    }
    if (priceFilter === '') getWines()
  }, [usePages])

  useEffect(() => {
    if (filter) {
      const filteredData = currentWines.filter(e =>
        e.name.toLowerCase().includes(filter.toLowerCase())
      )
      setWines(filteredData)
    }
  }, [filter])

  useEffect(() => {
    const intersection = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPages(currentPageState => currentPageState + 1)
      }
    })

    intersection.observe(document.getElementById('sentinela'))
  }, [])
  return { currentWines, winesEnd, setPriceFilter, resetPage, priceFilter }
}

export default useInfiniteScroll
