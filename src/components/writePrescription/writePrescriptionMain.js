import React from 'react'
import Navbar from '../navbars/mainNavbar.js'
import Footer from '../footer/mainFooter.js'

import Header from './header.js'
import WritePrescriptionBody from './writePrescriptionBody.js'


class WritePrescription extends React.Component {

    render() {
        return  (
            <div>
                <Navbar />
                <div style={{margin: "3%"}} className="text-center">
                    <h5>Write a prescription</h5>
                </div>
                <Header />
                <br></br>
                <WritePrescriptionBody />
                <Footer />
            </div>
        )
    }
}

export default WritePrescription