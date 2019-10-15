import React from 'react'

import Navbar from '../navbars/mainNavbar.js'
import Footer from '../footer/mainFooter.js'

import SearchBody from './searchBody.js'


class Search extends React.Component {

    render() {
    	return (
    		<div>
    		    <Navbar />
    		    <SearchBody />
    		    <Footer />
    		</div>
    	)
    }

}
export default Search