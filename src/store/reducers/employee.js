import { 
    ADD_EMPLOY,
    DELETE_EMPLOY,
    CREATE_DATA
} from '../actions/actionTypes'

const initialState = {
    employ: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EMPLOY:
            return {
                ...state,
                employ: state.employ.concat({
                    key: Math.random().toString(),
                    value: action.name,
                    image: {
                        uri: "https://freerangestock.com/sample/78746/halloween-cat-icon-means-trick-or-treat-and-autumn.jpg"
                    }
                })
            }
        
        case DELETE_EMPLOY:
            return{
                ...state,
                employ: state.employ.filter(item => {
                    return item.key !== action.itemKey
                })
            }

        case CREATE_DATA:
            return {
                ...state,
                employ: action.payload
            }
        default:
            return state
    }
}

export default reducer

