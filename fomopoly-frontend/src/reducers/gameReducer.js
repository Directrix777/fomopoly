const gameReducer = (state = {spaces: [], users: [], loading: false, moving: false}, action) => {
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
        case 'PAY_TO_BANK':
            let newUserss = state.users.map((user) => {
                if(user.id === action.id)
                {
                    //console.log("Found user to update location")
                    let newUser = {}
                    Object.assign(newUser, user)
                    //console.log(newUser)
                    newUser.cash -= action.amount
                    return newUser
                }
                return user
            })
            return {...state, users: newUserss}
        case 'PAY_USER':
            let newUsersss = state.users.map((user) => {
                if(user.id === action.id)
                {
                    //console.log("Found user to update location")
                    let newUser = {}
                    Object.assign(newUser, user)
                    //console.log(newUser)
                    newUser.cash += action.amount
                    return newUser
                }
                return user
            })
            return {...state, users: newUsersss}
        case 'DOUBLE_USER':
            let newUserssss = state.users.map((user) => {
                if(user.id === action.id)
                {
                    //console.log("Found user to update location")
                    let newUser = {}
                    Object.assign(newUser, user)
                    //console.log(newUser)
                    newUser.doubles_rolled += 1
                    return newUser
                }
                return user
            })
            return {...state, users: newUserssss}
        case 'RESET_DOUBLES':
            let newUsersssss = state.users.map((user) => {
                if(user.id === action.id)
                {
                    //console.log("Found user to update location")
                    let newUser = {}
                    Object.assign(newUser, user)
                    //console.log(newUser)
                    newUser.doubles_rolled = 0
                    return newUser
                }
                return user
            })
            return {...state, users: newUsersssss}
        default: 
            return state
    }
}

export default gameReducer