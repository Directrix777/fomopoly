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
            console.log(action.user)
            return {...state, users: [...state.users, action.user]}
        default: 
            return state
    }
}

export default gameReducer