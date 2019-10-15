import React from 'react'
import Navbar from '../navbars/mainNavbar.js'
import Footer from '../footer/mainFooter.js'
import SectionA from './sectionA.js'
import SectionB from './sectionB.js'
import SectionC from './sectionC.js'


class IndexMain extends React.Component {
    
    render () {
        return (
            <div>
                <Navbar />
                <SectionA />
                <SectionB />
                <SectionC />
                <Footer />
            </div>
        )
    }
}
export default IndexMain