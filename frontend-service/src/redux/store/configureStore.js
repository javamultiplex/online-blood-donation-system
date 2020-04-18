import { rootSaga } from '../sagas';
import { rootReducer } from '../reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = applyMiddleware(sagaMiddleware);
    const store = createStore(rootReducer,
        compose(middlewares,/* preloadedState, */
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
    sagaMiddleware.run(rootSaga);
    return store;
}