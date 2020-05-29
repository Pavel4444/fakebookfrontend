import React, { Component } from 'react';
import Buttony from './component/Button';
import logo from './logo.svg';
import './App.css';
import Editors from './component/Editor/Editor';
import Searchbar from './component/Searchbar/Searchbar';
import Menus from './component/Menu';
import Header from './component/Header';
import Cards from './component/Card/Card';
import PanelMenus from './component/PanelMenus/PanelMenu';
import Toprightbar from './component/Toprightbar/Toprightbar';
import Carousels from './component/Carousel/Carousel';
import TopProfile from './component/Topprofile/Topprofile';
import ScrollPanel from './component/ScrollPanel/Scrollpanel';
import FullCalendars from './component/FullCalendar/FullCalendar';
import Calendars from './component/Calendar/Calendar';
import Sidebars from './component/Sidebar/Sidebar';
import Kantegas from './component/kantega/kantega';
import DataTableDemo from './component/Datatable/Datatable';
import DataTableSelectionDemo from './component/Datatable/Selection';
import {Card} from 'primereact/card';
import Sticky from 'react-stickynode';
import {Button} from 'primereact/button';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homes from './component/Home/Home';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';








class App extends Component {

  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      showMessage: false
    };

  }

  _showMessage = (bool) => {
    this.setState({
      showMessage: bool
    });
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };





  render() {
    const { width } = this.state;
    const isMobile = width <= 750;

    if (isMobile) {
      return (


        <div className="p-grid">

          <div className="p-col-12 p-md-12" style={{ backgroundColor: '#4095eb' }}>



            <div className="p-grid p-justify-between" style={{ marginTop: '.25em' }}>

              <div className="p-col-12 p-md-1" style={{ textAlign: 'center' }}><img src='http://www.talencia.cat/mypics/max/2/21994_facebook-logo-clear-background.jpg' height="42" width="42" /></div>
              <div className="p-col-12 p-md-4" style={{ textAlign: 'center' }}><Searchbar /></div>
              <div className="p-col-12 p-md-2" style={{ textAlign: 'center' }}>
                <div className="p-grid p-justify-between" style={{ marginTop: '.25em' }}>
                  <div className="p-col-1" style={{ marginLeft: '.50em' }}> <Sidebars /></div>
                  <div className="p-col-7" style={{ textAlign: 'right', marginRight: '.50em' }}> <Toprightbar /> </div>
                </div>


              </div>

            </div>




          </div>


          <div className="p-col-12 p-md-2" style={{ backgroundColor: '#f2f2f2', borderRight: 'solid', borderColor: 'white' }}>



            <div className="p-col-12" style={{ borderBottom: 'solid', borderColor: 'white' }} >
              <TopProfile />
            </div>

          </div>


          <div className="p-col-12 p-md-8" style={{ backgroundColor: '#f2f2f2' }}>
            <div className="p-col-12" style={{ borderBottom: 'solid', borderColor: 'white' }} > <DataTableDemo /> </div>

            <div className="p-col-12" >
              <h2 style={{ textAlign: 'center' }}>Main Feed</h2>
              <Cards />

            </div>

          </div>




          <div className="p-col-12 p-md-2" style={{ backgroundColor: '#f2f2f2', borderLeft: 'solid', borderColor: 'white' }} >


            <div className="p-col-12" style={{ backgroundColor: '#f2f2f2', borderBottom: 'solid', borderColor: 'white', marginTop: '.30em' }}>
              <Carousels />
            </div>
            <div className="p-col-12" style={{ borderBottom: 'solid', borderColor: 'white', marginTop: '.30em' }} >
              <ScrollPanel />
            </div>
            <div className="p-col-12" style={{ backgroundColor: '#f2f2f2', marginTop: '.30em' }}>
              <PanelMenus/>
            </div>



          </div>

          <div className="p-col-12 p-md-12" style={{ backgroundColor: '#4095eb', height: '60px' }}> </div>

        </div>
      );



    } else {
      return (


        <div className="p-grid">

          <div className="p-col-12 p-md-12" style={{ backgroundColor: '#4095eb' }}>



            <div className="p-grid p-justify-between" style={{ marginTop: '.25em' }}>

              <div className="p-col-12 p-md-1" style={{ textAlign: 'center' }}><img src='http://www.talencia.cat/mypics/max/2/21994_facebook-logo-clear-background.jpg' height="42" width="42" /></div>
              <div className="p-col-12 p-md-4" style={{ textAlign: 'center' }}><Searchbar /></div>
              <div className="p-col-12 p-md-2" style={{ textAlign: 'center' }}><Toprightbar /></div>

            </div>




          </div>


          <div className="p-col-12 p-md-2" style={{ backgroundColor: '#f2f2f2', borderRight: 'solid', borderColor: 'white' }}>


            <Sticky>
              <div className="p-col-12" style={{ borderBottom: 'solid', borderColor: 'white' }} >
                <TopProfile />
              </div>
              <div className="p-col-12" style={{ textAlign: 'left', marginTop: '.80em' }}>
                <Menus />
              </div>
            </Sticky>
          </div>


          <div className="p-col-12 p-md-8" style={{ backgroundColor: '#f2f2f2' }}>
            <div className="p-grid p-justify-center">
              <div className="p-col-12" style={{ borderBottom: 'solid', borderColor: 'white' }}> <Editors /> </div>
              <div className="p-col-12 p-md-8"> <h2 style={{ textAlign: 'center' }}>Main Feed</h2><Cards/></div>
            </div>
          </div>




          <div className="p-col-12 p-md-2" style={{ backgroundColor: '#f2f2f2', borderLeft: 'solid', borderColor: 'white' }} >

            <Sticky>
              <div className="p-col-12" style={{ backgroundColor: '#f2f2f2', borderBottom: 'solid', borderColor: 'white', marginTop: '.30em' }}>
                <Carousels />
              </div>
              <div className="p-col-12" style={{ borderBottom: 'solid', borderColor: 'white', marginTop: '.30em' }} >
                <ScrollPanel />
              </div>
              <div className="p-col-12" style={{ backgroundColor: '#f2f2f2', marginTop: '.30em' }}>
                <PanelMenus/>
              </div>
            </Sticky>


          </div>

          <div className="p-col-12 p-md-12" style={{ backgroundColor: '#4095eb', height: '60px' }}> </div>

        </div>


      );
    }
  }
}

export default App;
