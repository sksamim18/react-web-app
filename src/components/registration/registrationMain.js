import React from 'react'
import Navbar from '../navbars/mainNavbar.js'
import Footer from '../footer/mainFooter.js'

import Patient from './patientForm.js'
import Pharmacy from './pharmacyForm.js'
import Doctor from './doctorForm.js'



class Register extends React.Component {

	render() {
        const boxStyle = {
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "10px",
            padding: "30px"
        }

		return (
            <div>
    		    <Navbar />
		            <div className="container">
		                <br></br><br></br>
		            	<div className="row">
		            		<div className="col-md-4 text-center shadow" style={boxStyle}>
		            			<h4>Enter your details</h4>
		            			{this.props.loginType == "normal" && 
		            			    <div>
		            			        <h5>Patient registration</h5>
		            			        <Patient {...this.props} />
		            			    </div>}
		            			{this.props.loginType == "pharmacy" && 
		            			    <div>
		            			    	<h5>Pharmacy registration</h5>
		            			    	<Pharmacy {...this.props} />
		            			    </div>}
		            			{this.props.loginType == "doctor" && 
		            			    <div>
		            			    	<h5>Doctor registration</h5>
		            			    	<Doctor {...this.props} />
		            			    </div>
		            			}
		            			<div>

		            			</div>
		            	    </div>
		            	</div>
		            </div>
    		    <Footer />
            </div>
		)
	}
}
export default Register