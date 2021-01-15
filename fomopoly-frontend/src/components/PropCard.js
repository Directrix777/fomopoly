import React from 'react'

export default function PropCard(props) {
    return(
        <>
            <p>{props.space.color}</p>
            <p>{props.space.name}</p>
        </>
    )
    // color: "",
    // name: "",
    // flat_rent: 0,
    // one_house_rent: 0,
    // two_house_rent: 0,
    // three_house_rent: 0,
    // four_house_rent: 0,
    // hotel_rent: 0,
    // mortgage_value: 0,
    // house_price: 0,
    // price: 0,
    // user_id: null,
}