import { useEffect, useState } from 'react'

export interface IUseAccordion {
  initialNumber?: number
  initialOpen?: boolean
}

function useAccordion({ initialNumber, initialOpen }: IUseAccordion = {}) {
  const [open, setInitialOpen] = useState<boolean>(false)
  const [number, setNumber] = useState<number | null>(null)

  // если есть initial state, заменяем состоние
  useEffect(() => {
    // может быть там бывает 0, поэтому перевращаем на строкой
    if (initialNumber?.toString()) {
      setNumber(Number(initialNumber))
    }
  }, [initialNumber])

  useEffect(() => {
    if (initialOpen) {
      setInitialOpen(initialOpen)
    }
  }, [initialOpen])

  return {
    setInitialOpen,
    setNumber,
    accordionState: {
      initialOpen: open,
      number,
    },
  }
}

export default useAccordion
