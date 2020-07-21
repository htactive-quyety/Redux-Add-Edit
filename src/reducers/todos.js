// const initialTodoState = {
//     nextId: 2,
//     data: {
//         1: {
//             name: '',
//             imgURL: '',
//             complete: false
//         }
//     }
// }

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
            //console.log(action, '?action');
            return [
                ...state,
                {
                    name: action.payload.name,
                    imgURL: action.payload.imgURL,
                    complete: false
                }
            ]
        case 'UPDATE_USER':
            return [
                ...state, {
                    state: state.map(
                        (items, index) => index === action.id ? { ...items, name: action.name, imgURL: action.imgURL } : items
                    )
                }
            ]
            
        case 'TOGGLE_USER':

            return state.map(todo =>
                todo.id === action.id ? { ...todo, complete: !todo.complete } : todo)


        default:
            return state;
    }
}

export default todos;