import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./components/Add/Add";
import Counter from "./components/Counter/Counter";
import List from "./components/List/List";
import CounterContextProvider from "./contexts/counterContext";
import TodoContextProvider from "./contexts/todoContext";

const App = () => {
  return (
    <TodoContextProvider>
      <CounterContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/counter" element={<Counter />} />
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
          </Routes>
        </BrowserRouter>
      </CounterContextProvider>
    </TodoContextProvider>
  );
};

export default App;
