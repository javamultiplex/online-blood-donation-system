import * as types from '../../actions/recipient';

const initialState = {
    bloodRecipients: []
}

const getRecipientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.BLOOD_RECIPIENT_FIND_ALL_SUCCESS:
            return {
                ...state,
                bloodRecipients: action.payload
            }
        default:
            return state;
    }
}

export default getRecipientsReducer;