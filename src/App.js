import React from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import IndexMain from './components/index/indexMain.js'
import Login from './components/login/login.js'
import Register from './components/registration/registrationMain.js'
import ViewPrescription from './components/viewPrescription/viewPrescriptionMain.js'
import FindPrescription from './components/findPrescription/findPrescriptionMain.js'
import WritePrescription from './components/writePrescription/writePrescriptionMain.js'
import Search from './components/search/search.js'
import SearchResult from './components/searchResult/searchResult.js'
import DashboardForDoctor from './components/dashboard/dashboardForDoctor.js'
import DashboardForPharmacy from './components/dashboard/dashboardForPharmacy.js'


import style from './assets/style.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'



class App extends React.Component {

    render () {
        return(
            <Router>
                <Route path="/" exact component={IndexMain} />
                <Route path="/login" render={(props) => <Login {...props} loginType="normal"/>} />
                <Route path="/pharmacy-login" render={(props) => <Login {...props} loginType="pharmacy"/>} />
                <Route path="/doctor-login" render={(props) => <Login {...props} loginType="doctor"/>} />
                <Route path="/registration" render={(props) => <Register {...props} loginType="normal"/>} />
                <Route path="/pharmacy-registration" render={(props) => <Register {...props} loginType="pharmacy"/>} />
                <Route path="/doctor-registration" render={(props) => <Register {...props} loginType="doctor"/>} />
                <Route path="/view-prescption" component={ViewPrescription} />
                <Route path="/find-prescription" component={FindPrescription} />
                <Route path="/write-prescription" component={WritePrescription} />
                <Route path="/search" component={Search} />
                <Route path="/search-result-medicine/:search" render={(props) => <SearchResult {...props} searchType="medicine"/>} /> 
                <Route path="/search-result-diseases/:search" render={(props) => <SearchResult {...props} searchType="diseases"/>} /> 
                <Route path="/search-result-doctor/:search" render={(props) => <SearchResult {...props} searchType="doctor"/>} />
                <Route path="/dashboard-for-doctor" component={DashboardForDoctor} />
                <Route path="/dashboard-for-pharmacy" component={DashboardForPharmacy} />
            </Router>
        )
    }
}
export default App;
