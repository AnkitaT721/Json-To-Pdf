import {
    CLEAR_ERRORS,
    CREATE_STUDENT_FAIL,
    CREATE_STUDENT_REQUEST,
    CREATE_STUDENT_RESET,
    CREATE_STUDENT_SUCCESS,
  } from "./constants";
  
  export const newStudentReducer = (state = { student: {} }, action) => {
    switch (action.type) {
      case CREATE_STUDENT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case CREATE_STUDENT_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          student: action.payload.student,
        };
      case CREATE_STUDENT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case CREATE_STUDENT_RESET:
        return {
          ...state,
          success: false,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };