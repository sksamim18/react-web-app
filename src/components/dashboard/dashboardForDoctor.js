import React from 'react'

import Navbar from '../navbars/mainNavbar.js'
import Footer from '../footer/mainFooter.js'

import DoctorMain from './doctorMain.js'


class DashboardForDoctor extends React.Component {

    render() {
        return (
            <div>
                 <Navbar />
                 <DoctorMain />
                 <Footer />
            </div>
        )
    }
}
export default DashboardForDoctor