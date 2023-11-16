import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        //Rutas
        <Route path="/" element={<h1>Home page</h1>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/tasks" element={<h1>Task page</h1>}/>
        <Route path="/add-task" element={<h1>new Task</h1>}/>
        <Route path="/tasks/:id" element={<h1>update Task</h1>}/>
        <Route path="/profile" element={<h1>Profile page</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
