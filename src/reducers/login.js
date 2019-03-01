import { AUTH, LOGOUT, authStatuses } from '../actions/login';

const initialState = {
  isLogged: false,
  name: null,
  status: authStatuses.default,
};

export default function tasks(state = initialState, action) {
  switch (action.type) {
    case AUTH:
      if (action.payload.status !== authStatuses.success) {
        return {
          ...state,
          isLogged: false,
          status: action.payload.status,
        };
      }

      return {
        ...state,
        name: action.payload.name,
        isLogged: true,
        status: authStatuses.success,
      };

    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        name: null,
        status: authStatuses.logout,
      };
    default:
      return { ...state };
  }
}
