import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import MemberInfo from "./pages/MemberInfo/MemberInfo";
import Attendance from "./pages/Attendance/Attendance";
import Settings from "./pages/Settings/Settings";
import Header from "./components/Header/Header"
import SideNav from "./components/SideNav/SideNav"
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import "./App.scss";

export default function App() {

  return (
    <main className="App">
      <BrowserRouter>
        <ConditionalLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/memberInfo/:id" element={<MemberInfo />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </ConditionalLayout>
      </BrowserRouter>
    </main>
  );
}

const ConditionalLayout = ({ children }) => {
  const location = useLocation()
  const hideHeader_SideNav = location.pathname === '/register' || location.pathname === '/login'
  
  const header_SideNav = (
    <>
      <Header />
      <SideNav />
    </>
  )

  return (
    <>
      {!hideHeader_SideNav && header_SideNav}
      {children}
    </>
  )
}