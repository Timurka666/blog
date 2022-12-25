import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Registration from "./pages/Registration";
import Auth from "./pages/Auth";
import Account from "./pages/Account";

function App() {
  return (
    <>
      <Navbar />
      <div className="container py-[30px] mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
