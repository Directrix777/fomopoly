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
        case 'MOVE_USER':
            let newUsers = state.users.map((user) => {
                if(user.id === action.id)
                {
                    //console.log("Found user to update location")
                    let newUser = {}
                    Object.assign(newUser, user)
                    //console.log(newUser)
                    if(user.current_location === 40)
                    {
                        newUser.current_location = 1
                        //console.log(newUser)
                        return newUser
                    }
                    else
                    {
                        newUser.current_location += 1
                        return newUser
                    }
                }
                return user
            })
            return {...state, users: newUsers}
        case 'DELETE_USER':
            return {...state, users: state.users.filter((user) => {return user.id !== action.id})}
        default: 
            return state
    }
}

export default gameReducer