import { Navigate, Route, Routes } from "react-router-dom"
import { NavComponent } from "./components/NavComponent"
import { About } from "./routes/About"
import { Skilss } from "./routes/Skills"
import { Contact } from "./routes/Contact"

export const App = () => {
  return (
    <>
      <NavComponent></NavComponent>
      <Routes>
        <Route path="/" element={<About></About>}></Route>
        <Route path="/Skills" element={<Skilss></Skilss>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/*" element={ <Navigate to="/" /> }></Route>
      </Routes>
    </>
  )
}
