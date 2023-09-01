import {
  ALL_STUDENT_FAIL,
  ALL_STUDENT_REQUEST,
  ALL_STUDENT_SUCCESS,
  CLEAR_ERRORS,
  CREATE_STUDENT_FAIL,
  CREATE_STUDENT_REQUEST,
  CREATE_STUDENT_RESET,
  CREATE_STUDENT_SUCCESS,
  GET_STUDENT_FAIL,
  GET_STUDENT_REQUEST,
  GET_STUDENT_SUCCESS,
  UPDATE_STUDENT_FAIL,
  UPDATE_STUDENT_REQUEST,
  UPDATE_STUDENT_RESET,
  UPDATE_STUDENT_SUCCESS,
  UPLOAD_FILES_FAIL,
  UPLOAD_FILES_REQUEST,
  UPLOAD_FILES_SUCCESS,
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

export const getStudentReducer = (state = { student: {} }, action) => {
  switch (action.type) {
    case GET_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_STUDENT_SUCCESS:
      return {
        loading: false,
        student: action.payload.student,
      };
    case GET_STUDENT_FAIL:
      return {
        loading: false,
        error: action.payload,
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

export const allStudentsReducer = (state = { students: [] }, action) => {
  switch (action.type) {
    case ALL_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_STUDENT_SUCCESS:
      return {
        loading: false,
        students: action.payload,
      };
    case ALL_STUDENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
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

export const editStudentReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case UPDATE_STUDENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case UPDATE_STUDENT_RESET:
      return {
        ...state,
        isUpdated: false,
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

export const uploadFilesReducer = (state = { pdfs: [] }, action) => {
  switch (action.type) {
    case UPLOAD_FILES_REQUEST:
      return {
        loading: true,
      };

    case UPLOAD_FILES_SUCCESS:
      return {
        ...state,
        loading: false,
        success:true,
        pdfs: action.payload
      };

    case UPLOAD_FILES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
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
