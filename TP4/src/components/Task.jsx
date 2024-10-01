export function Task({
    task: {
        id,
        project,
        type,
        assigned,
        story_points,
        priority,
        creation_date,
        summary
    },
    removeTask
}) {
    function handleClick() {
        removeTask(id)
    }

    return (
        <li className="task">
            <h3>{project}</h3>
            <p><strong>Tipo de tarea:</strong> {type}</p>
            <p><strong>Persona asignada:</strong> {assigned}</p>
            <p><strong>Story Points:</strong> {story_points}</p>
            <p><strong>Prioridad:</strong> {priority}</p>
            <p><strong>Fecha de creación:</strong> {creation_date}</p>
            <p><strong>Resumen:</strong> {summary}</p>
            <button onClick={handleClick}>Eliminar</button>
        </li>
    )
}
