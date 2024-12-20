import mongoose, { Schema, Document } from "mongoose";

export interface Task extends Document {
    title: string;
    description: string;
    addedAt: Date;
    status: boolean;
};

const TaskSchema: Schema<Task> = new Schema({
    title: { type: String, required: true },
    description: { type: String, default: "" },
    addedAt: { type: Date, default: Date.now },
    status: { type: Boolean, default: false }
})

export const TaskModel = (mongoose.models.Task as mongoose.Model<Task>) || (mongoose.model<Task>("Task", TaskSchema))