import * as React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component{
	render(){
		return (
			<nav>
				<div className="nav-wrapper">
					<ul id="nav-mobile" className="left hide-on-med-and-down">
						<li className="tab"><Link to="/">Home</Link></li>
						<li className="tab"><Link to="/allbreeds">AllBreeds</Link></li>
						<li className="tab">
							<input
								placeholder="Search breed by id.."
								onChange={this.handleSearch}
								maxLength={4}
								id="search_breed"
								type="text"
								className="validate"

							/>
						</li>
					</ul>
				</div>
			</nav>
		);
	}

	handleSearch = (e: React.FormEvent<HTMLInputElement>) =>{console.log(e.target)
		//(parseInt(e.target.value) || e.target.value === '') && this.props.searchBreed(parseInt(e.target.value))
	}

};

export default Navbar;
