import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Update from "./components/Update";
import Read from "./components/Read";
import Create from "./components/Create";
import "./App.css";

function App() {
  
  const [updateData, setUpdateData] = useState({});
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route
            path="/formdata"
            element={<Read setUpdateData={setUpdateData} />}
          />
          <Route
            path="/formdata/updateForm"
            element={<Update updateData={updateData} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
