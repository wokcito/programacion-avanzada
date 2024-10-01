import { useState, useEffect } from 'react'

export function useTasks() {
    const TASKS = 'tasks'
    const [tasks, setTasks] = useState(loadTasks())

    useEffect(() => {
        window.localStorage.setItem(TASKS, JSON.stringify(tasks))
    }, [tasks])

    function loadTasks() {
        const tasks = window.localStorage.getItem(TASKS)
        return tasks === null ? [] : JSON.parse(tasks)
    }

    function addTask(task) {
        setTasks([
            ...tasks,
            {
                id: crypto.randomUUID(),
                ...task
            }
        ])
    }

    function removeTask(id) {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return {
        tasks,
        addTask,
        removeTask
    }
}
