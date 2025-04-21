import { Link } from "react-router-dom";
import { FavoritesDropdown } from "./FavoritesDropdown";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">

				<span className="navbar-brand mb-0 h1">Star Wars Catalog</span>

				{<FavoritesDropdown />}
			</div>
		</nav>
	);
};