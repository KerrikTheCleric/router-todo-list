import { ReactElement } from "react";
import { useTodoLogic } from "../hooks/useTodoLogic.ts";
import "./AboutPageSection.css";

export function AboutPageSection(): ReactElement {

  const { todos } = useTodoLogic();

  return (
    <section className="aboutPageMainSection">
      <ul className="textList">
        <b className="mainText">This application lets you write down things for your todo list and organize them using various features like manual and automatic sorting.</b>
        <h1>Current Todos: {todos.length}</h1>
      </ul>
    </section>
  );
}