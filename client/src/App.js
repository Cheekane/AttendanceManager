import { BrowserRouter, Route, Routes } from "react-router-dom"
import Add from "./pages/Add"
import Members from "./pages/Members"
import MemberInfo from "./pages/MemberInfo"
import "./style.scss"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Members/>}/>
            <Route path="/add" element={<Add/>}/>
            <Route path="/memberInfo/:id" element={<MemberInfo/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
