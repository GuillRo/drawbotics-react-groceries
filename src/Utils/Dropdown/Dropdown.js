import React from 'react'

import style from './Dropdown.module.css'

const Dropdown = () => {


  return (
    <div className="btn-group" >
      {/* style="width: 200px;" onContextMenu="return false;" */}
      <button id="dropdown-lists-selection" className={style.btn + ' ' + style['btn-select']} type="button">
        All
      </button>
      <button
        type="btn"
        className={style.btn + ' ' + style['btn-split'] + "dropdown-toggle dropdown-toggle-split"}
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div id="dropdown-lists" className="dropdown-menu dropdown-menu-right" >
        {/* style="width: 100%;" */}
      </div>
    </div>
  )
}

export default Dropdown