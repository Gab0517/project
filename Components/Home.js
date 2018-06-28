import React from 'react';
import '../App.css';
	
import cbhome from './Layouts/img-slide/intro-bg.jpg';

class Home extends React.Component{
  render(){ 
  	return (
		<div id = "home-section" className = "row">
		<img alt = "hcoffee" className = "bg-img" src = {cbhome} />
		<div id = "loader-wrapper">
			<div id = "loader"></div>
		
		</div>
		<div className = "loader-section section-left"></div>
		<div className = "loader-section section-right"></div>
	
		</div>
		)
	}
}
export default Home;