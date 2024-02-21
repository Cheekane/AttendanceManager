import { BrowserRouter, Route, Routes } from "react-router-dom"
import Add from "./pages/Add"
import Home from "./pages/Home"
import MemberInfo from "./pages/MemberInfo"
import Events from "./pages/Events"
import "./App.scss"
import "./components/SearchBar.scss"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/add" element={<Add/>}/>
            <Route path="/memberInfo/:id" element={<MemberInfo/>}/>
            <Route path="/events" element={<Events/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
