import express from "express";

import type { Request, Response } from "express";

import * as TaskService from "./task.service";

import { body, validationResult } from "express-validator";

export const taskRouter = express.Router();


taskRouter.get("/", async (req: Request, res: Response) => {
    try {
        const task = await TaskService.getAllTasks();
        return res.status(200).send(task);
    } catch (err: any) {
        return res.status(500).json(err.message)
    }
})

taskRouter.delete("/", async (req: Request, res: Response) => {
    try {
        await TaskService.deleteAllTasks();
        return res.status(200).send({message:"deleted successfully"});
    } catch (err: any) {
        return res.status(500).json(err.message)
    }
})



taskRouter.get("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    try {
        const task = await TaskService.getTaskById(id);
        return res.status(200).send(task);
    } catch (err: any) {
        return res.status(500).json(err.message)
    }
})

taskRouter.delete("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    try {
        await TaskService.deleteTask(id);
        return res.status(200).send({message:"deleted successfully"});
    } catch (err: any) {
        return res.status(500).json(err.message)
    }
})

taskRouter.put("/:id",

    body("task").isString(),
    body("details").isString(),
    body("status").isBoolean()

,async (req: Request, res: Response) => {
    
    const errors = validationResult(req);
    if(!errors.isEmpty) return res.status(400).json({errors:errors.array()});

   
    try {
        const id: number = parseInt(req.params.id, 10);
        const updatedTask = req.body;

        const updatetask = await TaskService.updateTask(updatedTask, id);
        return res.status(200).send(updatetask);
    } catch (err: any) {
        return res.status(500).json(err.message)
    }
})


taskRouter.post("/new",

    body("task").isString(),
    body("details").isString(),
    body("status").isBoolean()

, async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

    try {
        const task = req.body;
        const newTask = await TaskService.createTask(task);
        return res.status(201).json(newTask)
    } catch (error: any) {
        return res.status(500).json(error.message)
    }

})





