import { ERROR, LOADING, SUCCESS } from "./actionTyes";
import axios from "axios";
const url = "https://drab-pink-rhinoceros-cuff.cyclic.app/";

export const GetData = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    return axios.get(url).then((data) => {
      //   console.log(data.data);
      dispatch({ type: SUCCESS, payload: data.data.user });
    });
  } catch (error) {
    dispatch({ type: ERROR });
  }
};
export const SearchData = (data) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    return axios.get(`${url}/search?q=${data}`).then((data) => {
      //   console.log(data.data);
      console.log(data.data.users);
      dispatch({ type: SUCCESS, payload: data.data.users });
    });
  } catch (error) {
    dispatch({ type: ERROR });
  }
};

export const CreateContact = (obj) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    return axios.post(`${url}/contacts`, obj).then((data) => {
      console.log(data.data);
      GetData();
    });
  } catch (error) {
    dispatch({ type: ERROR });
  }
};
export const PatchContact = (id, obj) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    return axios.patch(`${url}/patch/${id}`, obj).then((data) => {
      console.log(data.data);
      GetData();
    });
  } catch (error) {
    dispatch({ type: ERROR });
  }
};

export const DeleteContact = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    return axios.delete(`${url}/delete/${id}`).then((data) => {
      console.log(data.data);
      GetData();
    });
  } catch (error) {
    dispatch({ type: ERROR });
  }
};
