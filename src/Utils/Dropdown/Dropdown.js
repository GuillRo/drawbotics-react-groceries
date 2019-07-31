import React from 'react'
import { ButtonToolbar, Dropdown, Button, ButtonGroup } from 'react-bootstrap'


import style from './Dropdown.module.css'

const DropdownMenu = (props) => {

  const lists = []
  Object.keys(JSON.parse(localStorage.getItem('lists'))).forEach((listName, index) => {
    lists.push(<Dropdown.Item key={index+1} eventKey={(index+1).toString()} onClick={(event) => {props.changeList(event.target.innerText)}}>{listName}</Dropdown.Item>)
  })


  return (
    <ButtonToolbar>
      <Dropdown as={ButtonGroup}>
        <Button className={style['dropdown-split-left']} variant="">{props.activeList}</Button>
        <Dropdown.Toggle className={style['dropdown-split-right']} variant="" split id="dropdown-custom-2" />
        <Dropdown.Menu>
          {/* <Dropdown.Item key="1" eventKey="1">All</Dropdown.Item> */}
          {lists}
        </Dropdown.Menu>
      </Dropdown>
    </ButtonToolbar>
  )
}

export default DropdownMenu