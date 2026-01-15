import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/view-details/:id" element={<ProductDetails />} />
        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
