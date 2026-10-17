import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Footer/Footer.css';

export const Footer = ({ tasksCount, clearCompleted }) => {
    return (
        <footer className="app-footer">
            <span className="task-count">
                {tasksCount} {tasksCount === 1 ? 'item' : 'items'} left
            </span>

            <div className="filters">
                <NavLink to="/all" end>
                    All
                </NavLink>
                <NavLink to="/pending">Pending</NavLink>
                <NavLink to="/completed">Completed</NavLink>
            </div>

            <button className="clear-completed" onClick={clearCompleted}>
                Clear completed
            </button>
        </footer>
    );
};
