import * as types from '../../actions/city';

const initialState = {
    city: ''
}

const addCityReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_CITY_SUCCESS:
            return {
                ...state,
                city: action.payload
            }
        default:
            return state;
    }
}

export default addCityReducer;