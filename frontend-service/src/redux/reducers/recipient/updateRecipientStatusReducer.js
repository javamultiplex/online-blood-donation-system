import * as types from '../../actions/recipient';

const initialState = {
    bloodRecipient: ''
}

const updateRecipientStatusReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.BLOOD_RECIPIENT_UPDATE_STATUS_SUCCESS:
            return {
                ...state,
                bloodRecipient: action.payload
            }
        default:
            return state
    }
}

export default updateRecipientStatusReducer;