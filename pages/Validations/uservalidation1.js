import * as Yup from "yup";

export const uservalidation1 = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
});

export const uservalidation2 = Yup.object({
  //name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string().required().oneOf([Yup.ref("password"), null], "Password must match"),
});

export const uservalidation3 = Yup.object({
  num1: Yup.string().min(1).max(1),
  num2: Yup.string().min(1).max(1),
  num3: Yup.string().min(1).max(1),
  num4: Yup.string().min(1).max(1),
  num5: Yup.string().min(1).max(1),
  num6: Yup.string().min(1).max(1),
});


export const uservalidation4 = Yup.object({
  name: Yup.string().min(3).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  message: Yup.string().min(10).max(150).required("Enter message"),
});