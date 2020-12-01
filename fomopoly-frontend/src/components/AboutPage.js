import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function AboutPage() {
    return(<div>
        <div className='start-button'>
            <NavLink to='/'>Back To Menu</NavLink>
        </div>
        <p>This is a developmental build of what will eventually be Fomopoly. I've played many board games looking for an experience like this, but my search has been unsuccessful. I decided to create it myself. The title is a play on words. See, when a player owns all of one set of spaces of the same color, it's kind of like they have a "monopoly" over the whole area. But monopolies aren't fun. They're bad and illegal. So I decided to make the monopolies fun-monopolies, hence the name: Fomopoly. I didn't really know what the rents should be, so I sort of just put in random numbers? There's kind of a pattern to it, a little, but it was mostly just random. As a result, the game might have some balancing issues. If you notice any, feel free to report those issues via the link on the bottom of this page.</p>
        <a href='https://github.com/Directrix777/fomopoly'>Report An Issue</a>
    </div>)
}