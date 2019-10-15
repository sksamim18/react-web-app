import React from 'react'
import Navbar from '../navbars/mainNavbar.js'
import Footer from '../footer/mainFooter.js'


class Login extends React.Component {

    render() {
        const boxStyle = {
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "10px",
            padding: "30px"
        }

        return (
            <div>
                <Navbar />
                    <div className="container">
                        <br></br><br></br>
                        <div className="row">
                            <div className="col-md-4 text-center shadow" style={boxStyle}>
                                <h4>Enter your details</h4>
                                {this.props.loginType == "normal" && <h5>Patient login</h5>}
                                {this.props.loginType == "pharmacy" && <h5>Pharmacy login</h5>}
                                {this.props.loginType == "doctor" && <h5>Doctor login</h5>}
                                <div>
                                    <form>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter email">
                                            </input>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword2">Password</label>
                                            <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password">
                                            </input>
                                        </div>
                                        {   this.props.loginType == "normal" &&
                                            <input type="hidden" class="form-control" placeholder="Password" value="{this.props.loginType}">
                                            </input>
                                        }
                                        {   this.props.loginType == "pharmacy" &&
                                            <input type="hidden" class="form-control" placeholder="Password" value="{this.props.loginType}">
                                            </input>
                                        }
                                        {   this.props.loginType == "doctor" &&
                                            <input type="hidden" class="form-control" placeholder="Password" value={this.props.loginType}>
                                            </input>
                                        }
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        )
    }
}
export default Login