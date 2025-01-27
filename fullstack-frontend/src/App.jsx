import "./App.css";
import { Navbar } from "./layout/Navbar";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddUsers } from "./users/AddUsers";
import { EditUsers } from "./users/EditUsers";
import { ViewUsers } from "./users/ViewUsers";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/adduser" element={<AddUsers />} />
        <Route exact path="/edituser/:id" element={<EditUsers />} />
        <Route exact path="/viewuser/:id" element={<ViewUsers />} />
      </Routes>
    </Router>
  );
}

export default App;
