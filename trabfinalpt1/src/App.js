import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import "./App.css";
//import "./pages/react-sidenav.css";
import Menu from "./components/utils/Menu.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu/>
      </BrowserRouter>
    </div>
  );
}

export default App;
