import React from 'react'

export default function Button(props) {
    return <div className={`${props.type}-button`} onClick={() => {props.handleClick()}}>{props.text}</div>

}