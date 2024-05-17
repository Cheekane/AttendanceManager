import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import Add from "./pages/Add";
import Home from "./pages/Home";
import MemberInfo from "./pages/MemberInfo";
import Attendees from "./pages/Attendees";
import Settings from "./pages/Settings";
import "./App.scss";
import "./components/SearchBar.scss";
import Header from "./components/Header"
import SideNav from "./components/SideNav"

export default function App() {
  return (
    <main className="App">
      <KindeProvider
        clientId="2bcdcfc158c24899a021adee832659f4"
        domain="https://cheekane.kinde.com"
        redirectUri="http://localhost:3000"
        logoutUri="http://localhost:3000"
      >
        <BrowserRouter>
        <Header />
        <SideNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/memberInfo/:id" element={<MemberInfo />} />
            <Route path="/attendees" element={<Attendees />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        
        </BrowserRouter>
      </KindeProvider>
    </main>
  );
}