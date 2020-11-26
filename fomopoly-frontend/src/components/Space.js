const renderColor = (space) => {
    if(space.color !== null)
    {
    return <div className={`color-indicator-${space.color}`}/>
    }
}

const renderPrice = (space) => {
    if(space.price !== null)
    {
        if(space.color === 'Black' || space.color === 'Mint')
        {
            return <p style={{marginTop: 50, marginBottom: 'auto'}}>₣{space.price}</p>
        }
        else
        {
            return <p style={{marginTop: 22, marginBottom: 'auto'}}>₣{space.price}</p>
        }
    }
}

export default function Space(props) {
        return(
            <div className={`${props.side}-space`}>
                {renderColor(props.space)}
                <p style={{height: 50}}>{props.space.name.toUpperCase()}</p>
                {renderPrice(props.space)}
            </div>
        )
} 