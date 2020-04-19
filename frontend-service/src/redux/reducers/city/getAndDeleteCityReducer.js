import * as types from '../../actions/city';

const initialState = {
    cities: []
}

const getAndDeleteCityReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_CITIES_SUCCESS:
            return {
                ...state,
                cities: action.payload
            }
        case types.GET_ALL_CITIES_ERROR:
            return {
                cities: []
            }
        case types.DELETE_CITY_SUCCESS:
            return {
                ...state,
                cities: state.cities.filter(city => city.id !== action.payload)
            }
        default:
            return state;
    }
}

export default getAndDeleteCityReducer;