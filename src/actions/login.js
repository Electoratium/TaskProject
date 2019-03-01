import history from '../history/history';


export const AUTH = 'AUTH';
export const LOGOUT = 'LOGOUT';

const baseUserData = {
  name: 'admin',
  password: '123',
};

export const authStatuses = {
  success: 'successAuth',
  invalidData: 'invalidData',
  emptyContent: 'emptyContent',
  logout: 'logout',
};

export const auth = (loginData) => {
  if (!loginData.name || !loginData.password) {
    return {
      type: AUTH,
      payload: {
        status: authStatuses.emptyContent,
      },
    };
  }

  if (loginData.name === baseUserData.name && loginData.password === baseUserData.password) {
    history.push('/');

    return {
      type: AUTH,
      payload: {
        status: authStatuses.success,
        name: baseUserData.name,
      },
    };
  }
  return {
    type: AUTH,
    payload: {
      status: authStatuses.invalidData,
    },
  };
};

export const logout = () => {
  history.push('/');

  return {
    type: LOGOUT,
  };
};
