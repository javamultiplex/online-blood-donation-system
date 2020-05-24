import * as types from '../../actions/donor';

const intialState = {
    bloodDonor: '',
    error: '',
    success: ''
}

const registerDonorReducer = (state = intialState, action) => {
    switch (action.type) {
        case types.BLOOD_DONOR_REGISTER_SUCCESS:
            return {
                ...state,
                bloodDonor: action.payload,
                error: '',
                success: 'Thank you, your registration is successful.'
            }
        case types.BLOOD_DONOR_REGISTER_ERROR:
            return {
                ...state,
                error: action.payload,
                success: '',
                bloodDonor: ''
            }
        default:
            return state;
    }
}

export default registerDonorReducer;