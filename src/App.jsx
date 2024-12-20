import { Route, Routes } from "react-router";
import "./index.css";
import { Navbar } from "./components/layout/Navbar";



function App() {
  return (
    <>
    <Navbar/>
      <nav className=" w-full bg-primary">Bar de Nav</nav>
      <Routes>
        <Route path="/" element={<HomePahe />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
