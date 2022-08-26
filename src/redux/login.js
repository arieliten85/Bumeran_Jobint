import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const sendUserRegister = createAsyncThunk(
  "REGISTER",

  ({ name, lastName, password, email }) => {
    axios
      .post("http://localhost:8000/api/recruiter/register", {
        name: name.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
      })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }
);
export const postLoginRequest = createAsyncThunk(
  "LOGIN",
  async ({ email, password }) => {
    try {
      const data = await axios.post(
        "http://localhost:8000/api/recruiter/login",
        {
          email: email.value,
          password: password.value,
        }
      );
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const postLogoutRequest = createAsyncThunk("LOGOUT", async () => {
  try {
    const data = await axios.post("http://localhost:8000/api/recruiter/logout");
    return data;
  } catch (error) {
    console.log(error);
  }
});

const loginReducer = createReducer(
  {},
  {
    [sendUserRegister.fulfilled]: (state, action) => action.payload,
    [postLoginRequest.fulfilled]: (state, action) => action.payload,
    [postLogoutRequest.fulfilled]: (state, action) => action.payload,
  }
);

export default loginReducer;
