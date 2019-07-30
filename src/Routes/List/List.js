import React, { useState } from 'react'
import _ from 'lodash'

import ButtonLink from '../../Utils/ButtonLink/ButtonLink'
import ButtonCompleted from '../../Utils/ButtonCompleted/ButtonCompleted'
import DropdownMenu from '../../Utils/Dropdown/Dropdown'
import Input from '../../Utils/Input/Input'
import Item from '../../components/Item/Item'

import style from './List.module.css'

const List = (props) => {

  const initialState = () => {
    if (!localStorage.getItem(props.name)) {
      const initalObject = { 'Bread': true, 'Wine': false, 'Vinegar': true, 'Meat': false }
      localStorage.setItem(props.name, JSON.stringify(initalObject))
    }
    return localStorage.getItem(props.name)
  }

  const [showCompleted, setShowCompleted] = useState(true)
  const [items, setItems] = useState(JSON.parse(initialState()))

  const updateItems = (newItems) => {
    localStorage.setItem(props.name, JSON.stringify(newItems))
    setItems(newItems)
  }

  const completedItemHandler = (item) => {
    const value = !items[item]
    let newItems = _.cloneDeep(items)
    newItems[item] = value
    updateItems(newItems)
  }

  const completedButtonHandler = () => {
    const value = !showCompleted
    setShowCompleted(value)
  }


  const saveInputAsItem = (itemName) => {
    if (itemName.toString().length > 0) {
      let newItems = _.cloneDeep(items)
      newItems[itemName] = false
      updateItems(newItems)
    }
  }

  const completed = []
  const pending = []
  Object.keys(items).forEach((item, index) => {
    if (!items[item]) {
      pending.push(<Item key={index} listName="test" itemName={item} checked={false} click={() => { completedItemHandler(item) }} />)
    } else if (showCompleted) {
      completed.push(<Item key={index} listName="test" itemName={item} checked={true} click={() => { completedItemHandler(item) }} />)
    }
  })

  return (
    <>
      <div className={style.List}>
        <div className={style.nav}>
          <DropdownMenu />
          <ButtonLink
            link="/"
            customClass={style['add-list-button']} ><i className="fas fa-plus-circle"></i></ButtonLink>
        </div>
        <div className={style['items-container']}>
          <div className={style['input-item']}>
            <Input
              placeholder="Add new item"
              save={(itemName) => { saveInputAsItem(itemName) }} />
          </div>
          <div className="items" id="pending-items">
            {pending}
          </div>
          <div className={style['completed']}>
            <ButtonCompleted
              name="Completed"
              show={showCompleted}
              click={completedButtonHandler} />
          </div>
          <div className="items" id="completed-items">
            {completed}
          </div>
        </div>
      </div>
    </>
  )
}

export default List