// userReducer.ts
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './userType';
import { initialState } from './userState'

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
            };
        case LOGIN_FAILURE:
            // Manejar el estado en caso de fallo en el login
            return state;
        default:
            return state;
    }
};

export default userReducer;
