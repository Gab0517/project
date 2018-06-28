import React from 'react';
import '../App.css';
import box from './Layouts/img-slide/vert-box.png';
import bean from './Layouts/img-slide/cbean.png';
class About extends React.Component{
  render(){ 
  	return (
		<div id = "about-section" className ="row">
		<div className = "col-xl-4 col-lg-4 col-md-6 col-xs-12 col-sm-12">
        <div className = "d-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block">
          <img src = {box} className = "ml-2 box" />
        </div>
      </div>
		<div className = "col-xl-7 col-lg-7 col-md-6 col-xs-12 col-sm-12 cb-story bean">
			<img src = {bean} className = "bean1 d-block d-sm-none d-xl-none" />
      <h1 className = "text-md-right display-4  text-center"><img src = {bean} className = " mr-1 " />
        Our Coffee Story
      </h1>
      <p className = " text-md-right mt-4 ml-md-5 ml-2 text-justify mb-5 bean-text">
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
		eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
		enim ad minim veniam, quis nostrud exercitation ullamco laboris 
		nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
		in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
		nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
		sunt in culpa qui officia deserunt mollit anim id est laborum."
		</p>

		<span className = "float-right">
          <small className = "text-muted text-right h6 quote">
            “Coffee is a beverage that puts one 
				to sleep when not drank.” 
				- Alphonse Allais
           </small>
           </span>
        
		</div>
		</div>
	)
  }
}

 export default About;