import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './ButtonLink.module.css'

const ButtonLink = (props) => {

  const className = props.customClass ? style.ButtonLink + ' ' + props.customClass : style.ButtonLink

  return (
    <NavLink
      className={className}
      to={props.link}>
      {props.children}
    </NavLink>
  )
}

export default ButtonLink