import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Input from '../Input/Input'

import style from './ButtonModal.module.css'

const ButtonModal = (props) => {
  const [show, setShow] = useState(false)
  const [newList, setNewList] = useState('')

  const handleShow = () => setShow(true)

  const saveListToLocalStorage = (listName) => {
    let lists = JSON.parse(localStorage.getItem('lists'))
    lists[listName] = {}
    localStorage.setItem('lists', JSON.stringify(lists))
    localStorage.setItem('activeList',JSON.stringify(listName) )
    props.loadItems(listName)
  }

  const keepList = () => {
    if (newList.toString().length > 0) {
      saveListToLocalStorage(newList)
    }
    setNewList('')
    setShow(false)
  }

  const discardList = () => {
    setNewList('')
    setShow(false)
  }

  return (
    <>
      <button onClick={handleShow} className={style.ButtonModal}><i className="fas fa-plus-circle"></i></button>
      <Modal show={show} onHide={discardList} dialogClassName={style.Modal}>
        <Modal.Body className={style.ModalBody}>
          <Input placeholder="Add new list" save={(listName) => { setNewList(listName) }}></Input>
        </Modal.Body>
        <Modal.Footer className={style.ModalFooter}>
          <Button className={style['btn-modal']} variant="" onClick={keepList}>
            Save
            </Button>
          <Button className={style['btn-modal']} variant="" onClick={discardList}>
            Close
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ButtonModal