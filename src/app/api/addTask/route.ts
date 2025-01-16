import { NextApiRequest, NextApiResponse } from "next";
import dbconnect from "@/lib/dbConnect";
import { TaskModel } from "@/model/Task";

export async function POST(request: NextApiRequest, response: NextApiResponse) {
    const {title, status } = request.body;
    try {
        await dbconnect();
        // const task = await TaskModel.create({
        //     title: taskTitle,
        //     description: taskDescription,
        //     status: taskStatus
        // });
        const task = new TaskModel({
            title: title,
            status: status,
            createdAt: Date.now()
        });
        await task.save();
        return (
            response.json({
                message: "Task created successfully",
                createdTask: task,
                createdAt: Date.now(),
            })
        );
    } catch (error) {
        console.log("Error adding the task", error);
        return (
            response.json({
                "message": "Error adding the task",
                "error": error,
                "success": false
            })
        );
    }
};