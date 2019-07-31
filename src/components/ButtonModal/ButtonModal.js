import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

import Input from '../../Utils/Input/Input'

import style from './ButtonModal.module.css'

const ButtonModal = (props) => {

  // show is the state of the modal shown or hidden
  // newList is the state of the name of the future list
  const [show, setShow] = useState(false)
  const [newList, setNewList] = useState('')

  // show the mdoal
  const handleShow = () => setShow(true)

  // save the new list the the localStorage and displays it
  const saveListToLocalStorage = (listName) => {
    let lists = JSON.parse(localStorage.getItem('lists'))
    lists[listName] = {}
    localStorage.setItem('lists', JSON.stringify(lists))
    localStorage.setItem('activeList',JSON.stringify(listName) )
    props.loadItems(listName)
  }

  // keep the list if the name is not empty
  const keepList = () => {
    if (newList.toString().length > 0) {
      saveListToLocalStorage(newList)
    }
    setNewList('')
    setShow(false)
  }

  // dicard the list when you click outside the modal (or on the Close button)
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