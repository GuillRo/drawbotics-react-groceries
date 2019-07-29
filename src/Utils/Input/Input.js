import React from 'react'

import style from './Input.module.css'

const Input = (props) => {
  return (
    <form className={style['add-item']}>
      <input type="text" id="new-item" value="" name="new-item" placeholder={props.placeholder} />
    </form>
  )
}

export default Input