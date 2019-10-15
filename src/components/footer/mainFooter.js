import React from 'react'


class Footer extends React.Component {
     
     render () {


     	return (
            <div class="container">
                <footer className="container py-5">
                    <div className="row">
                        <div className="col-md">
                            <h5>How to?</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="#">1. Download prescription</a></li>
                                <li><a className="text-muted" href="#">2. View your prescription</a></li>
                                <li><a className="text-muted" href="#">3. Find Patient prescription record</a></li>
                                <li><a className="text-muted" href="#">4. Write prescription that people can read.</a></li>
                            </ul>
                        </div>
                        <div className="col-md">
                            <h5>Search</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="#">Medicine</a></li>
                                <li><a className="text-muted" href="#">Doctors</a></li>
                                <li><a className="text-muted" href="#">Diseases</a></li>
                                <li><a className="text-muted" href="#">Pharmacy near you</a></li>
                            </ul>
                        </div>
                        <div className="col-md">
                            <h5>About</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="#">Contact us</a></li>
                                <li><a className="text-muted" href="#">Raise tickets</a></li>
                            </ul>
                        </div>
                        <div className="col-md">
                            <h5>Other</h5>
                            <ul className="list-unstyled text-small">
                                <li><a className="text-muted" href="#">Contribute tech</a></li>
                                <li><a className="text-muted" href="#">Blog</a></li>
                                <li><a className="text-muted" href="#">Privacy</a></li>
                                <li><a className="text-muted" href="#">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
     	)
     }
}
export default Footer