import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/header/Navbar";
import About from "./pages/About";
import BooksList from "./pages/BooksList";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/bookslist"} element={<BooksList />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
