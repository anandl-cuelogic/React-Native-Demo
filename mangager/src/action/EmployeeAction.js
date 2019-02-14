
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_UIPDATE,
    EMPLOYE_CREATE,
    EMPLOYEE_FETCH_SUCCESS,
    EMPLOYE_SAVE_SUCCESS
} from './type';


export const employeeUpdate = ({ prop, value }) => {
  return {
        type: EMPLOYEE_UIPDATE,
        payload: { prop, value }
  };
};
export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
   firebase.database().ref(`/users/${currentUser.uid}/employees`)
   .push({ name, phone, shift })
   .then(() => {
     dispatch({ type: EMPLOYE_CREATE });
     Actions.pop();
    });
 };
};
export const employeeFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .on('value', snapshot => {
        dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val() });
    });
};
};
export const employeeSave = ({ name, phone, shift, uid }) => {
   const { currentUser } = firebase.auth();
   console.log(uid);
    return (dispatch) => {
     firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
     .set({ name, phone, shift })
     .then(() => {
      dispatch({ type: EMPLOYE_SAVE_SUCCESS });
      Actions.EmployeeList({ type: 'reset' });
     });
   };
};
