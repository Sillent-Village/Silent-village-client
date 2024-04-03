import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userCredentials) => {
    const res = "login";
    return res;
  }
);
