
import {
    EMPLOYEE_UIPDATE  
} from './type';

export const employeeUpdate = ({ prop, value }) => {
  return {
        type: EMPLOYEE_UIPDATE,
        payload: { prop, value }
  };
};
