import React, { useState } from 'react'

import style from './Input.module.css'

const Input = (props) => {

  const [value, setValue] = useState('')

  const inputChangedHandler = (newValue) => {
    setValue(newValue)
  }


  return (
    <form className={style['add-item']}>
      <input
        type="text"
        id="new-item"
        value={value}
        name="new-item"
        placeholder={props.placeholder}
        onChange={(event) => inputChangedHandler(event.target.value)}
        onBlur={() => { 
          props.save(value)
          setValue('') }} />
    </form>
  )
}

export default Input