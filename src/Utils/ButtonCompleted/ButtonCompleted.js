import React from 'react'

import style from './ButtonCompleted.module.css'

const ButtonCompleted = (props) => {
  let chevron = props.show ? "fas fa-chevron-up active" : "fas fa-chevron-down"
  return (
    <button className={style.ButtonCompleted} onClick={props.click}>
      {props.name}
      <i className={chevron} ></i>
    </button>
  )
}

export default ButtonCompleted