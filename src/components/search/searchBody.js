import React from 'react'


class SearchBody extends React.Component {

	render() {
	    const containerStyle = {
	        height: "500px",
	    }
        const inputStyle= {
        	paddingTop: "150px" 
        }

		return (
            <div className="container-fluid" style={containerStyle}>
                <div className="row">
                    <div className="col-md-6 center-div" style={inputStyle}>
                        <h4 className="text-center">Search medicine, doctors, diseases </h4> 
						<div className="input-group">
						    <input type="text" className="form-control form-control-lg shadow" aria-label="Text input with dropdown button"></input>
						    <div className="input-group-append">
						        <button className="btn btn-outline-secondary dropdown-toggle themeColor buttonStyle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select Search</button>
						        <div className="dropdown-menu">
						            <a className="dropdown-item" href="#">Medicine</a>
						            <a className="dropdown-item" href="#">Diseases</a>
						            <a className="dropdown-item" href="#">Doctors</a>
						        </div>
						    </div>
						</div>
                    </div>
                </div>
            </div>
		)
	}
}
export default SearchBody