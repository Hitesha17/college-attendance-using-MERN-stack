import {
  SET_ERRORS,
  UPDATE_PASSWORD,
  TEST_RESULT,
  STUDENT_LOGIN,
  ATTENDANCE,
  UPDATE_STUDENT,
  GET_SUBJECT,
} from "../actionTypes";
import * as api from "../api";

export const studentSignIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.studentSignIn(formData);
    dispatch({ type: STUDENT_LOGIN, data });
    if (data.result.passwordUpdated) {
      navigate("/student/home");
    } else {
      navigate("/student/password");
    }
  } catch (error) {
    console.error("Error in studentSignIn:", error);
    dispatch({ type: SET_ERRORS, payload: error.response ? error.response.data : "An error occurred" });
  }
};

export const studentUpdatePassword = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.studentUpdatePassword(formData);
    dispatch({ type: UPDATE_PASSWORD, payload: true });
    alert("Password Updated");
    navigate("/student/home");
  } catch (error) {
    console.error("Error in studentUpdatePassword:", error);
    dispatch({ type: SET_ERRORS, payload: error.response ? error.response.data : "An error occurred" });
  }
};

export const updateStudent = (formData) => async (dispatch) => {
  try {
    const { data } = await api.updateStudent(formData);
    dispatch({ type: UPDATE_STUDENT, payload: true });
  } catch (error) {
    console.error("Error in updateStudent:", error);
    dispatch({ type: SET_ERRORS, payload: error.response ? error.response.data : "An error occurred" });
  }
};

export const getSubject = (department, year) => async (dispatch) => {
  try {
    const formData = { department, year };
    const { data } = await api.getSubject(formData);
    dispatch({ type: GET_SUBJECT, payload: data });
  } catch (error) {
    console.error("Error in getSubject:", error);
    dispatch({ type: SET_ERRORS, payload: error.response ? error.response.data : "An error occurred" });
  }
};

export const getTestResult = (department, year, section) => async (dispatch) => {
  try {
    const formData = { department, year, section };
    const { data } = await api.getTestResult(formData);
    dispatch({ type: TEST_RESULT, payload: data });
  } catch (error) {
    console.error("Error in getTestResult:", error);
    dispatch({ type: SET_ERRORS, payload: error.response ? error.response.data : "An error occurred" });
  }
};

export const getAttendance = (department, year, section) => async (dispatch) => {
  try {
    const formData = { department, year, section };
    const { data } = await api.getAttendance(formData);
    dispatch({ type: ATTENDANCE, payload: data });
  } catch (error) {
    console.error("Error in getAttendance:", error);
    dispatch({ type: SET_ERRORS, payload: error.response ? error.response.data : "An error occurred" });
  }
};
