import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/LoginPage";
import { AuthProvider } from "./context/authContext";
import TaskPage from "./pages/task/TaskPage";
import TaskFormPage from "./pages/task/TaskFormPage";
import ProfilePage from "./pages/profile/ProfilePage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        //Rutas
        <Route path="/" element={<h1>Home page</h1>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/tasks" element={<TaskPage/>}/>
        <Route path="/add-task" element={<TaskFormPage/>}/>
        <Route path="/tasks/:id" element={<TaskFormPage/>}/>
        <Route path="/profile" element={<h1><ProfilePage/></h1>}/>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
