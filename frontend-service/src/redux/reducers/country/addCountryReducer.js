import * as types from '../../actions/country';

const initialState = {
    country: ''
}

const addCountryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_COUNTRY_SUCCESS:
            return {
                ...state,
                country: action.payload
            }
        default:
            return state;
    }
}

export default addCountryReducer;