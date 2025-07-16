import React from 'react';
import './Footer.css';  // Optional, for custom styling if needed

export const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <div className="container text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} MyTodosList. All rights reserved.</p>
        <small className="text-muted">Its My Todos List</small>
      </div>
    </footer>
  );
};
