import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TaskInput } from './Components/TaskInput/TaskInput';
import { TaskList } from './Components/TaskList/TaskList';
import { Footer } from './Components/Footer/Footer';
import './App.css';

export const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('mydayapp-reactjs'));
        if (storedTasks) setTasks(storedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('mydayapp-reactjs', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (title) => {
        const newTask = { id: Date.now(), title: title.trim(), completed: false };
        setTasks([...tasks, newTask]);
    };

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    const updateTask = (id, newTitle) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, title: newTitle.trim() } : task));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const clearCompleted = () => {
        setTasks(tasks.filter(task => !task.completed));
    };

    const filterTasks = (filter) => {
        if (filter === 'pending') {
            return tasks.filter(task => !task.completed);
        }
        if (filter === 'completed') {
            return tasks.filter(task => task.completed);
        }
        return tasks;
    };

    const location = useLocation();
    const filter = location.pathname.replace('/', '') || 'all';
    const filteredTasks = filterTasks(filter);

    const pendingTasksCount = tasks.filter(task => !task.completed).length;

    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    });

    return (
        <div className="app">
            <header className="app-header">
                <p className="app-name">My Day</p>
                <h1 className="app-date">{today}</h1>
                <p className="app-tagline">Capture what you want to get done today.</p>
                <TaskInput addTask={addTask} />
            </header>

            {tasks.length > 0 ? (
                <section className="app-body" aria-label="Tasks">
                    <TaskList
                        tasks={filteredTasks}
                        toggleTaskCompletion={toggleTaskCompletion}
                        updateTask={updateTask}
                        deleteTask={deleteTask}
                    />
                    <Footer
                        tasksCount={pendingTasksCount}
                        clearCompleted={clearCompleted}
                    />
                </section>
            ) : (
                <p className="app-empty">
                    Nothing on the list yet. Add the first task above.
                </p>
            )}
        </div>
    );
};
