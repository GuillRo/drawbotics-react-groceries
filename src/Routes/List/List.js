import React from 'react'


import ButtonLink from '../../Utils/ButtonLink/ButtonLink'
import DropdownMenu from '../../Utils/Dropdown/Dropdown'
import Input from '../../Utils/Input/Input'
import Item from '../../components/Item/Item'

import style from './List.module.css'

const List = () => {
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
            <Input placeholder="Add new item"/>
          </div>
          <div className="items" id="pending-items">
            <Item listName="test" itemName="oil"/>
            <Item listName="test" itemName="sugar"/>
          </div>
          <div className={style['completed']}>
            <ButtonLink customClass={style['btn-completed']} link="/">
              Completed
            <i className="fas fa-chevron-up active"></i>
              <i className="fas fa-chevron-down"></i>
            </ButtonLink>
          </div>
          
          <div className="items" id="completed-items">
            <Item listName="test" itemName="milk"/>
            <Item listName="test" itemName="bread"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default List