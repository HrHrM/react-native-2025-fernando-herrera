import { useState } from 'react'

export const useCounter = () => {

    const [count, setCount] = useState<number>(0);

    const handleIncrement = (value: number): void => {
        setCount((Math.max(value + count, 0)));
    }


  return {
    // Propiedades
    count,
    // Metodos
    handleIncrement,
  }
}
