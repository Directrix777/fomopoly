import React from 'react'
import CAR from '../images/tokens/CAR.png'
import CAT from '../images/tokens/CAT.png'
import DOG from '../images/tokens/DOG.png'
import DUCK from '../images/tokens/DUCK.png'
import HAT from '../images/tokens/HAT.png'
import IRON from '../images/tokens/IRON.png'
import PENGUIN from '../images/tokens/PENGUIN.png'
import SHIP from '../images/tokens/SHIP.png'
import SHOE from '../images/tokens/SHOE.png'
import THIMBLE from '../images/tokens/THIMBLE.png'
import TREX from '../images/tokens/TREX.png'
import WHEELBARROW from '../images/tokens/WHEELBARROW.png'

const renderImage = (token) => {
    switch(token)
    {
        case 'Car':
            return <img src={CAR}/>
        case 'Cat':
            return <img src={CAT}/>
        case 'Dog':
            return <img src={DOG}/>
        case 'Duck':
            return <img src={DUCK}/>
        case 'Hat':
            return <img src={HAT}/>
        case 'Iron':
            return <img src={IRON}/>
        case 'Penguin':
            return <img src={PENGUIN}/>
        case 'Ship':
            return <img src={SHIP}/>
        case 'Shoe':
            return <img src={SHOE}/>
        case 'Thimble':
            return <img src={THIMBLE}/>
        case 'T-rex':
            return <img src={TREX}/>
        case 'Wheelbarrow':
            return <img src={WHEELBARROW}/>
        default:
    }
}

export default function NewUserCard(props) {
    const user = props.user
    return (
        <div className='new-user-card'>
            <p>{user.name}</p>
            {renderImage(user.token)}
        </div>
    )
}