import React from 'react'
import Space from './Space'

export default function Street(props) {
    return(
        <div>
            {props.spaces.map((space) => {
                if(space.id % 10 == 0)
                {
                    return <Space space={space} corner={true}/>
                }
                else
                {
                    return <Space space={space} corner={false}/>
                }
            })}
        </div>
        
    )
}