import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import { AuthContextProvider } from "./context/Authcontext";
import PrivateRoute  from "./context/PrivateRoute";
import ForgotPassword from "./Pages/ForgotPassword";
import "./App.css";
// import { Navigate } from "react-router-dom";


const App = () => {
  return (
   <BrowserRouter>
    <h1 className="text-center text-3xl font-bold">Authentication App</h1>
      <AuthContextProvider>
      <Routes>
        <Route path='/dashboard' element={
          <PrivateRoute><Dashboard/></PrivateRoute>
        }/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
      </Routes>
      </AuthContextProvider>
   </BrowserRouter>
  );
}

export default App;