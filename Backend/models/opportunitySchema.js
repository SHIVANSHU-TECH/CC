import mongoose from "mongoose"
import { Status } from "../helpers/status.js"

const jobSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Use "User" here with an uppercase "U"
    },
    title: {
      type: String,
      required: true,
    },
    companyName: {
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
    link: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(Status),
      default: Status.PENDING,
    },
  },
  {
    timestamps: true,
  }
)

const Jobs = mongoose.model("Jobs", jobSchema)

module.exports = Jobs
