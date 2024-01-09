import './MenuItem.css'
import 'remixicon/fonts/remixicon.css'

import React from 'react'
// import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg'

export default function MenuItem({ icon, title, action, isActive = null }) {
  return (
    <button
      className={`menu-item${isActive && isActive() ? ' is-active' : ''}`}
      onClick={action}
      title={title}
    >
      <i className={`ri-${icon}`}></i>
      {/* <svg className="remix">
        <use xlinkHref={`${remixiconUrl}#ri-${icon}`} />
      </svg> */}
    </button>
  )
}
