import React, { useState } from 'react'
import _ from 'lodash'

import ButtonModal from '../../components/ButtonModal/ButtonModal'
import ButtonCompleted from '../../Utils/ButtonCompleted/ButtonCompleted'
import DropdownMenu from '../../Utils/Dropdown/Dropdown'
import Input from '../../Utils/Input/Input'
import Item from '../../components/Item/Item'

import style from './List.module.css'

const List = () => {

  // activeList stores the active list (the one displayed in the dropdown)
  // lists get the lists and their items from the localStorage.
  let activeList = JSON.parse(localStorage.getItem('activeList'))
  let lists = JSON.parse(localStorage.getItem('lists'))

  // the hooks used by the app.
  // showCompleted is used to show or hide the completed items.
  // items is the state used for the items which will be displayed.
  const [showCompleted, setShowCompleted] = useState(true)
  const [items, setItems] = useState(lists[activeList])

// updates the items state and the localStorage (when an item is set for completed to uncompleted for example).
  const updateItems = (newItems) => {
    let updatedLists = lists
    updatedLists[activeList] = newItems
    localStorage.setItem('lists', JSON.stringify(updatedLists))
    setItems(newItems)
  }

  // load the items for a specific list to display them.
  const loadItemsFromList = (listName) => {
    localStorage.setItem('activeList', JSON.stringify(listName))
    activeList = JSON.parse(localStorage.getItem('activeList'))
    lists = JSON.parse(localStorage.getItem('lists'))
    setItems(lists[activeList])
  }

  // change the value (hidden or shown) of a specific item.
  const completedItemHandler = (item) => {
    const value = !items[item]
    let newItems = _.cloneDeep(items)
    newItems[item] = value
    updateItems(newItems)
  }

  // change the showCompleted state (completed itemps will bi shown or hidden)
  const completedButtonHandler = () => {
    const value = !showCompleted
    setShowCompleted(value)
  }

  // creates a new item with the received input
  const saveInputAsItem = (itemName) => {
    if (itemName.toString().length > 0) {
      let newItems = _.cloneDeep(items)
      newItems[itemName] = false
      updateItems(newItems)
    }
  }

  // creates the arrays of the items according to their value (false for unchecked, true for checked)
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
          <DropdownMenu activeList={activeList} changeList={(listName) => { loadItemsFromList(listName) }} />
          <ButtonModal loadItems={(listName) => {loadItemsFromList(listName)}}/>
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