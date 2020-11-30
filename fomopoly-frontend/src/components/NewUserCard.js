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
    if(token === 'Car')
    {
        return (
            <div className='token-icon'>
                <img className='icon-image' src={CAR} alt='CAR TOKEN'/>
            </div>
        )
    }
    else if(token === 'Cat')
    {
        return (
                <div className='token-icon'>
                    <img className='icon-image' src={CAT} alt='CAT TOKEN'/>
                </div>
        )
    }
    else if(token === 'Dog')
    {
        return (
            <div className='token-icon'>
                <img className='icon-image' src={DOG} alt='DOG TOKEN'/>
            </div>
        )
    }
    else if(token === 'Duck')
    {
        return (
        <div className='token-icon'>
            <img className='icon-image' src={DUCK} alt='DUCK TOKEN'/>
        </div>
        )
    }
    else if(token === 'Hat')
    {
        return (
            <div className='token-icon'>
                <img className='icon-image' src={HAT} alt='HAT TOKEN'/>
            </div>
        )
    }
    else if(token === 'Iron')
    {
        return (
            <div className='token-icon'>
                <img className='icon-image' src={IRON} alt='IRON TOKEN'/>
            </div>
        )
    }
    else if(token === 'Penguin')
    {
        return (
            <div className='token-icon'>
                <img className='icon-image' src={PENGUIN} alt='PENGUIN TOKEN'/>
            </div>
        )
    }
    else if(token === 'Ship')
    {
        return (
            <div className='token-icon'>
                <img className='icon-image' src={SHIP} alt='SHIP TOKEN'/>
            </div>
        )
    }
    else if(token === 'Shoe')
    {
        return (
            <div className='token-icon'>
                <img className='icon-image' src={SHOE} alt='SHOE TOKEN'/>
            </div>
        )
    }
    else if(token === 'Thimble')
    {
        return (
            <div className='token-icon'>
                <img className='icon-image' src={THIMBLE} alt='THIMBLE TOKEN'/>
            </div>
        )
    }
    else if(token === 'T-rex')
    {
        return (
            <div className='token-icon'>
                <img className='icon-image' src={TREX} alt='T-REX TOKEN'/>
            </div>
        )
    }
    else if(token === 'Wheelbarrow')
    {
        return (
            <div className='token-icon'>
                <img className='icon-image' src={WHEELBARROW} alt='WHEELBARROW TOKEN'/>
            </div>
        )
    }
}

export default function NewUserCard(props) {
    return (
        <div className='new-user-card'>
            <p style={{textAlign: 'center'}}>{props.user.name}</p>
            {renderImage(props.user.token)}
        </div>
    )
}