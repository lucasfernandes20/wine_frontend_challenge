import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { WinesState } from '../Redux/ducks/Wines/types'

interface SelectorState {
  wines: WinesState
}

interface ApplicationState {
  warning: string[]
}

const useWarning = (): ApplicationState => {
  const [warning, setWarning] = useState([])
  const [loading, setLoading] = useState(true)
  const wineBox = useSelector((state: SelectorState) => state.wines.wineBox)

  useEffect(() => {
    if (!loading && wineBox.length !== 0) {
      setWarning(prevState => [...prevState, wineBox[wineBox.length - 1].name])

      setTimeout(() => {
        setWarning(prevState => prevState.splice(0, 0))
      }, 3000)
    }
    setLoading(false)
  }, [wineBox])

  return {
    warning
  }
}

export default useWarning
