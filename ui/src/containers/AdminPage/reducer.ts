import { type Actions } from './actions';
import {
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_ERROR,
  UPDATE_USER_LIST,
  CREATE_USER_REQUEST,
  CREATE_USER_ERROR,
  UPDATE_USER_REQUEST,
  UPDATE_USER_ERROR,
  DELETE_USER_REQUEST,
  DELETE_USER_ERROR,
  UPDATE_STATUS_REQUEST,
  UPDATE_STATUS_ERROR,
  TOGGLE_BANNER
} from './constants';

export const initialState = {
  loading: false as boolean,
  error: null as any,
  userList: [] as any[],
  showBanner: false as boolean,
  bannerStatus: '' as string,
  bannerMessage: '' as string
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
    case UPDATE_USER_LIST: {
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
    case CREATE_USER_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null
      }
    }
    case CREATE_USER_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    case UPDATE_USER_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null
      }
    }
    case UPDATE_USER_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    case DELETE_USER_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null
      }
    }
    case DELETE_USER_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    case UPDATE_STATUS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null
      }
    }
    case UPDATE_STATUS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    case TOGGLE_BANNER: {
      return {
        ...state,
        showBanner: action.state,
        bannerStatus: action.status,
        bannerMessage: action.message,
        loading: false
      }
    }
    default: {
      return state
    }
  }
};
