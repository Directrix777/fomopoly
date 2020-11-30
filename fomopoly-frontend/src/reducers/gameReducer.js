const gameReducer = (state = {spaces: [], users: [], loading: false}, action) => {
    switch(action.type)
    {
        case 'LOADING_SPACES':
            return {...state, loading: true}
        case 'ADD_SPACES':
            return {...state, spaces: action.spaces, loading: false}
        case 'LOADING_USERS':
            return {...state, loading: true}
        case 'ADD_USERS':
            return {...state, users: action.users, loading: false}
        case 'ADD_USER':
            return {...state, users: [...state.users, action.user]}
        case 'DELETE_USER':
            return {...state, users: state.users.map((user) => {
                if(user.id !== action.id)
                {
                    return user
                }
            })}
        default: 
            return state
    }
}

export default gameReducer