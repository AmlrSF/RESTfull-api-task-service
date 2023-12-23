import { db } from "../utils/db.server";


type Task = {
    id:number
    task: string
    details: string
    status: boolean
};


//get all tasks
export const getAllTasks = async (): Promise<Task[]> => {
    return db.task.findMany({})
}


//crate a new task
export const createTask = async (Task: Omit<Task, "id">): Promise<Task> => {
    const { task, details, status } = Task;
    return db.task.create({
        data: {
            task,
            details,
            status
        },
        select: {
            id: true,
            task: true,
            details: true,
            status: true
        }
    })
}


//update a task by an id
export const updateTask = async(
    Task: Omit<Task, "id">,
    id:number
):Promise<Task>=>{
    const { task, details, status } = Task;
    return db.task.update({
        where:{
            id
        },
        data:{
            task,
            details,
            status
        },
        select:{
            id: true,
            task: true,
            details: true,
            status: true
        }
    })
}


//get a single task base on id
export const getTaskById = async (id: number): 
Promise<Task | null> => {
    return db.task.findUnique({
        where: {
            id: id
        },
        select: {
            id:true,
            task: true,
            details: true,
            status: true
        }
    })
}

//delete task a task by id
export const deleteTask = async (id:number):Promise<void>=>{
    await db.task.delete({
        where:{
            id
        }
    })
}

//delete all task
export const deleteAllTasks = async():Promise<void>=>{
    db.task.deleteMany({});
}


// pick & tranformations
// type User = {
//     id: number
//     firstName: string
//     lastName: string
//     hashedpass: string
//     createdAt: string
// }

// type Prospect = {
//     id: number
//     firstName: string
//     lastName: string
//     referrer: string
// }

// type renderUser = Pick<User, 'firstName' | 'lastName'>
// type renderProspect = Omit<User, 'id'>;

