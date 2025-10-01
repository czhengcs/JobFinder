import Saved from "./pages/Saved";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom"
import { JobProvider } from './contexts/JobContext';
import NavBar from "./components/NavBar";

function App() {

  return (
    <JobProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/saved' element={<Saved />} />
        </Routes>
      </main>
    </JobProvider>
  );
}

export default App;