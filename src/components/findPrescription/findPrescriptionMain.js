import React from 'react'

import Navbar from '../navbars/mainNavbar.js'
import Footer from '../footer/mainFooter.js'
import FindPrescriptionBody from './findPrescriptionBody.js'


class FindPrescription extends React.Component {

    render () {
    	return (
    		<div>
    		    <Navbar />
                <FindPrescriptionBody />
    		    <Footer />
    		</div>
    	)
    }

}
export default FindPrescription