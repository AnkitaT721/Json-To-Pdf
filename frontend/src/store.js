import { createStore } from "redux";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { allStudentsReducer, editStudentReducer, getEmailReducer, getStudentReducer, newStudentReducer, uploadFilesReducer } from "./reducers";

const reducer = combineReducers({
  newStudent: newStudentReducer,
  getStudent: getStudentReducer,
  allStudents: allStudentsReducer,
  editStudent: editStudentReducer,
  uploadFiles: uploadFilesReducer,
  getEmail: getEmailReducer
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;