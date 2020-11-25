const gameReducer = (state = {spaces: [], users: [], loading: false}, action) => {
    switch(action.type)
    {
        case 'LOADING_SPACES':
            return {...state, loading: true}
        case 'ADD_SPACES':
            return {...state, spaces: action.spaces}
        default:
            return state
    }
}

export default gameReducer