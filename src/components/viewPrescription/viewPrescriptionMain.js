import React from 'react'
import Navbar from '../navbars/mainNavbar.js'
import Footer from '../footer/mainFooter.js'
import Prescription from './prescriptionBody.js'


class ViewPrescription extends React.Component {
    render () {
    	return (
    		<div>
	    		<Navbar />
	    		<Prescription />
	            <Footer />
            </div>
    	)
    }
}
export default ViewPrescription