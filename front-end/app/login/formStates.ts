export const INITIAL = "initial";
export const SIGN_IN_WITH_PASSWORD = "signInWithPassword";
export const SIGN_UP = "signUp";
export const SIGN_IN_WITH_OTP = "signInWithOTP";

export type FormState =
  | typeof INITIAL
  | typeof SIGN_IN_WITH_PASSWORD
  | typeof SIGN_UP
  | typeof SIGN_IN_WITH_OTP;

export const MESSAGES = {
  [INITIAL]: "ورود | ثبت نام",
  [SIGN_IN_WITH_PASSWORD]: "رمز عبور را وارد کنید",
  [SIGN_UP]: "کد تایید را وارد کنید",
  [SIGN_IN_WITH_OTP]: "کد تایید را وارد کنید",
};
