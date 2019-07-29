import React from 'react'
import { ButtonToolbar, Dropdown, Button, ButtonGroup } from 'react-bootstrap'


import style from './Dropdown.module.css'

const DropdownMenu = () => {
  return (
    <ButtonToolbar>
      <Dropdown as={ButtonGroup}>
        <Button className = {style['dropdown-split-left']} variant="">All</Button>
        <Dropdown.Toggle className={style['dropdown-split-right']} variant="" split id="dropdown-custom-2" />
        <Dropdown.Menu>
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Active Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonToolbar>
  )
}

export default DropdownMenu