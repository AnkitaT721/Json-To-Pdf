import axios from "axios";
import {
  ALL_STUDENT_FAIL,
  ALL_STUDENT_REQUEST,
  ALL_STUDENT_SUCCESS,
  CLEAR_ERRORS,
  CREATE_STUDENT_FAIL,
  CREATE_STUDENT_REQUEST,
  CREATE_STUDENT_SUCCESS,
  GET_STUDENT_FAIL,
  GET_STUDENT_REQUEST,
  GET_STUDENT_SUCCESS,
  SEND_EMAIL_FAIL,
  SEND_EMAIL_REQUEST,
  SEND_EMAIL_SUCCESS,
  UPDATE_STUDENT_FAIL,
  UPDATE_STUDENT_REQUEST,
  UPDATE_STUDENT_SUCCESS,
  UPLOAD_FILES_FAIL,
  UPLOAD_FILES_REQUEST,
  UPLOAD_FILES_SUCCESS,
} from "./constants";

//create student
export const createStudent = (studentData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_STUDENT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(`/api/v1/`, studentData, config);

    dispatch({
      type: CREATE_STUDENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_STUDENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

//get single student
export const getSingleStudent = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_STUDENT_REQUEST });

    const { data } = await axios.get(`/api/v1/student/${id}`);

    dispatch({
      type: GET_STUDENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_STUDENT_FAIL,
      payload: error.response.data.message,
    });
  }
};


//get all students
export const getAllStudents = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_STUDENT_REQUEST });

    const { data } = await axios.get(`/api/v1/students`);

    dispatch({
      type: ALL_STUDENT_SUCCESS,
      payload: data.students,
    });
  } catch (error) {
    dispatch({
      type: ALL_STUDENT_FAIL,
      payload: error.response.data.message,
    });
  }
};


//update product
export const updateStudent = (id, studentData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_STUDENT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/update/${id}`,
      studentData,
      config
    );

    dispatch({
      type: UPDATE_STUDENT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_STUDENT_FAIL,
      payload: error.response.data.message,
    });
  }
};


//upload pdfs
export const uploadPdfs = (pdfFiles) => async (dispatch) => {
  try {
    dispatch({ type: UPLOAD_FILES_REQUEST });

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    const { data } = await axios.post(`/api/v1/mergepdfs`, pdfFiles, config);

    dispatch({
      type: UPLOAD_FILES_SUCCESS,
      payload: data.files
    });
  } catch (error) {
    dispatch({
      type: UPLOAD_FILES_FAIL,
      payload: error.response.data.message,
    });
  }
};


//get mail address
// export const getMailAddress = (mailAddress) => async (dispatch) => {
//   try {
//     dispatch({ type: SEND_EMAIL_REQUEST });

//     const config = {
//       headers: { "Content-Type": "application/json" },
//     };

//     const { data } = await axios.post(`/api/v1/sendmail`, mailAddress, config);

//     dispatch({
//       type: SEND_EMAIL_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: SEND_EMAIL_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };


export const getMailAddress = (mail) => async (dispatch) => {
  try {
    dispatch({ type: SEND_EMAIL_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(`/api/v1/sendmail`, mail, config);
    dispatch({ type: SEND_EMAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SEND_EMAIL_FAIL,
      payload: error.response.data.message,
    });
  }
};

//clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
