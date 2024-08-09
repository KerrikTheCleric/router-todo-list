import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { App } from "./App";
import { AboutPage } from "./pages/AboutPage";
import { ListPage } from "./pages/ListPage";
import { AddPage } from "./pages/AddPage";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<ListPage />} />
      <Route path="info" element={<AboutPage />} />
      <Route path="add" element={<AddPage />} />
    </Route>
  )
);