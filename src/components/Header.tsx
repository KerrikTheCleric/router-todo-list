import { ReactElement } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export function Header(): ReactElement {
  return (
    <header className="header">
      <h1 className="logo">Todo App</h1>
      <div className="links">
        <Link className="link" to="/add">Add New Todo</Link>
        <Link className="link" to="/info">About Page</Link>
        <Link className="link" to="/">Todo List</Link>
      </div>
    </header>
  );
}