import * as types from '../../actions/recipient';

const intialState = {
    bloodRecipient: '',
    error: '',
    success: ''
}

const registerRecipientReducer = (state = intialState, action) => {
    switch (action.type) {
        case types.BLOOD_RECIPIENT_REGISTER_SUCCESS:
            return {
                ...state,
                bloodRecipient: action.payload,
                error: '',
                success: 'Thank you, your request is recieved, we will reach you shortly.'
            }
        case types.BLOOD_RECIPIENT_REGISTER_ERROR:
            return {
                ...state,
                error: action.payload,
                success: '',
                bloodRecipient: ''
            }
        default:
            return state;
    }
}

export default registerRecipientReducer;