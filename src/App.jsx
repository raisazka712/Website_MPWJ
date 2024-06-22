import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import NavbarComponents from "./components/NavbarComponents";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import KategoriPage from "./pages/KategoriPage";
import NominasiPage from "./pages/NominasiPage";
import Event23Page from "./pages/Event23Page";
import Event24Page from "./pages/Event24Page";
import SponsorPage from "./pages/SponsorPage";




function App() {
  return <div>
    <NavbarComponents />
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/Kategori" Component={KategoriPage} />
      <Route path="/Nominasi" Component={NominasiPage} />
      <Route path="/Event2023" Component={Event23Page} />
      <Route path="/Event2024" Component={Event24Page} />
      <Route path="/Sponsor" Component={SponsorPage} />
    </Routes>
    <Footer />
  </div>; 
}

export default App;
