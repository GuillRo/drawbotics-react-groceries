import React from 'react'

import style from './ButtonLink.module.css'

const ButtonLink = (props) => {
  const className = props.customClass ? style.ButtonLink + ' ' + props.customClass : style.ButtonLink

  return (
    <button className={className}>{props.children}</button>
  )
}

export default ButtonLink