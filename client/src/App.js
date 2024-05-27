import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import Home from "./pages/Home";
import MemberInfo from "./pages/MemberInfo";
import Attendees from "./pages/Attendees";
import Settings from "./pages/Settings";
import Header from "./components/Header"
import SideNav from "./components/SideNav"
import Register from "./pages/Register";
import "./App.scss";

export default function App() {

  return (
    <main className="App">
      <BrowserRouter>
        <Header />
        <SideNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/memberInfo/:id" element={<MemberInfo />} />
            <Route path="/attendees" element={<Attendees />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        
      </BrowserRouter>
      
    </main>
  );
}