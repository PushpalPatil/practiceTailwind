
import './App.css';

const initializeTasks: TaskData[] = [
  {
    id: 0,
    name: "Sweep the Kitchen",
    description: "Get under the cabinets, do a good job",
    completed ?: false
  }
]


function list(){
  const [tasks, setTasks] = useState(initializeTasks)

  const taskCompleted = (id: number): void =>{
    setTasks((p) =>{
      const newTask = structuredClone(p)
      const changeTask = newTask.find((task) => task.id === id)
      if(!changeTask) return newTask
      changeTask.completed = !changeTask.completed
      return newTask
    })
  }

  return{
    
  }
}

export default Task