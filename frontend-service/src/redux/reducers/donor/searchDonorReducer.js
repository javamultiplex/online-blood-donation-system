import * as types from '../../actions/donor'

const initialState = {
    bloodDonor: []
}

const searchDonorReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.BLOOD_DONOR_SEARCH_SUCCESS:
            return {
                ...state,
                bloodDonor: action.payload
            }
        default:
            return state;
    }
}

export default searchDonorReducer;