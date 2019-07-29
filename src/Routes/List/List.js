import React from 'react'

import ButtonLink from '../../Utils/ButtonLink/ButtonLink'
import Dropdown from '../../Utils/Dropdown/Dropdown'
import Input from '../../Utils/Input/Input'

import style from './List.module.css'

const List = () => {
  return (
    <>
      <div className={style.List}>
        <div className={style.nav}>
          <Dropdown />
          <ButtonLink><i className="fas fa-plus-circle"></i></ButtonLink>
        </div>
        <div className="items-container">
          <Input />
          <div className="items" id="pending-items"></div>
          <ButtonLink>Completed</ButtonLink>
          <div className="items" id="completed-items"></div>
        </div>
      </div>
    </>
  )
}

export default List