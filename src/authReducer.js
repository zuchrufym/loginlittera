import { REGISTER_SUCCESS, 
    REGISTER_FAIL, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    LOAD_USER, 
    AUTH_ERROR
} from '../src/constant/constant'

const initialState={
    token: localStorage.getItem('token'), 
    isAllowedToLogIn:false, 
    error:{}
}

const authReducer = (state=initialState, action) => {
    const {type, payload}=action
    switch(type){

        default:
            return state;
    }

}

export default authReducer;