import { type Actions } from './actions';
import {
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_ERROR,
  GET_ALL_USERS_SUCCESS
} from './constants';

export const initialState = {
  loading: true as boolean,
  error: null as any,
  userList: [] as any[]
}

type ReduxState = typeof initialState;

export const adminPageReducer = (state: ReduxState = initialState, action: Actions): ReduxState => {
  switch (action.type) {
    case GET_ALL_USERS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null
      }
    }
    case GET_ALL_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        userList: action.payload
      }
    }
    case GET_ALL_USERS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    default: {
      return state
    }
  }
};
