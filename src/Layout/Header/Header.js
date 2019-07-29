import React from 'react'

import ButtonLink from '../../Utils/ButtonLink/ButtonLink'

import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.Header}>
      <div>
        <p className={style['title-big']}>GROCERIES APP</p>
      </div>
      <div>
        <ButtonLink customClass={style['title-big']} link="/login">Login</ButtonLink>
      </div>
    </header>
  )
}

export default Header