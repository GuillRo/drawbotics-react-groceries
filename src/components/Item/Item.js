import React from 'react'

import style from './Item.module.css'

const Item = (props) => {
  const name = props.itemName + '-' + props.listName
  let component = ''
  if (props.checked) {
    component = (
      <label className={style.item}>
        <p>{props.itemName}</p>
        <input
          onChange={props.click}
          name={name}
          type="checkbox"
          aria-label="Checkbox for following text input"
          className="ing-checkbox"
          checked />
      </label>
    )
  } else {
    component = (
      <label className={style.item}>
        <p>{props.itemName}</p>
        <input
          onChange={props.click}
          name={name}
          type="checkbox"
          aria-label="Checkbox for following text input"
          className="ing-checkbox" />
      </label>
    )
  }
  return component
}

export default Item