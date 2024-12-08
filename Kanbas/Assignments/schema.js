import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
 {
   title: String,
   description: String,
   course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
   points: Number,
   credits: Number,
   start_date: String, 
   due_date: String,
 },
 { collection: "assignments" }
);
export default assignmentSchema;

