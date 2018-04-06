import React from 'react';
import sinergialogo from '../sinergia_logo.png';

import './Slideoutmenu.css';
import {Link} from 'react-router-dom';

import Slideout from 'slideout';



export default class Slideoutmenu extends React.Component{

	componentDidMount() {
		//Slideout menu
		var slideout = new Slideout({
	        'panel': document.getElementById('panel'),
	        'menu': document.getElementById('menu'),
	        'padding': 256,
	        'tolerance': 70
	      });

	      // Toggle button
	      document.querySelector('.toggle-button').addEventListener('click', function() {
	        slideout.toggle();
	      });
  	}

  render(){
    return(
      	
    	<nav id="menu">

	    	 <Link to='/'><img  src={sinergialogo} id="slide-logo" alt="sinergiaLogo"/></Link>

    		 <div className='sidenav'>
    		   <div className="slide-pages"> <Link to='/services'>services</Link> </div> 
		 	   <div className="slide-pages"> <Link to='/parentcenter'>parent center</Link> 		</div> 
		 	   <div className="slide-pages"> <Link to='/about'>who we are</Link> </div>
		 	   <div className="slide-pages"> <Link to='/blog'>blog / news</Link> </div> 
		 	   <div className="slide-pages"> <Link to='/media'>media center</Link> </div> 
		 	   <div className="slide-pages"> <Link to='/getinvolved'>get involved</Link> </div> 
		 	   <div className="slide-pages"> <Link to='/contact'>contact us</Link> </div> 
		 	   <div className="slide-pages"> <Link to='/donate'>donate</Link> </div> 
		 	   <div className="slide-pages"> <Link to='/careers'>careers</Link> </div> 
		 	   <div className="slide-pages"> <Link to='/feedback'>feedback</Link> </div>  
    		 </div>

        </nav>



		


    );
  }
}
