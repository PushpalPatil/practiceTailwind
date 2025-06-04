export type TaskData = {
  id: number,
  name: string,
  description: string,
  selected: boolean
}

type TaskProps = {
  taskData: TaskData,
  toggleSelected: () => void
}

function Task({taskData, toggleSelected} : TaskProps){

    const selected = taskData.selected
    const divBase = "flex flex-row items-center w-xl m-5 border-1 border-gray-300 pl-3.5 rounded-xl "
    const divFinal = divBase + "bg-green-100 border-green-100"

    const hover = 'hover:bg-green-600'
    const buttonTransition = 'h-2 p-2.5 rounded-md border-1 border-gray-400 '
    const buttonBase = buttonTransition + hover
    const buttonFinal = buttonTransition + "bg-green-600"

    return(
        <div className={selected? divFinal : divBase}>
            <button onClick={toggleSelected} className={selected? buttonFinal : buttonBase}></button>
            <div className="p-3.5 flex flex-col">
                <div className="font-medium  font-[inter] text-md pb-0.5"> {taskData.name}</div>
                <div className="font- light font-[inter] text-sm text-gray-400"> {taskData.description}</div>
            </div>

        </div>
    )

}

export default Task