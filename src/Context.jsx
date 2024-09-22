/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
const stateContext = createContext();

const MyStateContextProvider = ({ children }) => {
  const [count, setCount] = useState()
  const [itemsArray, setItemsArray] = useState([])
  const [id, setId] = useState('')
  const [item, setItem] = useState('')
  const [weight, setWeight] = useState('')
  const [unit, setUnit] = useState('Unit')
  const [message, setMessage] = useState('Add Items To Cart....')
  const [Toggler, setToggler] = useState(false)
  const [buttonEnabler, setButtonEnabler] = useState(true)


  useEffect(() => {
    if (item !== '' || weight !== '' || unit !== 'Unit') {
      setButtonEnabler(false)
    }
    else {
      setButtonEnabler(true)
    }
  }, [item])

  const updateItemList = () => {
    const storage = localStorage.getItem('cart')
    setItemsArray(JSON.parse(storage))
  }

  const removeFromCart = (id) => {
    const storage = localStorage.getItem('cart')
    if (storage) {
      const parsedStorage = JSON.parse(storage)
      const filteredArray = parsedStorage.filter(item => item.id !== id)
      localStorage.setItem('cart', JSON.stringify(filteredArray))
      updateItemList()
      const lastItemIndex = filteredArray.length
      if (lastItemIndex) {
        const lastItemID = filteredArray[lastItemIndex - 1].id
        setCount(lastItemID + 1)
      }
    }
    setItem('')
    setWeight('')
    setUnit('Unit')
    setId('')
  }

  const getterAndSetter = (id) => {
    const storage = localStorage.getItem('cart')
    if (storage) {
      const parsedStorage = JSON.parse(storage)
      const filteredArray = parsedStorage.filter(item => item.id === id)
      if (filteredArray.length) {
        const filteredItem = filteredArray[0]
        setItem(filteredItem.item)
        setWeight(filteredItem.weight)
        setUnit(filteredItem.unit)
        setId(filteredItem.id)
      }
    }
  }

  const editItem = () => {
    const storage = localStorage.getItem('cart')
    if (storage) {
      const parsedStorage = JSON.parse(storage)
      const index = parsedStorage.findIndex(obj => obj.id === id)
      parsedStorage[index].item = item.trim()
      parsedStorage[index].weight = weight.trim()
      parsedStorage[index].unit = unit
      localStorage.setItem('cart', JSON.stringify(parsedStorage))
      updateItemList()
      setItem('')
      setWeight('')
      setUnit('Unit')
      setId('')
    }
  }

  const AddToCart = () => {
    const storage = localStorage.getItem('cart')
    if (storage) {
      let parsedStorage = JSON.parse(storage)
      parsedStorage.push({ id: count, item: item.trim(), weight: weight.trim(), unit: unit })
      localStorage.setItem('cart', JSON.stringify(parsedStorage))
    } else {
      localStorage.setItem('cart', JSON.stringify([{ id: count, item: item.trim(), weight: weight.trim(), unit: unit }]))
    }
    setCount(count + 1)
    updateItemList()
    setItem('')
    setWeight('')
    setUnit('Unit')
    setId('')
  }

  const stateHandler = (unit) => {
    setUnit(unit)
    setToggler(false)
  }

  const toggleHandler = () => {
    setToggler(!Toggler)
  }
  useEffect(() => {
    if (itemsArray.length > 0) {
      setMessage('All items in your list....')
    } else {
      setMessage('Add Items To Cart....')
    }
  }, [itemsArray.length])

  const setItems = () => {
    const cart = localStorage.getItem('cart')
    if (cart) {
      const parsedCart = JSON.parse(cart)
      if (parsedCart.length) {
        setItemsArray(parsedCart)
        const lastItemIndex = parsedCart.length
        const lastItemID = parsedCart[lastItemIndex - 1].id
        setCount(lastItemID + 1)
      } else {
        setCount(0)
      }
    }
  }

  useEffect(() => {
    setItems()
  }, [])

  return (
    <stateContext.Provider value={{ item, weight, Toggler, unit, itemsArray, message, buttonEnabler, removeFromCart, AddToCart, setItem, setWeight, stateHandler, toggleHandler, getterAndSetter, id, editItem }}>
      {children}
    </stateContext.Provider>
  );
};

export { stateContext, MyStateContextProvider };
