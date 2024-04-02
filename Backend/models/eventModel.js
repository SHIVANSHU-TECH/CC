import mongoose from "mongoose"
import { Status } from "../helpers/status.js"

const eventSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Use "User" here with an uppercase "U"
  },
  title: {
    type: String,
    required: true,
  },
  deadlineDate: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: Object.values(Status),
    default: Status.PENDING,
  },
})

const Event = mongoose.model("Event", eventSchema)

module.exports = Event
