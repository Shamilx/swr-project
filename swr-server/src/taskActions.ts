import { taskList } from "./TaskList";

export function updateTask(id: any,done: {done: boolean}) {
    taskList.map(task => {
        if(task.id == id) {
            task.done = done.done;
        }
    })
}