// userAction.ts
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './userType';
import { loginServices } from '@/services';
import { IUser } from '@/interfaces';

export const loginUser = (userData: IUser) => {
    return async (dispatch: any) => {
        try {
            const { token, user } = await loginServices(userData);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { token, user },
            });
        } catch (error: any) {
            dispatch({
                type: LOGIN_FAILURE,
                payload: error.message,
            });
        }
    };
};

