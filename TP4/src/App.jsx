import { Form, Task } from './components'
import { useTasks } from './hooks'

export function App() {
    const { tasks, addTask, removeTask } = useTasks()

    return (
        <>
            <Form addTask={addTask} />
            <ul id="task-list">
                {
                    tasks.map(task =>
                    <Task
                        key={task.id}
                        task={task}
                        removeTask={removeTask}
                    />)
                }
            </ul>
        </>
    )
}
