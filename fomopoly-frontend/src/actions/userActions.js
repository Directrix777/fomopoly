export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING USERS'})
        fetch('http://localhost:3000/users')
        .then(r => r.json())
        .then(r => dispatch({type: 'ADD_USERS', users: r}))
    }
}

export const createUser = (user) => {
    return (dispatch) => {
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({name: user.name, token: user.token, game_id: user.game_id})
        }
        console.log(user)
        fetch('http://localhost:3000/users', options)
        .then(r => r.json())
        .then(r => dispatch({type: 'ADD_USER', user: r}))
    }
}