import React from 'react'

import Cover from '../../images/homecover.jpg'


class SectionA extends React.Component {

    render () {
        const indexCover = {
            height: "550px",
            marginTop: "40px",
            marginBottom: "40px"

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
                        <div className="small-screen text-white text-center" style={homeSmallCard}>
                            <h4>Enter your mobile number</h4><br></br>
                            <div className="form-group">
                                <input type="email" class="form-control shadow" style={{ "border": "0px", "borderRadius": "0px" }} id="exampleFormControlInput1" placeholder="Enter your phone number"></input>
                                <br></br>
                                <button type="submit" class="btn btn-default shadow" style={{"color": "#fff"}}>Press enter</button>
                            </div>
                        </div>
                        <div style={RegistrationForm} class="shadow wide-screen">
                            <form className="wide-screen">
                              <h5>Are you new here. Register now as a doctor</h5>
                              <div className="dropdown-divider"></div>
                              <div className="form-group">
                                <label for="exampleFormControlInput1">Enter phone number</label>
                                <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="+91**********"></input>
                              </div>
                              <div className="form-group">
                                <label for="exampleFormControlInput2">Enter address</label>
                                <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Enter your address"></input>
                              </div>
                              <div class="form-group">
                                <label for="exampleFormControlInput3">Enter your degree</label>
                                <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Enter your qualification"></input>
                              </div>
                              <button type="submit" class="btn btn-primary shadow themeColor" style={{border: "none"}}>Submit</button>
                            </form>    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SectionA