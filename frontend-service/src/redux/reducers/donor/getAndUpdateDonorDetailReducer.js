import * as types from '../../actions/donor';

const initialState = {
    bloodDonor: '',
    loading: false
}

const getDonorDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.BLOOD_DONOR_DETAIL_TRIGGER:
            return{
                ...state,
                loading: true,
                bloodDonor: ''
            }
        case types.BLOOD_DONOR_DETAIL_SUCCESS:
            return {
                ...state,
                bloodDonor: action.payload,
                loading: false
            }
        case types.BLOOD_DONOR_UPDATE_STATUS_SUCCESS:
            return{
                ...state,
                bloodDonor: action.payload
            }
        default:
            return state
    }

}

export default getDonorDetailReducer;