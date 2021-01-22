export const fetchSpaces = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_SPACES'})
        fetch('http://localhost:3000/spaces')
        .then(r => r.json())
        .then(r => {dispatch({type: 'ADD_SPACES', spaces: r})})
    }
}

export const sellSpace = (space, user) => { //both parameters are integers corresponding to an id value
    return (dispatch) => {
        const options = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({user: user})
        }
        fetch(`http://localhost:3000/spaces/${space}`)
        .then(r => r.json())
        .then(r => console.log(r))
    }
}