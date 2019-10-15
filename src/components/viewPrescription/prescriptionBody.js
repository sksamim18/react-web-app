import React from 'react'


class Prescription extends React.Component {
    
    render () {

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 center-div text-center shadow prescriptionStyle">
                            <h5>Prescription Details </h5>
                            <div className="dropdown-divider"></div>
                            <div className="row">
                                <div className="col-md-6 themeFontColor"><p>Patient ID: AJHL48H </p></div>
                                <div className="col-md-6 themeFontColor">
                                    <p>Prescription ID: 2KIYTTYUKL</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 center-div text-center shadow prescriptionStyle">
                            <p className="text-left">Doctor name: Abhinav mittal </p>
                            <p className="text-left">Patient name: Sk Samim</p>
                            <ul className="list-inline text-left">
                                <li className="list-inline-item">Date: 19/11/2019</li>{'\u00A0'}
                                <li className="list-inline-item">Gender: Male</li>{'\u00A0'}
                                <li className="list-inline-item">Age: 23</li>
                            </ul>
                        </div>
                        <div className="col-md-8 center-div text-center shadow prescriptionStyle">
                            <div className="row">
                                <div className="col-md-6">
                                    <h5>Diagnosis </h5><br></br>
                                    <ul class="list-group text-left">
                                        <li class="list-group-item">Cras justo odio</li>
                                        <li class="list-group-item">Dapibus ac facilisis in</li>
                                        <li class="list-group-item">Morbi leo risus</li>
                                        <li class="list-group-item">Porta ac consectetur ac</li>
                                        <li class="list-group-item">Vestibulum at eros</li>
                                    </ul>
                                    <br></br><br></br>
                                    <p>DOCTOR FULL NAME: <br></br> Ankit Singh</p>
                                </div>
                                <div className="col-md-6">
                                    <h5>Treatment</h5><br></br>
                                    <ul class="list-group">
                                        <li class="list-group-item">Cras justo odio</li>
                                        <li class="list-group-item">Dapibus ac facilisis in</li>
                                        <li class="list-group-item">Morbi leo risus</li>
                                        <li class="list-group-item">Porta ac consectetur ac</li>
                                        <li class="list-group-item">Vestibulum at eros</li>
                                    </ul>
                                    <br></br><br></br>
                                    <p>DOCTOR ID: <br></br> 7XHJKLH</p>
                                </div>
                                <div className="col-md-12">
                                    <button type="submit" className="btn btn-primary themeColor noBorderButton">Download prescription</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Prescription
