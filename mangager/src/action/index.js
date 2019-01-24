import { EMAIL_CHANGED, PASSWORD_CHANGE } from './type';

export const emailChanged = (text) => {
   return { 
       type: EMAIL_CHANGED,
       payload: text
   };
};

export const passwordChanged = (text) => {
   return {
        type: PASSWORD_CHANGE,
        payload: text
   };
};