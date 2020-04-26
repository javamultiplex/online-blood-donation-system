import * as types from '../../actions/area/';
const initialState = {
    areas: []
}

const getAndDeleteAreaReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_AREAS_SUCCESS:
            return {
                ...state,
                areas: action.payload
            }
        case types.GET_ALL_AREAS_ERROR:
            return {
                areas: []
            }
        case types.DELETE_AREA_SUCCESS:
            return {
                ...state,
                areas: state.areas.filter(area => area.id !== action.payload)
            }
        default:
            return state;
    }
}
export default getAndDeleteAreaReducer;