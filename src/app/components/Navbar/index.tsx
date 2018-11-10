import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
	return (
		<nav>
			<div class="nav-wrapper">
				<ul id="nav-mobile" class="left hide-on-med-and-down">
					<li className="tab"><Link to="/">Home</Link></li>
					<li className="tab"><Link to="/allbreeds">AllBreeds</Link></li>
				</ul>
			</div>
		</nav>
	);
};


export default Navbar;
