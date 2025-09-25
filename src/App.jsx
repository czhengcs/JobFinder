import JobCard from "./components/JobCard";
import Saved from "./pages/Saved";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar";

function App() {

  return (
    <div>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/saved' element={<Saved />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;