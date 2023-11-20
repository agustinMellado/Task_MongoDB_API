import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";

import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/LoginPage";
import TaskPage from "./pages/task/TaskPage";
import TaskFormPage from "./pages/task/TaskFormPage";
import ProfilePage from "./pages/profile/ProfilePage";
import HomePage from "./pages/home/HomePage";
import ProtectedRoutes from "./ProtectedRoutes";
import { TaskProvider } from "./context/taskContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
        <Navbar />
          <main className="container mx-auto px-10">
            <Routes>
              //Rutas
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/tasks" element={<TaskPage />} />
                <Route path="/add-task" element={<TaskFormPage />} />
                <Route path="/tasks/:id" element={<TaskFormPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
