import React from 'react'
import DateTimePicker from 'react-datetime-picker'


class Header extends React.Component {

    constructor (props) {
    	super(props) 
    	this.state = {
    		currentTime: new Date()
    	}    
    }

    render() { 

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="shadow prescriptionBox">
                            <p>Doctors Name: Some Name</p>
                            <p>Doctors ID: JGDSKCCKH</p>
                            <p>Qualification: Under-graduate</p>
                            <p>Date: 
                            <DateTimePicker value={this.state.currentTime}/>
                            </p>
                        </div>
                        <br></br>
                    </div>
                    <div className="col-md-8">
                        <div className="shadow prescriptionBox">
							<div className="input-group">
								<div className="input-group-prepend">
								<span className="input-group-text" id="">Patient Name</span>
								</div>
								<input type="text" className="form-control"></input>
							</div>
							<br></br>
							<div className="input-group">
								<div className="input-group-prepend">
								<span className="input-group-text" id="">Patient ID(can be changed)</span>
								</div>
								<input type="text" className="form-control"></input>
							</div>
							<br></br>
							<div className="input-group">
								<div className="input-group-prepend">
								<span className="input-group-text" id="">Patient Age</span>
								</div>
								<select className="custom-select" id="inputGroupSelect01">
									<option selected>Choose...</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>							
							</div>
							<br></br>
							<div className="input-group">
								<div className="input-group-prepend">
								<span className="input-group-text" id="">Patient Gender</span>
								</div>
								<select className="custom-select" id="inputGroupSelect01">
									<option selected>Choose...</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>
								<br></br>	
							</div>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}
export default Header