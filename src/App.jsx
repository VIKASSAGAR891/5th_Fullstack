import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Cart from "./pages/Cart";
import Reports from "./pages/Reports";

function App() {

  const { theme } = useContext(AppContext);

  return (
    <div className={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  );
}

export default App;