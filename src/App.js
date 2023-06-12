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
import BOUsersList from "./container/BOUsersList";
import AddBook from "./container/AddBook";
import UpdateBook from "./container/UpdateBook";
import BookShow from "./pages/BookShow";
import CookieConsent from "react-cookie-consent";
import Cookies from "js-cookie";
import { useEffect } from "react";

function App() {
	const navigate = useNavigate();

	useEffect(() => {
		const navigationData = Cookies.get("navigationData");
		if (navigationData) {
			console.log(navigationData);
		}
	}, []);

	return (
		<>
			<Navbar />
			<Routes>
				<Route path={"/"} element={<Home />} />
				<Route path={"/admin"} element={<AdminBackOffice />} />
				<Route path={"/user"} element={<UserBackOffice />} />
				<Route path={"/bookslist"} element={<BooksList />} />
				<Route path={"/book/:id"} element={<BookShow />} />
				<Route path={"/about"} element={<About />} />
				<Route path={"/admin/user"} element={<BOUsersList />} />
				<Route path={"/admin/updateBook"} element={<UpdateBook />} />
				<Route path={"/admin/user"} element={<AddBook />} />
				<Route
					path={"/sign-in"}
					element={
						<SignIn
							handleLoginSuccess={() => {
								navigate("/");
							}}
						/>
					}
				/>
				<Route path={"/sign-up"} element={<SignUp />} />
				<Route path={"*"} element={<NotFound />} />
			</Routes>
			<CookieConsent
				location="bottom"
				buttonText="Accepter"
				cookieName="myAwesomeCookieName2"
				style={{ background: "#2B373B" }}
				buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
				expires={150}
				onAccept={() => {
					Cookies.set("myAwesomeCookieName2", true, { expires: 150 });
					Cookies.set("navigationData", "Vos données de navigation", {
						expires: 150,
					});
				}}>
				En poursuivant votre navigation sur ce site, vous acceptez l’utilisation
				de Cookies ou autres traceurs pour vous proposer une expérience de
				navigation optimale et réaliser des statistiques de visites.
			</CookieConsent>
		</>
	);
}

export default App;
