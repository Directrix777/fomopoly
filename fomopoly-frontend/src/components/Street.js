import React from 'react'
import Space from './Space'

export default function Street(props) {
    if(props.side === 'left' || props.side === 'right' )
    {
        return(
            <div style={{width: 60}}>
                {props.spaces.map((space) => {
                        return <Space key={space.id} space={space} side={props.side}/>
                })}
            </div>
        )
    }
    else
    {
        return(
        <div>
            {props.spaces.map((space) => {
                    return <Space key={space.id} space={space} side={props.side}/>
            })}
        </div>
        )
    }
}