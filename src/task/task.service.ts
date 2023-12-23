import {db} from "../utils/db.server";


type Task = {
    task: string
    details: string
    status: boolean
};


export const getAllTasks = async () :Promise<Task[]>=>{
    return db.task.findMany({})
}


export const getTaskById = async()=>{
    
}
