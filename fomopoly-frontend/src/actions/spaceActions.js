export const fetchSpaces = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_SPACES'})
        fetch('http://localhost:3000/spaces')
        .then(r => r.json())
        .then(r => {dispatch({type: 'ADD_SPACES', spaces: r})})
    }
}