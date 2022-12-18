import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Navbar from "./components/layout/header/Navbar";
import About from "./pages/About";
import BooksList from "./pages/BooksList";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AdminBackOffice from "./pages/private/AdminBackOffice";
import UserBackOffice from "./pages/private/UserBackOffice";
import jwtDecode from "jwt-decode";

function App() {
  const [user, setUser] = useState(null);

  const connectUser = () => {
    const token = localStorage.getItem("token");

    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        localStorage.removeItem("token");
      } else {
        setUser(decodedToken);
      }
    }
  };

  useEffect(() => {
    connectUser();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Navbar user={user} />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/admin"} element={<AdminBackOffice />} />
        <Route path={"/user"} element={<UserBackOffice />} />
        <Route path={"/bookslist"} element={<BooksList />} />
        <Route path={"/about"} element={<About />} />
        <Route
          path={"/sign-in"}
          element={
            <SignIn
              handleLoginSuccess={() => {
                connectUser();
                navigate("/");
              }}
            />
          }
        />
        <Route path={"/sign-up"} element={<SignUp />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
