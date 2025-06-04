import { useState } from "react";
import Task, { type TaskData } from "./Task";


const initializeTasks: TaskData[] = [
    {
        id: 0,
        name: 'Sweep the Kitchen',
        description: 'Get under the cabinets, do a good job',
        selected: false
    },
    {
        id: 1,
        name: 'Dishwashing',
        description: 'Wash and dry dishes, pots, pans, and utensils',
        selected: false
    },
    {
        id: 2,
        name: 'Vacuuming',
        description: 'Vacuum carpets, rugs, amd floors throughout the house',
        selected: false
    },
    {
        id: 3,
        name: 'Dusting',
        description: 'Dust furniture, shelves, and other surfaces',
        selected: false
    }
]

function TaskList(){

    const [tasks, setTasks] = useState(initializeTasks)

    const toggleTask  = (id:number): void =>{
        setTasks((prev) =>{
            const newTasks = structuredClone(prev)
            const selectedTask = newTasks.find((task) => task.id===id)
            if(!selectedTask) return newTasks
            selectedTask.selected = !selectedTask.selected
            return newTasks
        })
    }

    return (
        
        <div className='p-3.5 flex flex-col items-center'>
            <span className='pt-5 font-[inter] font-normal text-5xl pr-96 pb-3'> Task List </span>
            {tasks.sort((task1, task2) => task1.selected ? -1:1).map((task) => <Task taskData = {task} toggleSelected = {() => toggleTask(task.id)} /> )}
        </div>
    )
}

export default TaskList