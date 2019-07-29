import React from 'react'

import Input from '../../Utils/Input/Input'
import ButtonLink from '../../Utils/ButtonLink/ButtonLink'

import style from './Login.module.css'

const Login = () => {
  return (
    <div className={style.Login}>
      <div>
        <Input placeholder="Login"/>
        <Input placeholder="Password"/>
      </div>
      <div>
        <ButtonLink link="/" customClass={style.btn}>Sign in</ButtonLink>
        <ButtonLink link="/" customClass={style.btn}>Sign up</ButtonLink>
      </div>
    </div>
  )
}

export default Login