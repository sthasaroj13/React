import React, { useId } from 'react'

function Input(props) {
  let uniqueid = useId()
  // while using a useId hooks in a component it  make the each  input different
  return (
    <div>
      <div>
        <label htmlFor={uniqueid}>{props.label}</label>
      </div>
      <input id={uniqueid} type={props.type} name={props.type} />
    </div>
  )
}

export default Input
