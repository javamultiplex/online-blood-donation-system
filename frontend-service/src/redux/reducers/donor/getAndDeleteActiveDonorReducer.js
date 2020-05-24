import * as types from '../../actions/donor';

const initialState = {
    bloodDonors: []
}

const getAndDeleteActiveDonorReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.BLOOD_DONOR_ACTIVE_FIND_ALL_SUCCESS:
            return {
                ...state,
                bloodDonors: action.payload
            }
        default:
            return state;
    }
}

export default getAndDeleteActiveDonorReducer;