import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './rootReducer';
import rootSaga from './rootSaga';

export default () => {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // For Chrome Redux Dev Tools
  /* eslint-enable */

  /** Saga Middleware */
  const sagaMiddleware = createSagaMiddleware()

  const initialState = {}
  const middleware = [sagaMiddleware]

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  )

  sagaMiddleware.run(rootSaga)

  return store
};
