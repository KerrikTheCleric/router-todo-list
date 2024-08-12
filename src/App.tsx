import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { TodoProvider } from "./context/TodoProvider.tsx";
import { Header } from "./components/Header.tsx";

export function App(): ReactElement {

  return (
    <>
      <Header />
      <TodoProvider>
        <Outlet />
      </TodoProvider>
    </>
  );
}
