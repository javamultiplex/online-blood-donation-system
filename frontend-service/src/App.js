import React from 'react';
import './App.css';
import LogIn from './LogIn/LogIn';
import Registration from './Registration/Registration';
import SearchDonor from './SearchDonor/SearchDonor';
import ActiveDonors from './Admin/ActiveDonors/ActiveDonors';
import NotActiveDonors from './Admin/NotActiveDonors/NotActiveDonors';
import DonorFullDetail from './Admin/DonorFullDetail/DonorFullDetail';
import SearchDonors from './Admin/SearchDonors/SearchDonors';
import AdminNeedBlood from './Admin/AdminNeedBlood/AdminNeedBlood';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact'
import {Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faUsers,
  faEnvelope,
  faUser,
  faLock,
  faPhone,
  faGlobe,
  faSearch,
  faUserPlus,
  faBed,
  faTachometerAlt,
  faSignOutAlt,
  faCogs,
  faPlus,
  faUniversity,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons';
import NeedBlood from './NeedBlood/NeedBlood';
import Admin from './Admin/Admin';
import UpdateStatus from './Admin/UpdateStatus/UpdateStatus';
import MessageDetail from './Admin/MessageDetail/MessageDetail';
import AddCountry from './Admin/AddCountry/AddCountry';
import AddState from './Admin/AddState/AddState';
import AddCity from './Admin/AddCity/AddCity';
import AddArea from './Admin/AddArea/AddArea';
import ViewCountry from './Admin/ViewCountry/ViewCountry';
import ViewState from './Admin/ViewState/ViewState';
import ViewCity from './Admin/ViewCity/ViewCity';
import ViewArea from './Admin/ViewArea/ViewArea';
library.add(faHome,
  faUsers,
  faEnvelope,
  faUser,
  faLock,
  faPhone,
  faGlobe,
  faSearch,
  faUserPlus,
  faBed,
  faTachometerAlt,
  faSignOutAlt,
  faCogs,
  faPlus,
  faUniversity,
  faTrashAlt);

class App extends React.Component {

  render() {
    return (
      <>
        {/* <div className="text-center m-3 ">
          <img src={banner} width="100%" height="400px" alt="Banner " />
        </div> */}
        <Route path="/register" exact strict component={Registration} />
        <Route path="/admin-login" exact strict component={LogIn} />
        <Route path="/" exact strict component={Home} />
        <Route path="/about-us" exact strict component={About} />
        <Route path="/contact-us" exact strict component={Contact} />
        <Route path="/search-donor" exact strict component={SearchDonor} />
        <Route path="/need-blood" exact strict component={NeedBlood} />
        <Route path="/admin" exact strict component={Admin} />
        <Route path="/admin/need-blood" exact strict component={AdminNeedBlood} />
        <Route path="/admin/active-donors" exact strict component={ActiveDonors} />
        <Route path="/admin/not-active-donors" exact strict component={NotActiveDonors} />
        <Route path="/admin/donor-full-detail/:id" exact strict component={DonorFullDetail} />
        <Route path="/admin/search-donors" exact strict component={SearchDonors} />
        <Route path="/admin/update-status" exact strict component={UpdateStatus} />
        <Route path="/admin/message-detail" exact strict component={MessageDetail} />
        <Route path="/admin/add-country" exact strict component={AddCountry} />
        <Route path="/admin/add-state" exact strict component={AddState} />
        <Route path="/admin/add-city" exact strict component={AddCity} />
        <Route path="/admin/add-area" exact strict component={AddArea} />
        <Route path="/admin/view-country" exact strict component={ViewCountry}/>
        <Route path="/admin/view-state" exact strict component={ViewState}/>
        <Route path="/admin/view-city" exact strict component={ViewCity}/>
        <Route path="/admin/view-area" exact strict component={ViewArea}/>
      </>
    );
  }

}

export default App;
