import bcrypt from "bcryptjs"
import Users from "../models/userModel.js"
import { asyncHandler } from "./asyncHandler.js"
import { ApiError } from "./ApiError"

export const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}

export const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword)
}

export const getUserById = asyncHandler(async (id) => {
  const user = await Users.findbyId(id)
  if (user) {
    return user
  } else {
    throw new ApiError(401, "User not found")
  }
})

export const getUserByEmail = asyncHandler(async (email) => {
  const user = await Users.find({ email })
  if (user) {
    return user
  } else {
    throw new ApiError(401, "User not found")
  }
})
