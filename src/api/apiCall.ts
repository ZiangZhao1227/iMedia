import axios from "axios";
import { BASE_URL } from "./baseUrl";

export const loginCall = async (userCredential: any, dispatch: (arg0: { type: string; payload?: any; }) => void) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(`${BASE_URL}auth/login`, userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data.userInfo });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error });
  }
};