import React from 'react'
import axios from 'axios'

import Cover from '../../images/homecover.jpg'
import domain from '../../tools/utils'


class SectionA extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            full_name: "",
            phone_number: "",
            password: "",
            cerification: "",
            work_ex: 1,
            show_next_form: false,
            finalformsubmitted: false,
            message: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.finalFormSubmit = this.finalFormSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitForm(event) {
        this.setState({
            show_next_form: true  
        })
    }
    finalFormSubmit(event) {
        var data = {
            full_name: this.state.full_name,
            phone_number: this.state.phone_number,
            cerification: this.state.cerification,
            work_ex: parseInt(this.state.work_ex),
            password: this.state.password,
            type: "Pharmacist"
        }
        axios.post(domain + "/register", data)
        .then(res => {
            this.setState({
                finalformsubmitted: true,
                message: res.data.message
            })
        })
        event.preventDefault()
    }
    render () {
        const indexCover = {
            height: "600px",
            marginTop: "40px"

        }
        const homeSmallCard = {
            marginTop: "auto",
            marginBottom: "auto",
            padding: '5%'
        }
        const registerCover = { 
            backgroundColor: "#17a2b8"   
        }
        const RegistrationForm = {
            backgroundColor: '#fff',
            borderRadius: '5px',
            margin: '10%',
            padding: '10%'
        }
        return (
            <div className="container">
                <div className="row shadow-lg" style={indexCover}>
                    <div className="col-md-6 text-center" style={homeSmallCard}>
                        <h1>Prescribe medicine online.</h1>
                        <h5>Handbook for medical professionals.</h5>
                    </div>
                    <div className="col-md-6" style={registerCover}>
                        {/*For mobile version*/}
                        <div className="small-screen text-white text-center" style={homeSmallCard}>
                            <div className="form-group">
                                <br /><br /><br />
                                <h4>Register as a pharmacist</h4><br></br>
                                <a href="/pharmacy-registration" className="btn btn-default shadow" style={{"color": "#fff"}}>Registe Now</a>
                            </div>
                        </div>
                        {/*For desktop version*/}
                        {!this.state.show_next_form && 
                            <div 
                                style={RegistrationForm} 
                                className="shadow wide-screen"
                                onSubmit={this.submitForm}>
                                
                                <form className="wide-screen">
                                    <h5>Are you new here. Register now as a pharmacist</h5>
                                    <div className="dropdown-divider"></div>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput1">Enter full name</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="exampleFormControlInput2" 
                                            placeholder="Enter your full name"
                                            value={this.state.full_name}
                                            required="true"
                                            name="full_name"
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput2">Enter phone number</label>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            id="exampleFormControlInput2" 
                                            placeholder="+91**********"
                                            required="true"
                                            name="phone_number"
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleFormControlInput3">Enter your work experience</label>
                                        <select 
                                            className="custom-select" 
                                            id="exampleFormControlInput3"
                                            name="work_ex"
                                            onChange={this.handleChange}
                                            required>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                                <option value="4">Four</option>
                                                <option value="5">Five</option>
                                                <option value="6">>Above Six</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary shadow themeColor" style={{border: "none"}}>Submit</button>
                                </form>    
                            </div>
                        }
                        {this.state.show_next_form &&
                            <div 
                                style={RegistrationForm} 
                                className="shadow"
                                onSubmit={this.submitForm}>
                                {!this.state.finalformsubmitted &&
                                    <form className="wide-screen" onSubmit={this.finalFormSubmit} >
                                        <h5>Enter few more details</h5>
                                        <div className="dropdown-divider"></div>
                                        <div className="form-group">
                                            <label for="exampleFormControlInput4"></label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="exampleFormControlInput4" 
                                                placeholder="Enter cerification"
                                                value={this.state.cerification}
                                                required="true"
                                                name="cerification"
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleFormControlInput5"></label>
                                            <input 
                                                type="password" 
                                                className="form-control" 
                                                id="exampleFormControlInput5" 
                                                placeholder="Enter your password"
                                                value={this.state.password}
                                                required="true"
                                                name="password"
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary shadow themeColor" style={{border: "none"}}>Submit</button>
                                    </form>
                                }   
                                {this.state.finalformsubmitted && <p>{this.state.message}</p>} 
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default SectionA