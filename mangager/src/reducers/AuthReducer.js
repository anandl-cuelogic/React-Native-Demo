import { EMAIL_CHANGED, PASSWORD_CHANGE } from '../action/type';

const INITIAL_STATE = { email: '', password: '' };
export default (state = INITIAL_STATE, action) => {
   switch (action.type) { 
       case EMAIL_CHANGED:
          return { ...state, email: action.payload };
       case PASSWORD_CHANGE:
           return { ...state, password: action.payload };   
        default:
           return state;
    }
};
