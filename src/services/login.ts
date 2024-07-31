"use server";

import axios from "axios";
import { cookies } from "next/headers";

export async function login(username: string, password: string) {
  try {
    const response = await axios.post("https://fakestoreapi.com/auth/login", {
      username: username,
      password: password,
    });

    const token = response.data.token;
    if (token) {
      cookies().set("token", token);
      console.log("Token saved in cookie:", token);
    } else {
      throw new Error("Token not found in response");
    }
  } catch (error) {
    console.error("There was an error!", error);
    throw error;
  }
}
