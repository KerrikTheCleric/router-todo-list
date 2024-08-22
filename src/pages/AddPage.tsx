import { ReactElement, useEffect } from "react";
import { useTodoLogic } from "../hooks/useTodoLogic.ts";
import { AddPageSection } from "../components/AddPageSection.tsx";

export function AddPage(): ReactElement {

  const { fetchAPITodos } = useTodoLogic();


  useEffect(() => {
    fetchAPITodos();
}, []);

  return (
    <main>
      <AddPageSection />
    </main>
  );
}