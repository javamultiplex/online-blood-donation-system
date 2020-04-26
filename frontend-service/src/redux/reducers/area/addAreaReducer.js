import * as types from '../../actions/area/';
const initialState = {
    area: ''
}

const addAreaReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_AREA_SUCCESS:
            return {
                ...state,
                area: action.payload
            }
        default:
            return state;
    }
}

export default addAreaReducer;