
import {
    EMPLOYEE_UIPDATE  
} from './type';

export const employeeUpdate = ({ props, value }) => {
  return {
        type: EMPLOYEE_UIPDATE,
        payload: { props, value }
  };
};
