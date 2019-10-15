import React from 'react'


class FindPrescriptionBody extends React.Component {
    
    render () {

        const DropDown = {
        	position: "absolute",
        	transform: "translate3d(627px, -2px, 0px); top: 0px", 
        	left: "0px",
        	willChange: "transform"
        }

        const buttonStyle = {
        	color: "#fff",
            border: "0px",
            borderRadius: "0px",
        }


    	return (
            <div className="container">
                <br></br><br></br>
            	<div className="row">
                    <div className="col-md-5 center-div text-center">
                        <h4> Find a single prescription or find a patient prescription in bulk</h4>
                        <br></br>
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Enter prescription ID</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter ID">
                                </input>
                            </div>
                            <button type="submit" className="btn btn-primary">Find prescription</button>
                        </form>
                        <br></br>
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Enter patient ID</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter ID">
                                </input>
                            </div>
                            <button type="submit" className="btn btn-primary">Find prescription</button>
                        </form>
                    </div>
                </div>
            </div>
    	)
    }
}
export default FindPrescriptionBody