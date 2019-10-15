import React from 'react'

import Navbar from '../navbars/mainNavbar.js'
import Footer from '../footer/mainFooter.js'

import PharmacyMain from './pharmacyMain.js'	

class DashboardForPharmacy extends React.Component {

    render () {
    	return (
            <div>
                 <Navbar />
                 <PharmacyMain />
                 <Footer />
            </div>
    	)
    }

}
export default DashboardForPharmacy