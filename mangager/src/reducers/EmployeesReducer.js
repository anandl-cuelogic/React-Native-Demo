import {
    EMPLOYEE_FETCH_SUCCESS
} from '../action/type';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_FETCH_SUCCESS:
        console.log(action);
        return state;
        default:
        return state;
    }
};

