import '../../css/ListView.css'
import { useEffect, useState } from 'react'
import Task from '../../objects/Task'
import TaskListItem from './TaskListItem'

function ListView(
  {addItem, tasks, toggleCompleted}:
  {addItem: (tableName: string, object: object) => void , tasks: () => Task[], toggleCompleted: (task: Task) => void}
) {
  const [list, setList] = useState<Task[]>([])
  const [inputString, setInputString] = useState("")
  
  const updateInputString = (changeHandler: React.ChangeEvent<HTMLInputElement>) => {
    const data = changeHandler.target.value
    setInputString(data)
    console.log(inputString)
  }

  const addTaskOnEnter =  async(
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if(event.key === 'Enter' && inputString != '') {
      const taskToAdd = new Task(inputString)
      taskToAdd.id = Math.floor(Date.now())
      await addItem('task', taskToAdd)
      setInputString("")
    }
    
  }

  useEffect(() => {
    const data = tasks().slice(0)
    setList(tasks)
  }, []
  )

  return (
    <div className="ListView">

      <div className='addTaskDiv'>
        <input 
          className='addTaskInput'
          placeholder='Add an item'
          onKeyDown={addTaskOnEnter}
          onChange={updateInputString}
          value={inputString}
        />
      </div>
        

        {
          tasks().map(task => {
            return(
              <TaskListItem key = {task.id} task = {task} toggleCompleted = {toggleCompleted}/>
            )
          })
        }
        

        

    </div>
  );
}

export default ListView;
