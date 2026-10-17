import React, { useState } from 'react';
import '../TaskInput/TaskInput.css';

export const TaskInput = ({ addTask }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            addTask(input);
            setInput('');
        }
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <label className="task-form__label" htmlFor="new-task">
                Add a task
            </label>
            <div className="task-form__row">
                <input
                    id="new-task"
                    className="task-form__input"
                    type="text"
                    placeholder="e.g. Call the dentist"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    autoFocus
                />
                <button type="submit" className="task-form__submit">
                    Add
                </button>
            </div>
        </form>
    );
};
