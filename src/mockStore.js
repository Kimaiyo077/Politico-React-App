import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './redux/reducers';

export const mockStore = initialState => {
    const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(
        createStore
    );
    return createStoreWithMiddleware(rootReducer, initialState)
  };