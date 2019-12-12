// import React from 'react'
// import domain from '../../tools/utils'


// class Pharmacy extends React.Component {
//     constructor(props) {
//         super(props) {
//         this.state = {
//             full_name: "",
//             phone_number: "",
//             password: "",
//             cerification: "",
//             work_ex: 1,
//             finalformsubmitted: false,
//             message: ""
//         }
//         this.handleChange = this.handleChange.bind(this)
//         this.submitForm = this.submitForm.bind(this)
//         this.finalFormSubmit = this.finalFormSubmit.bind(this)

//     }
//     handleChange(event) {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     }
//     submitForm(event) {
    
//     }
// 	render() {
// 		return (
//             <div>
//                 <form className="needs-validation">
//                     <div className="row text-center">
// 	                    <div className="col-md-12">
// 							<div className="form-group">
// 								<label for="fullName">Full Name</label>
// 								<input 
// 									type="text" 
// 									class="form-control" 
// 									id="fullName" 
// 									placeholder="Enter your full name"
//                                     name="full_name"
//                                     onChange={this.handleChange}
// 								/>
// 							</div>
// 	                    </div>
//                         <div className="col-md-6">
// 							<div className="form-group">
// 								<label for="qualificationDetails">Qualification</label>
// 								<input 
// 									type="text" 
// 									class="form-control" 
// 									id="qualificationDetails" 
// 									placeholder="Your degree"
// 									name="cerification"
// 									onChange={this.handleChange}
// 							    />
// 							</div>
//                         </div>
//                         <div className="col-md-6">
// 							<div className="form-group">
// 								<label for="yearsOfExperience">Years of experience</label>
// 								<input 
// 									type="text" 
// 									class="form-control" 
// 									id="yearsOfExperience" 
// 									placeholder="Yrs of exp."
// 									name="work_ex"
// 									onChange={this.handleChange}
// 							    />
// 							</div>
//                         </div>
//                         <div className="col-md-6">
// 							<div className="form-group">
// 								<label for="mobileNumber">Phone Number</label>
// 								<input 
// 									type="text" 
// 									class="form-control" 
// 									id="mobileNumber" 
// 									placeholder="Enter your mobile number"
// 									name="phone_number"
// 									onChange={this.handleChange}
// 							    />
// 							</div>
//                         </div>
//                         <div className="col-md-6">
// 							<div className="form-group">
// 								<label for="password">Password</label>
// 								<input 
// 									type="password" 
// 									class="form-control" 
// 									id="password" 
// 									placeholder="Enter your password"
// 									name="password"
// 									onChange={this.handleChange}
// 							    />
// 							</div>
//                         </div>
// 					</div>
// 					<button type="submit" className="btn btn-primary">Submit</button>
//                 </form>
//             </div>
// 		)
// 	}
// }
// export default Pharmacy