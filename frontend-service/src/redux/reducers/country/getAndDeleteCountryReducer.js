import * as types from '../../actions/country';

const initialState = {
    countries: []
}

const getAndDeleteCountryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_COUNTRIES_SUCCESS:
            return {
                ...state,
                countries: action.payload
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

export default getAndDeleteCountryReducer;