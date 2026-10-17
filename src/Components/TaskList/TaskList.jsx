import React, { useState } from 'react';
import '../TaskList/TaskList.css';

export const TaskList = ({ tasks, toggleTaskCompletion, updateTask, deleteTask }) => {
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');

    const handleEdit = (task) => {
        setEditingId(task.id);
        setEditText(task.title);
    };

    const saveEdit = (id) => {
        updateTask(id, editText);
        setEditingId(null);
    };

    const cancelEdit = () => {
        setEditingId(null);
    };

    if (tasks.length === 0) {
        return <p className="task-empty">No tasks to show with this filter.</p>;
    }

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li key={task.id} className={task.completed ? 'task-row task-row--done' : 'task-row'}>
                    <input
                        id={`task-${task.id}`}
                        className="task-row__check"
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTaskCompletion(task.id)}
                    />
                    {editingId === task.id ? (
                        <input
                            className="task-row__edit"
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            onBlur={() => saveEdit(task.id)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') saveEdit(task.id);
                                if (e.key === 'Escape') cancelEdit();
                            }}
                            aria-label={`Edit "${task.title}"`}
                            autoFocus
                        />
                    ) : (
                        <label
                            className="task-row__label"
                            htmlFor={`task-${task.id}`}
                            onDoubleClick={() => handleEdit(task)}
                            title="Double-click to edit"
                        >
                            {task.title}
                        </label>
                    )}
                    <button
                        className="task-row__delete"
                        onClick={() => deleteTask(task.id)}
                        aria-label={`Delete "${task.title}"`}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};
