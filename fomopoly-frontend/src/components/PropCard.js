import React from 'react'

export default function PropCard(props) {
    function abbreviateAvenue(string) {
        let words = string.split(' ')
        for(let i = 0; i < words.length; i++)
        {
            if(words[i] === 'Avenue')
            {
                words[i] = 'Ave.'
            }
        }
        return words.join(' ').toUpperCase()
    }

    return(
        <div className='prop-card'>
            <div className={`property-color-${props.space.color}`}>
                <p className='title-deed' style={{fontSize: '6pt', letterSpacing: '2px'}}>{'TITLE DEED'}</p>
                <p className='property-name' style={{fontSize: '8.6pt'}}>{abbreviateAvenue(props.space.name)}</p>
            </div>
            <p className='rent-line'>{`RENT: ₣${props.space.flat_rent}`}</p>
            <p className='house-rent-line'>{`With 1 House ₣${props.space.one_house_rent}`}</p>
            <p className='house-rent-line'>{`With 2 Houses ₣${props.space.two_house_rent}`}</p>
            <p className='house-rent-line'>{`With 3 Houses ₣${props.space.three_house_rent}`}</p>
            <p className='house-rent-line'>{`With 4 Houses ₣${props.space.four_house_rent}`}</p>
            <p className='rent-line'>{`With HOTEL ₣${props.space.four_house_rent}`}</p>
            <hr className='prop-divider'/>
            <p className='rent-line'>{`Mortgage Value ₣${props.space.mortgage_value}`}</p>
            <p className='rent-line'>{`Houses cost ₣${props.space.house_price}`}</p>
            <p className='rent-line'>{`Hotels cost ₣${props.space.house_price}`}</p>
            <p className='rent-line' style={{fontSize: '7pt'}}>{`(plus 4 houses)`}</p>

        </div>
    )
    // color: "", ding
    // name: "", ding
    // flat_rent: 0, ding
    // one_house_rent: 0, ding
    // two_house_rent: 0, ding
    // three_house_rent: 0, ding
    // four_house_rent: 0, ding
    // hotel_rent: 0, ding
    // mortgage_value: 0,
    // house_price: 0,
    // price: 0,
    // user_id: null,
}