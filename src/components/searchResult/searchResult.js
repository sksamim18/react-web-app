import React from 'react'

import Navbar from '../navbars/mainNavbar.js'
import Footer from '../footer/mainFooter.js'
import SearchResultMedicine from './searchResultMedicine.js'
import SearchResultDiseases from './searchResultDiseases.js'
import SearchResultDoctor from './searchResultDoctor.js'


class SearchResult extends React.Component {
    
    render() {

        // console.log(this.props.match.params.search)

    	return (
    		<div>
    			<Navbar />
	    		{this.props.searchType == "medicine" && <SearchResultMedicine {...this.props}/>}
                {this.props.searchType == "diseases" && <SearchResultDiseases {...this.props}/>}
                {this.props.searchType == "doctor" && <SearchResultDoctor {...this.props}/>}
    			<Footer />
    		</div>
    	)
    }
}
export default SearchResult