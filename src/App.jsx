import { Route, Routes } from "react-router";
import "./index.css";
import { Navbar } from "./components/layout/Navbar";
import { HomePage } from "./app/page";
import { AboutPage } from "./app/about/page";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
