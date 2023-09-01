import axios from "axios";
import {
  CLEAR_ERRORS,
  CREATE_STUDENT_FAIL,
  CREATE_STUDENT_REQUEST,
  CREATE_STUDENT_SUCCESS,
  GET_STUDENT_FAIL,
  GET_STUDENT_REQUEST,
  GET_STUDENT_SUCCESS,
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

//clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
