
const ADD_USER = (name, imgURL) => {
    return ({
        type: 'ADD_USER',
        payload: {
            name,
            imgURL
        }
    })
}
const UPDATE_USER = (id, name, imgURL) => {
    return ({
        type: 'UPDATE_USER',
        payload: {
            id,
            name,
            imgURL
        }
    })

}
const TOGGLE_USER = (id) => {
    return ({
        
        type: 'TOGGLE_USER',
        payload: {
            id
        }
    })
}
// const DELETE_USER = (id) => {
//     type: 'DELETE_USER'
//     id
// }

export { ADD_USER, TOGGLE_USER, UPDATE_USER }