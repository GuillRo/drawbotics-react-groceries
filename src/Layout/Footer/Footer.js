import React from 'react'

import ButtonLink from '../../Utils/ButtonLink/ButtonLink'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={style.Footer}>
      <ul>
        <li>
          <ButtonLink link="/">
            <i className="fas fa-list-ul"></i>
            <p>List</p>
          </ButtonLink>
        </li>
        <li>
          <ButtonLink link="/">
            <i className="fas fa-chart-pie"></i>
            <p>Stats</p>
          </ButtonLink>
        </li>
        <li>
        <ButtonLink link="/">
        <i className="fas fa-utensils"></i>
            <p>Recipes</p>
        </ButtonLink>
        </li>
      </ul>
    </footer>
  )
}

export default Footer