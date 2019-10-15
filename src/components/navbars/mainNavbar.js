import React from 'react'


class Navbar extends React.Component {

    render () {

	    const bgColor = {
	        backgroundColor: "#17a2b8"
	    }

    	return (
			<nav className=" shadow navbar navbar-expand-lg navbar-dark" style={bgColor}>
				<a className="navbar-brand" href="/">PrescribeBox</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    	<span className="navbar-toggler-icon"></span>
			  	</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
			    	<ul className="navbar-nav mr-auto">
			   		</ul>
			   		<ul className="navbar-nav">
				      	<li className="nav-item active btnMargin">
				        	<a className="nav-link" href="/">Home</a>
				      	</li>
				      	<li className="nav-item dropdown active btnMargin">
				        	<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				          	Register
				        	</a>
					        <div className="dropdown-menu shadow border-0" aria-labelledby="navbarDropdown">
					          	<a className="dropdown-item" href="/doctor-registration">Registration for doctors</a>
					            <div className="dropdown-divider"></div>
					          	<a className="dropdown-item" href="/pharmacy-registration">Registration for pharmacist</a>
                                <div className="dropdown-divider"></div>
					          	<a className="dropdown-item" href="/registration">Registration for patient</a>
					        </div>
				     	</li>
				      	<li className="nav-item dropdown active btnMargin">
				        	<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				          	Already a user?
				        	</a>
					        <div className="dropdown-menu shadow border-0" aria-labelledby="navbarDropdown">
					          	<a className="dropdown-item" href="/doctor-login">Login for doctors</a>
					            <div className="dropdown-divider"></div>
					          	<a className="dropdown-item" href="/pharmacy-login">Login for pharmacist</a>
                                <div className="dropdown-divider"></div>
					          	<a className="dropdown-item" href="/login">Login for patient</a>
					        </div>
				     	</li>
				      	<li className="nav-item btnMargin active">
				        	<a className="nav-link" href="#">Documentation</a>
				      	</li>				
				    </ul>
			  	</div>
			</nav>
    	)
    }
}
export default Navbar