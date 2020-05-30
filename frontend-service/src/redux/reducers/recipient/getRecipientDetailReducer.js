import * as types from '../../actions/recipient';

const initialState = {
    bloodRecipient: ''
}

const getRecipientDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.BLOOD_RECIPIENT_DETAIL_SUCCESS:
            return {
                ...state,
                bloodRecipient: action.payload
            }
        default:
            return state
    }

}

export default getRecipientDetailReducer;