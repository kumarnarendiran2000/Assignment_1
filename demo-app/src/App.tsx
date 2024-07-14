import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import useStore from "./store/useStore";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./components/Login";
import Form from "./components/Form";
import PrivateRoute from "./components/PrivateRoute"; // Importing the PrivateRoute component

const App: React.FC = () => {
  const { checkLoginStatus, isLoggedIn, logout } = useStore();

  useEffect(() => {
    checkLoginStatus(); // Check login status on app load
  }, [checkLoginStatus]);

  return (
    <Router>
      {isLoggedIn && <Header />}
      <div className={isLoggedIn ? "flex" : "flex justify-center items-center h-screen"}>
        {isLoggedIn && <Navigation />}
        <main className="flex-grow p-4 min-h-screen">
          <Routes>
            <Route path="/login" element={isLoggedIn ? <Navigate replace to="/" /> : <Login />} />
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
            <Route path="/services" element={<PrivateRoute><Services /></PrivateRoute>} />
            <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
            <Route path="/contact/form" element={<PrivateRoute><Form /></PrivateRoute>} />
            <Route path="*" element={<Navigate replace to="/login" />} />
          </Routes>
        </main>
      </div>
      {isLoggedIn && (
        <button onClick={logout} className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      )}
    </Router>
  );
};

export default App;
