import { useState } from 'react'

const initialForm = {
    project: '',
    type: '',
    assigned: '',
    story_points: '',
    priority: '',
    creation_date: '',
    summary: ''
}

export function Form({ addTask }) {
    const [form, setForm] = useState(initialForm)

    function handleSubmit(event) {
        event.preventDefault()
        const elements = event.target.elements
        const task = {};

        for (let element of elements) {
            if (element.name) task[element.name] = element.value;
        }

        const EMPTY = ''
        if (Object.values(task).some(element => element === EMPTY)) return

        addTask(task)
        setForm(initialForm)
    }

    function handleChange({ target }) {
        setForm({
            ...form,
            [target.name]: target.value
        })
    }

    return (
        <form id="form" onSubmit={handleSubmit}>
            <label htmlFor="project">Proyecto</label>
            <input
                name="project"
                onChange={handleChange}
                value={form.project}
                required
                placeholder="Nombre del proyecto"
            />

            <label htmlFor="type">Tipo de tarea</label>
            <input
                name="type"
                onChange={handleChange}
                value={form.type}
                required
            />

            <label htmlFor="assigned">Persona asignada</label>
            <input
                name="assigned"
                onChange={handleChange}
                value={form.assigned}
                required
                placeholder="Nombre de la persona encargada"
            />

            <label htmlFor="story_points">Story points</label>
            <input
                name="story_points"
                onChange={handleChange}
                value={form.story_points}
                type="number"
                min="1"
                required
                placeholder="Número de story points"
            />

            <label htmlFor="priority">Prioridad</label>
            <select
                name="priority"
                onChange={handleChange}
                value={form.priority}
                required
            >
                <option value="" disabled>Selecciona la prioridad</option>
                <option value="alta">Alta</option>
                <option value="media">Media</option>
                <option value="baja">Baja</option>
            </select>

            <label htmlFor="creation_date">Fecha de creación</label>
            <input
                name="creation_date"
                onChange={handleChange}
                value={form.creation_date}
                type="date"
                required
            />

            <label htmlFor="summary">Resumen</label>
            <textarea
                name="summary"
                onChange={handleChange}
                value={form.summary}
                required
            ></textarea>

            <button type="submit">Agregar</button>
        </form>
    )
}
