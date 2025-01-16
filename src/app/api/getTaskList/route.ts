import { NextApiRequest } from "next";
import dbconnect from "@/lib/dbConnect";
import { TaskModel } from "@/model/Task";

export async function GET(request: NextApiRequest) {
    try {
        await dbconnect();
        const tasks = await TaskModel.find();
        return Response.json({
            tasks,
            "success": true
        })
    } catch (error) {
        return Response.json({
            "message": "Failed to connect to the database",
            error,
            "success": false
        });
    }
};