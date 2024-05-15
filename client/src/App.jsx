import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {KindeProvider} from "@kinde-oss/kinde-auth-react";
import Add from "./pages/Add";
import Home from "./pages/Home";
import MemberInfo from "./pages/MemberInfo";
import Profile from "./pages/Profile";
import Events from "./pages/Events";
import Contacts from "./pages/Contacts";
import "./App.scss";
import "./components/SearchBar.scss";

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/memberInfo/:id" element={<MemberInfo />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </BrowserRouter>
      </KindeProvider>
    </main>
  );
}