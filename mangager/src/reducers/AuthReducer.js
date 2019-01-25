import { EMAIL_CHANGED, 
   PASSWORD_CHANGE,
   LOGIN_USER_SUCCESS,
   LOGIN_USER_FAIL,
   LOGIN_USER } 
   from '../action/type';

const INITIAL_STATE = { email: '', 
password: '',
 user: null,
 error: '',
 loading: false
};
export default (state = INITIAL_STATE, action) => {
   console.log(action);
   switch (action.type) { 
       case EMAIL_CHANGED:
          return { ...state, email: action.payload };
       case PASSWORD_CHANGE:
           return { ...state, password: action.payload }; 
       case LOGIN_USER:
         return { ...state, loading: true, error: '' };    
       case LOGIN_USER_SUCCESS:
             return { ...state, 
               ...INITIAL_STATE,
               user: action.payload, 
             }; 
       case LOGIN_USER_FAIL:
             return { ...state, error: 'Authentification Fail.', loading: false };          
        default:
           return state;
    }
};
