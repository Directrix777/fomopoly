import React from 'react'

const numberToDie = (number) => {
    const die = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']
    return die[number - 1]
    //number must be 1-6
}

export default function Roller(props) {
    return( 
        <div>
            <p style={{fontSize: '35pt', margin: 0}}>{`${numberToDie(props.first)} ${numberToDie(props.second)}`}</p>
            <p>{props.total}</p>
        </div>
    )
}