import { useRef } from "react";
import Footer from "./Components/Footer";
import { NavBar } from "./Components/NavBar";
import BusinessPage from "./Pages/BusinessPage";
import ClientPage from "./Pages/ClientPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import ProductAgency from "./Pages/ProductAgency";
import "./styles.css";

export default function App() {
  document.title = "A+ Studio - A Digital Product Agency";
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <BusinessPage />
      <ProductAgency />
      <ClientPage />
      <ContactPage />
      <Footer />
    </div>
  );
}
