import { createRequestTypes, buildObject } from './actionHelper';

export const SIGNUP = createRequestTypes('STANDARD.AUTH.SIGNUP');
export const signup = buildObject(SIGNUP);

export const CHANGE_PASSWORD = createRequestTypes('STANDARD.AUTH.CHANGE_PASSWORD');
export const changePassword = buildObject(CHANGE_PASSWORD);

export const LOGIN = createRequestTypes('STANDARD.AUTH.LOGIN');
export const login = buildObject(LOGIN);

export const SAVE_TOKEN = 'STANDARD.AUTH.SAVE_TOKEN';
export const saveToken = payload => ({ type: SAVE_TOKEN, payload });

export const REMOVE_TOKEN = 'STANDARD.AUTH.REMOVE_TOKEN';
export const removeToken = () => ({ type: REMOVE_TOKEN });

export const SAVE_USER = 'STANDARD.AUTH.SAVE_USER';
export const saveUser = payload => ({ type: SAVE_USER, payload });

export const LOGOUT = 'STANDARD.AUTH.LOGOUT';
export const logout = () => ({ type: LOGOUT });

export const PASSWORD_RECOVERY = createRequestTypes('STANDARD.AUTH.PASSWORD_RECOVERY');
export const passwordRecovery = buildObject(PASSWORD_RECOVERY);

export const CHANGE_PASSWORD_RECOVERY = createRequestTypes('STANDARD.AUTH.CHANGE_PASSWORD_RECOVERY');
export const changePasswordRecovery = buildObject(CHANGE_PASSWORD_RECOVERY);

export const AUTH_ERRORS_CLEAR = 'STANDARD.AUTH.ERRORS_CLEAR';
export const authErrorsClear = () => ({ type: AUTH_ERRORS_CLEAR });
