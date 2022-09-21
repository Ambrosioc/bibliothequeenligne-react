import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import BooksList from "./pages/BooksList";
import Home from "./pages/Home";
import TopNav from "./components/navigation/TopNav";

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/bookslist"} element={<BooksList />} />
        <Route path={"/about"} element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
