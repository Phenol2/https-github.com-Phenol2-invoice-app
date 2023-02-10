import React from "react";
import "./style.css";
import { Routes, Route } from "react-router-dom"
import SharedLayouts from "./SharedLayouts"

export default function App() {
  return (
    <main>
      <Routes>
        <Route path = "/" element = {<SharedLayouts />}>
        </Route>
      </Routes>
    </main>
  );
}
