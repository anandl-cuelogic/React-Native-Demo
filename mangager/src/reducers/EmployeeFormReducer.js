import {
    EMPLOYEE_UIPDATE,
    EMPLOYE_CREATE
} from '../action/type';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''

};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
       case EMPLOYEE_UIPDATE:
        return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYE_CREATE:
        return INITIAL_STATE;
      default:
        return state;
  }
};
