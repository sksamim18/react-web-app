import React from 'react'


class PharmacyMain extends React.Component {
    constructor(props) {
    	super(props)
    	this.state = {
    		activeTab: "prescription"
    	}
    	this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        this.setState({
            activeTab: event
        });
    }

    render () {
    	return (
            <div className="container">
                <br></br><br></br>
                <div className="row text-center">
                    <div className="col-md-12">
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link tab-color"
                                    href="#" 
                                    onClick={() => this.handleClick("settings")} 
                                    style={this.state.activeTab == "settings"? {color: "#17a2b8"}: {}} href="#">Settings</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link tab-color" 
                                    href="#" 
                                    onClick={() => this.handleClick("appointments")}
                                    style={this.state.activeTab == "appointments"? {color: "#17a2b8"}: {}}>Appointments</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link tab-color"
                                    href="#" 
                                    onClick={() => this.handleClick("prescription")}
                                    style={this.state.activeTab == "prescription"? {color: "#17a2b8"}: {}}>Prescriptions</a>
                            </li>
                        </ul>
                        <div className="dropdown-divider" style={{borderTop: "3px solid #6c757d40"}}></div>
                        <div className="dashboardBody">
                            {this.state.activeTab == "settings" && <Settings {...this.props} />}
                            {this.state.activeTab == "appointments" && <Appointment {...this.props} />}
                            {this.state.activeTab == "prescription" && <Prescription {...this.props} />}
                        </div>
                    </div>
                </div>
            </div>
    	)
    }
}
export default PharmacyMain


class Settings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           text: "Hello"
        }
    }

    componentDidMount() {
        this.setState({
            text: "Hello"
        });
    }

    render() {
        return (
            <div className="container">
                <br></br><br></br>
                <div className="row">
                    <div className="col-md-8 center-div">
                        <ul class="list-group">
                            <li class="list-group-item searchResultBox text-left shadow-sm">
                                Username: GYHJKGN {'\u00A0\u00A0\u00A0\u00A0\u00A0'}
                                <a href="#" class="btn btn-info btn-sm">Change Username </a>
                            </li>
                            <li class="list-group-item searchResultBox text-left shadow-sm">
                                Phone Number: 9067545678 {'\u00A0\u00A0\u00A0\u00A0\u00A0'}
                                <a href="#" class="btn btn-info btn-sm"> Change phone number </a>
                            </li>
                            <li class="list-group-item searchResultBox text-left shadow-sm">
                                Password: ********* {'\u00A0\u00A0\u00A0\u00A0\u00A0'}
                                <a href="#" class="btn btn-info btn-sm">Change password </a>
                            </li>
                            <li class="list-group-item searchResultBox text-left shadow-sm">
                                Deactivate account:  {'\u00A0\u00A0\u00A0\u00A0\u00A0'}
                                <a href="#" class="btn btn-info btn-sm">Deactivate now </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

class Appointment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           text: "Hello"
        }
    }

    componentDidMount() {
        this.setState({
            text: "Hello"
        });
    }

    render() {
        return (
            <div className="container">
                <br></br><br></br>
                <h4>Prescription list</h4>
                <div className="row">
                    <div className="col-md-8 center-div">
                        <ul class="list-group">
                            <li class="list-group-item searchResultBox text-left shadow-sm">
                                <p>Appointed on: 11/12/2019</p>
                                <p>Diagnosis: Fever, cough and cold </p>
                                <a href="#" class="btn btn-info btn-sm"> View all prescription </a>
                            </li>
                            <li class="list-group-item searchResultBox text-left shadow-sm">
                                <p>Appointed on: 11/12/2019</p>
                                <p>Diagnosis: Fever, cough and cold </p>
                                <a href="#" class="btn btn-info btn-sm"> View all prescription </a>
                            </li>
                            <li class="list-group-item searchResultBox text-left shadow-sm">
                                <p>Appointed on: 11/12/2019</p>
                                <p>Diagnosis: Fever, cough and cold </p>
                                <a href="#" class="btn btn-info btn-sm"> View all prescription </a>
                            </li>
                            <li class="list-group-item searchResultBox text-left shadow-sm">
                                <p>Patient Name: Ankita Sen</p>
                                <p>Appointed on: 11/12/2019</p>
                                <p>Diagnosis: Fever, cough and cold </p>
                                <a href="#" class="btn btn-info btn-sm"> View all prescription </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

class Prescription extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           text: "Hello"
        }
    }

    componentDidMount() {
        this.setState({
            text: "Hello"
        });
    }
    render() {
        return (
            <div className="container">
                <br></br><br></br>
                <h4>Prescription list</h4>
                <div className="row">
                    <div className="col-md-8 center-div">
                        <ul class="list-group">
                            <li class="list-group-item searchResultBox text-left shadow-sm">
                                <p>Patient Name: Ankita Sen</p>
                                <p>Prescription ID: HGHHMFMJF</p>
                                <p>Diagnosis: Fever, cough and cold </p>
                                <a href="#" class="btn btn-info btn-sm"> View full </a>
                            </li>
                            <li class="list-group-item searchResultBox text-left shadow-sm">
                                <p>Patient Name: Ankita Sen</p>
                                <p>Prescription ID: HGHHMFMJF</p>
                                <p>Diagnosis: Fever, cough and cold </p>
                                <a href="#" class="btn btn-info btn-sm"> View full </a>
                            </li>
                            <li class="list-group-item searchResultBox text-left shadow-sm">
                                <p>Patient Name: Ankita Sen</p>
                                <p>Prescription ID: HGHHMFMJF</p>
                                <p>Diagnosis: Fever, cough and cold </p>
                                <a href="#" class="btn btn-info btn-sm"> View full </a>
                            </li>
                            <li class="list-group-item searchResultBox text-left shadow-sm">
                                <p>Patient Name: Ankita Sen</p>
                                <p>Prescription ID: HGHHMFMJF</p>
                                <p>Diagnosis: Fever, cough and cold </p>
                                <a href="#" class="btn btn-info btn-sm"> View full </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}