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

export const moveUserOneSpace = (id) => {
    return (dispatch) => {
        dispatch({type: 'MOVE_USER', id: id})
    }
}

export const deleteUser = (id) => {
    return (dispatch) => {
        const options = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({id: id})
        }
        fetch(`http://localhost:3000/users/${id}`, options)
        .then(r => r.json())
        .then(r => console.log(r))
    }
}

export const saveUser = (user) => {
    return (dispatch) => {
        const options = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        }
        console.log(user)
        fetch(`http://localhost:3000/users/${user.id}`, options)
        .then(r => r.json())
        .then(r => console.log(r))
    };
}

export const movingUser = () => {
    return (dispatch) => {
        dispatch({type: 'MOVING_USER'})
    }
}

export const doneMovingUser = () => {
    return (dispatch) => {
        dispatch({type: 'DONE_MOVING_USER'})
    }
}