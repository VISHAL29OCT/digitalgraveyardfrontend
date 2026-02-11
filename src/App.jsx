import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AddIdea from "./pages/AddIdea.jsx";
import Analytics from "./pages/Analytics.jsx";
import Home from './pages/Home.jsx';
import { Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast"


function App() {
  const [ideas, setIdeas] = useState(
    JSON.parse(localStorage.getItem("ideas")) || [])
  useEffect(() => {
    localStorage.setItem("ideas", JSON.stringify(ideas));
  }, [ideas]);


  return (
    <>
      <Toaster position="top-right" />
      <div className='min-h-screen bg-slate-950 text-white'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={localStorage.getItem("token") ? (
              <Dashboard ideas={ideas} setIdeas={setIdeas} />
            ) : (
              <Navigate to="/login" />
            )}
            />


            <Route path="/add" element={localStorage.getItem("token") ? (
                  <AddIdea ideas={ideas} setIdeas={setIdeas} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

            <Route path="/add/:id" element={localStorage.getItem("token") ? (
              <AddIdea ideas={ideas} setIdeas={setIdeas} />
            ) : (
              <Navigate to="/login" />
            )
            }
            />

            <Route path="/analytics" element={<Analytics ideas={ideas} />} />


          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
