import React from 'react'

import style from './Item.module.css'

const Item = (props) => {
  const name = props.itemName + '-' + props.listName
  return (
    <label className={style.item}>
      <p>{props.itemName}</p>
      <input name={name} type="checkbox" aria-label="Checkbox for following text input" className="ing-checkbox" checked />
    </label>
  )
}

export default Item