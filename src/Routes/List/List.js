import React from 'react'

import ButtonLink from '../../Utils/ButtonLink/ButtonLink'
import Dropdown from '../../Utils/Dropdown/Dropdown'
import Input from '../../Utils/Input/Input'

import style from './List.module.css'

const List = () => {
  return (
    <>
      <div className={style.List}>
        <div className={style.lists}>
          <div className="btn-group">
            <Dropdown />
            <ButtonLink><i className="fas fa-plus-circle"></i></ButtonLink>
          </div>
          <div className="items-container">
            <Input />
            <div className="items" id="pending-items"></div>
            <ButtonLink>Completed</ButtonLink>
            <div className="items" id="completed-items"></div>
          </div>
        </div>
        
        <div className="lists">
          <div className="btn-group">
            {/* style="width: 200px;" onContextMenu="return false;" */}
            <button id="dropdown-lists-selection" className="btn btn-select" type="button">
              All
              </button>
            <button type="btn" className="btn btn-split dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              <span className="sr-only">Toggle Dropdown</span>
            </button>
            <div id="dropdown-lists" className="dropdown-menu dropdown-menu-right" >
              {/* style="width: 100%;" */}
            </div>
          </div>
          <button className="btn-transparent" type="button" id="add-list" data-toggle="modal"
            data-target="#modal-input-lists"><i className="fas fa-plus-circle"></i> </button>
        </div>
        <div className="items-container">
          <form className="add-item">
            <input type="text" id="new-item" value="" name="new-item" placeholder="Add new item">
            </input>
          </form>
          <div className="items" id="pending-items">
          </div>

          <div className="btn-group">
            <button id="btn-completed" className="btn-transparent">Completed
                <i className="fas fa-chevron-up active"></i>
              <i className="fas fa-chevron-down"></i>
              {/* style="display: none;" */}
            </button>
          </div>
          <div className="items" id="completed-items">

          </div>
        </div>
      </div>

    </>
  )
}

export default List