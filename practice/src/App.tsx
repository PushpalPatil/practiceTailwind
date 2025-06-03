import { useState } from 'react'
import './App.css'

export type TaskData = {
    id: number
    title: string,
    description: string
  }
type TaskProps = {
  taskData: TaskData,
  buttonClicked: false,
}

const initializeTask: TaskData[] = [
    {
      id: 0,
      title: "Sweep the Kitchen",
      description: "Get Under the cabinets, do a good job"
    }
]


function App() {
  const [tasks, setTasks] = useState(initializeTask)

  const buttonStyling = "bg-origin-padding:10-rem bg-gray-300 items-center px-4 py-2 hover:bg-green-300 sm:px-8 sm:py-3 rounded-b-sm"
  const titleStyling = "font-medium"
  const descriptionStyling = "font-small"


  return (
    <>
    <div className = "flex flex-col">
      <div className = "flex flex-row justify-center align-middle border-2" >
        <button className="bg-origin-padding:10-rem bg-gray-300 items-center px-4 py-2 hover:bg-green-600 sm:px-8 sm:py-3 rounded-b-sm"></button>
        <div className = {titleStyling}> taskData</div>
      </div>
    </div>
    </>
  )
}


export default App

