import * as actionTypes from './actionTypes';
import courseApi from '../mock-api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';


export function createCourse(course) {
  return {
    type: actionTypes.CREATE_COURSE,
    course: course
  };
}

export function loadCoursesSuccess(courses) {
  return {
    type: actionTypes.LOAD_COURSES_SUCCESS,
    courses: courses
  };
}

export function updatedCoursesSuccess(course) {
  return {
    type: actionTypes.UPDATE_COURSE_SUCCESS,
    course: course
  };
}

export function createdCourseSuccess(course) {
  return {
    type: actionTypes.CREATE_COURSE_SUCCESS,
    course: course
  };
}

export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses()
                    .then(courses => {
                      dispatch(loadCoursesSuccess(courses));
                    }).catch(error => {
                      throw(error);
                    });
  };
}

export function saveCourse(course) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updatedCoursesSuccess(savedCourse)) :
        dispatch(createdCourseSuccess(savedCourse));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
