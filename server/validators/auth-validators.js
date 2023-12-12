const { z } = require("zod");

// creating a object schema

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Please enter atleast 3 characters" })
    .max(255, {
      message: "Name must not be more than 255 characters",
    }),
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({message: "invalid email address"})
    .min(3, { message: "Please enter atleast 3 characters" })
    .max(255, {
      message: "Name must not be more than 255 characters",
    }),
  phone: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(10, { message: "phone must be at least of 10 characters" })
    .max(13, {
      message: "phone must not be more than 13 characters",
    }),
  password: z
    .string({ required_error: "password is required" })
    .min(7, { message: "password must be atleast of 6 characters" })
    .max(1024, {
      message: "password can't  be more than 1024 characters",
    }),
});

const loginSchema = z.object({
  email: z
  .string({ required_error: "email is required" })
  .trim()
  .email({message: "invalid email address"})
  .min(3, { message: "Please enter atleast 3 characters" })
  .max(255, {
    message: "Name must not be more than 255 characters",
  }),
  password: z
    .string({ required_error: "password is required" })
    .min(7, { message: "password must be atleast of 6 characters" })
    .max(1024, {
      message: "password can't  be more than 1024 characters",
    }),
})


module.exports = signupSchema  ;