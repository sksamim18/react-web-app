import React from 'react'


class DoctorMain extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: "patientRecord"
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(tabType) {
        this.setState({
            activeTab: tabType
        });
    }

    render() {
        const tabStyle = {
            color: "#17a2b8 !important"
        }

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
                                    onClick={() => this.handleClick("patientRecord")}
                                    style={this.state.activeTab == "patientRecord"? {color: "#17a2b8"}: {}}>Patient record</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link tab-color"
                                    href="#" 
                                    onClick={() => this.handleClick("prescription")}
                                    style={this.state.activeTab == "prescription"? {color: "#17a2b8"}: {}}>Prescriptions</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link tab-color"
                                    href="#" 
                                    onClick={() => this.handleClick("account")} 
                                    style={this.state.activeTab == "account"? {color: "#17a2b8"}: {}}>Account</a>
                            </li>
                        </ul>
                        <div className="dropdown-divider" style={{borderTop: "3px solid #6c757d40"}}></div>
                        <div className="dashboardBody">
                            {this.state.activeTab == "settings" && <Settings {...this.props} />}
                            {this.state.activeTab == "patientRecord" && <PatientRecord {...this.props} />}
                            {this.state.activeTab == "prescription" && <Prescription {...this.props} />}
                            {this.state.activeTab == "account" && <Account {...this.props} />}
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}
export default DoctorMain


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
                                Full name: Lorsum Epsum {'\u00A0\u00A0\u00A0\u00A0\u00A0'}
                                <a href="#" class="btn btn-info btn-sm"> Change full name </a>
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

class PatientRecord extends React.Component {
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
                <h4>Patient list</h4>
                <div className="row">
                    <div className="col-md-8 center-div">
                        <ul class="list-group">
                            <li class="list-group-item searchResultBox text-left shadow-sm">
                                <p>Patient Name: Ankita Sen</p>
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
                            <li class="list-group-item searchResultBox text-left shadow-sm">
                                <p>Patient Name: Ankita Sen</p>
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

class Account extends React.Component {
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
                                Full Name: Sk Samim Rana {'\u00A0\u00A0\u00A0\u00A0\u00A0'}
                                <a href="#" class="btn btn-info btn-sm">Edit Full Name </a>
                            </li>
                            <li class="list-group-item searchResultBox text-left shadow-sm">
                                Address: santrgachi, howrah-711111 {'\u00A0\u00A0\u00A0\u00A0\u00A0'}
                                <a href="#" class="btn btn-info btn-sm"> Edit Address </a>
                            </li>
                            <li class="list-group-item searchResultBox text-left shadow-sm">
                                Qualification: MBBS {'\u00A0\u00A0\u00A0\u00A0\u00A0'}
                                <a href="#" class="btn btn-info btn-sm">Edit qualification  </a>
                            </li>
                            <li class="list-group-item searchResultBox text-left shadow-sm">
                                Years of experience: 10  {'\u00A0\u00A0\u00A0\u00A0\u00A0'}
                                <a href="#" class="btn btn-info btn-sm">Change years of exp. </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}