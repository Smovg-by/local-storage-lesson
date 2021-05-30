import React, { useEffect, useState } from 'react'
import './App.css'

export function App () {
  //BLL

  let [value, setValue] = useState<number>(0)

  useEffect(() => {
    let storedValue = localStorage.getItem('storedValue')
    if (storedValue) {
      let newStoredValue = JSON.parse(storedValue)
      setValue(newStoredValue)
    }
  }, []) // пишем пустой массив, тогда функция будет выполняться сразу после загрузки страницы

  useEffect(() => {
    localStorage.setItem('storedValue', JSON.stringify(value))
  }, [value])

  const onClickHandler = () => {
    setValue(value + 1)
  }

  const clearStorageValue = () => {
    localStorage.clear()
  }

  //UI

  return (
    <div>
      <div>{value}</div>
      <button onClick={onClickHandler}>Inc</button>
      <button onClick={clearStorageValue}>ClearStorageValue</button>
    </div>
  )
}
