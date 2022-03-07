import React from 'react'

export default function Square(props) {
  return (
    <button className = {props.value ? 'button disabled': "button"} onClick = {props.onClick}>
      { props.value }
    </button>

  )
}
