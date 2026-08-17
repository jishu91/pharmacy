import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BuyMedicine from "./pages/BuyMedicine";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Could not reach backend"));
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/Home"
          element={
            <>
              <BuyMedicine />
            </>
          }
        />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
