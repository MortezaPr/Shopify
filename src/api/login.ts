"use server";

import { requestProcessor } from "@/utils/Network";
import { cookies } from "next/headers";

export async function login(username: string, password: string) {
  try {
    const data = await requestProcessor({
      url: "https://fakestoreapi.com/auth/login",
      method: "POST",
      data: { username, password },
    });

    const token = data.token;
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
