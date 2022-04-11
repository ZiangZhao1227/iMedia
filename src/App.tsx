import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Login />}></Route>
      <Route path="/profile/:username" element={<Profile />}></Route>
      <Route
        path="/login"
        element={user ? <Navigate to="/" /> : <Login />}
      ></Route>
      <Route
        path="/register"
        element={user ? <Navigate to="/" /> : <Register />}
      ></Route>
    </Routes>
  );
}
export default App;
