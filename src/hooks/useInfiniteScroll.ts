import axios from 'axios'
import { useEffect, useState } from 'react'
import { Wines } from '../Redux/ducks/Wines/types'

const useInfiniteScroll = (wines: Wines[]): Wines[] => {
  const [usePages, setPages] = useState(1)
  const [currentWines, setWines] = useState(wines)

  useEffect(() => {
    const getWines = async () => {
      console.log('pages', usePages)
      if (usePages === 1) {
        return setWines(previewsState => previewsState)
      }
      const ENDPOINT = `https://wine-back-test.herokuapp.com/products?page=${usePages}&limit=10`
      const result = await axios.get(ENDPOINT)
      const { items } = result.data
      if (items) {
        setWines(previewsState => [...previewsState, ...result.data.items])
      }
    }
    getWines()
  }, [usePages])

  useEffect(() => {
    const intersection = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPages(currentPageState => currentPageState + 1)
      }
    })

    intersection.observe(document.getElementById('sentinela'))
  }, [])

  return currentWines
}

export default useInfiniteScroll
