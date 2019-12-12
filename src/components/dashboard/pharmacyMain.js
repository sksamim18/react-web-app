import React from 'react'


class PharmacyMain extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: "search medicine"
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
                                    onClick={() => this.handleClick("medicine available")}
                                    style={this.state.activeTab == "medicine available"? {color: "#17a2b8"}: {}}>Medicine Available</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link tab-color"
                                    href="#" 
                                    onClick={() => this.handleClick("search medicine")}
                                    style={this.state.activeTab == "search medicine"? {color: "#17a2b8"}: {}}>Medicine Search</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link tab-color"
                                    href="#" 
                                    onClick={() => this.handleClick("report")}
                                    style={this.state.activeTab == "report"? {color: "#17a2b8"}: {}}>Report</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link tab-color"
                                    href="#" 
                                    onClick={() => this.handleClick("manage medicine")}
                                    style={this.state.activeTab == "manage medicine"? {color: "#17a2b8"}: {}}>Manage Medicine</a>
                            </li>
                        </ul>
                        <div className="dropdown-divider" style={{borderTop: "3px solid #6c757d40"}}></div>
                        <div className="dashboardBody">
                            {this.state.activeTab == "settings" && <Settings {...this.props} />}
                            {this.state.activeTab == "medicine available" && <MedicineAvailable {...this.props} />}
                            {this.state.activeTab == "search medicine" && <SearchMedicine {...this.props} />}
                            {this.state.activeTab == "report" && <Report {...this.props} />}
                            {this.state.activeTab == "manage medicine" && <ManageMedicine {...this.props} />}
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

class MedicineAvailable extends React.Component {
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
                <h4>Available Medicine</h4>
                <div className="row">
                    <div className="col-md-1 shadow-sm bg-white">A</div>
                    <div className="col-md-1 shadow-sm bg-white">B</div>
                    <div className="col-md-1 shadow-sm bg-white">C</div>
                    <div className="col-md-1 shadow-sm bg-white">D</div>
                    <div className="col-md-1 shadow-sm bg-white">E</div>
                    <div className="col-md-1 shadow-sm bg-white">A</div>
                    <div className="col-md-1 shadow-sm bg-white">B</div>
                    <div className="col-md-1 shadow-sm bg-white">C</div>
                    <div className="col-md-1 shadow-sm bg-white">D</div>
                    <div className="col-md-1 shadow-sm bg-white">E</div>
                    <div className="col-md-1 shadow-sm bg-white">D</div>
                    <div className="col-md-1 shadow-sm bg-white">E</div>
                </div>
            </div>
        )
    }
}

class SearchMedicine  extends React.Component {
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

class Report extends React.Component {
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
        const containerStyle = {
            height: "500px",
        }
        const inputStyle= {
            paddingTop: "150px" 
        }

        return (
            <div>
                Hello World
            </div>
        )
    }
}

class ManageMedicine extends React.Component {
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
        const containerStyle = {
            height: "500px",
        }
        const inputStyle= {
            paddingTop: "150px" 
        }

        return (
            <div>
                Hello World
            </div>
        )
    }
}