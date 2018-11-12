import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component{
	render(){
		return (
			<nav>
				<div class="nav-wrapper">
					<ul id="nav-mobile" class="left hide-on-med-and-down">
						<li className="tab"><Link to="/">Home</Link></li>
						<li className="tab"><Link to="/allbreeds">AllBreeds</Link></li>
						<li className="tab"><input placeholder="Search breed by id.." onChange={this.handleSearch} maxLength="4" id="search_breed" type="text" class="validate"/></li>
					</ul>
				</div>
			</nav>
		);
	}

	handleSearch = (e) =>{
		(parseInt(e.target.value) || e.target.value === '') && this.props.searchBreed(e.target.value)
	}

};
