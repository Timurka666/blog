import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Registration from "./pages/Registration";
import Auth from "./pages/Auth";

function App() {
  return (
    <>
      <Navbar />
      <div className="container py-[30px] mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
