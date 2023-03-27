import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forside from "./pages/Forside";
import Prisliste from "./pages/Prisliste";
import Omos from "./pages/Omos";
import Booking from "./pages/Booking";
import Services from "./pages/Services";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AdminSide from "./pages/admin/AdminSide";
import OpretSide from "./pages/admin/OpretSide";
import OpdateringsSide from "./pages/admin/OpdateringsSide";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Forside />} />
          <Route path="/prisliste" element={<Prisliste />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/omos" element={<Omos />} />
          <Route path="/admin" element={<AdminSide />} />
          <Route path="/admin/posts/:postid" element={<OpdateringsSide />} />
          <Route path="/create" element={<OpretSide />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
