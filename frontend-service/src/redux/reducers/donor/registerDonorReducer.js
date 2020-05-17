import * as types from '../../actions/donor';

const intialState = {
    bloodDonor: ''
}

const registerDonorReducer = (state = intialState, action) => {
    switch (action.type) {
        case types.BLOOD_DONOR_REGISTER_SUCCESS:
            return {
                ...state,
                bloodDonor: action.payload
            }
        default:
            return state;
    }
}

export default registerDonorReducer;