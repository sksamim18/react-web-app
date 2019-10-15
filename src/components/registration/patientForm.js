import React from 'react'


class Patient extends React.Component {

	render() {
		return (
            <div>
                <form className="needs-validation">
                    <div className="row text-center">
	                    <div className="col-md-12">
							<div className="form-group">
								<label for="fullName">Full Name</label>
								<input type="password" class="form-control" id="fullName" placeholder="Enter your full name">
							    </input>
							</div>
	                    </div>
                        <div className="col-md-6">
							<div className="form-group">
								<label for="mobileNumber">Phone Number</label>
								<input type="password" class="form-control" id="mobileNumber" placeholder="Enter your mobile number">
							    </input>
							</div>
                        </div>
                        <div className="col-md-6">
							<div className="form-group">
								<label for="password">Password</label>
								<input type="password" class="form-control" id="password" placeholder="Enter your password">
							    </input>
							</div>
                        </div>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
		)
	}
}
export default Patient