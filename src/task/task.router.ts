import express from "express";
import type { Request,Response } from "express";
import * as TaskService from "./task.service";
import {body,validationResult} from "express-validator";

export const taskRouter = express.Router();


taskRouter.get("/",async(req:Request, res:Response)=>{
    try{
        const task = await TaskService.getAllTasks();
        return res.status(200).send(task);
    }catch(err : any){
        return res.status(500).json(err.message)
    }
})

