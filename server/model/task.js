import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enums: ["default", "personal", "shopping", "work", "work"],
      default: "default",
    },
    status: {
      type: String,
      enums: ["pending", "completed"],
      default: "pending",
    },
    name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema);
