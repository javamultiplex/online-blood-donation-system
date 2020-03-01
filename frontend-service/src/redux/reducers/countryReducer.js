import * as types from '../actions';

const initialState = {
    countries: []
}

const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_COUNTRY_SUCCESS:
            return {
                ...state,
                countries: state.countries.concat(action.payload)
            }

        case types.DELETE_COUNTRY_SUCCESS:
            return {
                ...state,
                countries: state.countries.filter(country => action.payload !== country.id)
            }
        default:
            return state;
    }
}

export default countryReducer;