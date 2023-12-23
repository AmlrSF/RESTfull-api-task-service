import { db } from "../src/utils/db.server";

type Task = {
    task: string
    details: string
    status: boolean
};



async function seed() {
    await Promise.all(
        getTasks().map((item) => {
            return db.task.create({
                data: {
                    task: item.task,
                    details: item.details,
                    status: item.status
                },
            });
        })
    );
}

seed();


function getTasks(): Array<Task> {
    return [
        {
            task: "String",
            details: "String",
            status: false
        },
        {
            task: "String 1",
            details: "String 2",
            status: false
        },
        {
            task: "String 3",
            details: "String 3",
            status: false
        },
    ];
}