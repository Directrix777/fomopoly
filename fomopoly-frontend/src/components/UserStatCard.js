import React from 'react'

export default function UserStatCard(props) {
    return (
        <div className='user-card'>
            <p>{props.user.name}</p>
            <p>₣{props.user.cash}</p>
        </div>
    )
} 