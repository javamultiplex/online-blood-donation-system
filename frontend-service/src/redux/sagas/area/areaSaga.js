import { call, put } from 'redux-saga/effects';
import {
    addArea,
    deleteArea,
    getAllAreas
} from '../../../service/areaService';
import { addAreaSuccess } from '../../actions/area/addArea';
import {
    getAllAreasError,
    getAllAreasSuccess,
    deleteAreaSuccess
} from '../../actions/area/getAndDeleteArea';

export function* addAreaRequest(request) {
    try {
        const { data } = yield call(addArea, request.countryId, request.stateId, request.cityId, request.area);
        yield put(addAreaSuccess(data));
    } catch (error) {
        const errorResponse = error.response;
        let message = error.message;
        if (errorResponse) {
            message = errorResponse.data.userMessages;
        }
        console.error("Error comes while adding area : " + message);
    }
}

export function* deleteAreaRequest(request) {
    try {
        const { data } = yield call(deleteArea, request.countryId, request.stateId, request.cityId, request.areaId);
        yield put(deleteAreaSuccess(data.id));
    } catch (error) {
        const errorResponse = error.response;
        let message = error.message;
        if (errorResponse) {
            message = errorResponse.data.userMessages;
        }
        console.error("Error comes while deleting area : " + message);
    }
}

export function* getAllAreasRequest(request) {
    try {
        const { data } = yield call(getAllAreas, request.countryId, request.stateId, request.cityId);
        yield put(getAllAreasSuccess(data.areas));
    } catch (error) {
        const errorResponse = error.response;
        let message = error.message;
        if (errorResponse) {
            message = errorResponse.data.userMessages;
        }
        console.error("Error comes while getting all the areas : " + message);
        yield put(getAllAreasError(error))
    }
}