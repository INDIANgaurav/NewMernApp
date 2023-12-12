const {z} = require("zod")
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

  module.exports = loginSchema ;