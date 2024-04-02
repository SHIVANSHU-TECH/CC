import { z } from "zod"

export const authSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  pic: z.string().url(),
})

export const contactSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  message: z.string(),
})
