import React from 'react'

function ContextMenu({Position}) {

    if(!Position.left) return
  return (
    <div >
      <div>
        <div>Edit</div>
        <div>Delete</div>
      </div>
    </div>
  )
}

export default ContextMenu
