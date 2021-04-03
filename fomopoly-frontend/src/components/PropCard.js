import React from 'react'
import train from '../images/TRAIN.gif'
import electric from '../images/ELECTRIC.jpg'
import water from '../images/WATER.jpg'

export default function PropCard(props) {
    function abbreviateAvenue(string) {
        let words = string.split(' ')
        for(let i = 0; i < words.length; i++)
        {
            if(words[i] === 'Avenue')
            {
                words[i] = 'Ave.'
            }
            else if(words[i] === 'North')
            {
                words[i] = 'No.'
            }
        }
        return words.join(' ').toUpperCase()
    }

    function abbreviatePennRailroad(name)
    {
        if(name === 'Pennsylvania Railroad')
        {
            return 'PENNSYLVANIA R.R.'
        }
        else
        {
            return name.toUpperCase()
        }
    }

    function utilityIcon(name)
    {
        if(name.split(' ')[0] === 'Electric')
        {
            return electric
        }
        else
        {
            return water
        }
    }
    if(props.space.color)
    {
        let golden = ''
        if(props.fullSet)
        {
            golden = 'golden-'
        }
        if (props.space.color === 'Black')
        {
            return (
                <div className={`${golden}prop-card`}>
                    <img className= 'prop-card-icon' src={train} alt='train'/>
                    <hr className='prop-divider'/>
                    <p className={`${golden}railroad-name`}>{`${abbreviatePennRailroad(props.space.name)}`}</p>
                    <hr className='prop-divider'/>
                    <p className='rent-line'>{`RENT ₣${props.space.flat_rent}`}</p>
                    <p className='rent-line'>{`If 2 R.R.'s owned ₣${props.space.flat_rent * 2}`}</p>
                    <p className='rent-line'>{`If 3 R.R.'s owned ₣${props.space.flat_rent * 4}`}</p>
                    <p className='rent-line'>{`If 4 R.R.'s owned ₣${props.space.flat_rent * 8}`}</p>
                    <p className='rent-line'>{`Mortgage Value ₣${props.space.mortgage_value}`}</p>

                </div>
            )
        }
        else if (props.space.color === 'Mint')
        {
            return (
                <div className={`${golden}prop-card`}>
                    <img className= 'prop-card-icon' src={utilityIcon(props.space.name)} alt='train'/>
                    <hr className='prop-divider'/>
                    <p className={`${golden}railroad-name`}>{`${(props.space.name.toUpperCase())}`}</p>
                    <hr className='prop-divider'/>
                    <p className ='rent-line'>{`If one "Utility" is owned rent is 4 times amount shown on dice.`}</p>
                    <p className ='rent-line'>{`If both "Utilities" are owned rent is 10 times amount shown on dice.`}</p>
                    <p className='rent-line'>{`Mortgage Value ₣${props.space.mortgage_value}`}</p>
                </div>
            )
        }
        else
        {
            return(
                <div className={`${golden}prop-card`}>
                    <div className={`property-color-${props.space.color}`}>
                        <p className='title-deed' style={{fontSize: '6pt', letterSpacing: '2px'}}>{'TITLE DEED'}</p>
                        <p className='property-name' style={{fontSize: '8.6pt'}}>{abbreviateAvenue(props.space.name)}</p>
                    </div>
                    <p className='rent-line'>{`RENT: ₣${props.space.flat_rent}`}</p>
                    <p className='rent-line'>{`₣ULL SET: ₣${props.space.flat_rent*2}`}</p>
                    <p className='house-rent-line'>{`With 1 House ₣${props.space.one_house_rent}`}</p>
                    <p className='house-rent-line'>{`With 2 Houses ₣${props.space.two_house_rent}`}</p>
                    <p className='house-rent-line'>{`With 3 Houses ₣${props.space.three_house_rent}`}</p>
                    <p className='house-rent-line'>{`With 4 Houses ₣${props.space.four_house_rent}`}</p>
                    <p className='rent-line'>{`With Hotel ₣${props.space.hotel_rent}`}</p>
                    <hr className='prop-divider'/>
                    <p className='rent-line'>{`Mortgage Value ₣${props.space.mortgage_value}`}</p>
                    <p className='rent-line'>{`Houses cost ₣${props.space.house_price}`}</p>
                    <p className='rent-line'>{`Hotels cost ₣${props.space.house_price}`}</p>
                    <p className='rent-line' style={{fontSize: '7pt'}}>{`(plus 4 houses)`}</p>
        
                </div>
            )
        }
    }
    else
    {
        return (
            <div className='prop-card'>
                <p>{'Something Else'}</p>
            </div>
        )
    }
    
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