import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FoundationFeed from './components/foundationFeed';
import Navbar from './components/navbar'
import Donate from './components/donate'
import Feed from './components/feed'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props);
    this.navbar = React.createRef();
    this.foundation = React.createRef();
    this.changeScreenDonate = this.changeScreenDonate.bind(this);
    this.setScreen = this.setScreen.bind(this);
    this.state = {
      screen: "feed"
    }
  }

  changeScreenNav = (screen) => {
    let aux = this.navbar.current.state.colorMenu;
    this.navbar.current.navNames.map((name) => {
      switch (name) {
        case (screen):
          aux[name] = "#000000";
          this.setState(state => ({screen: name}))
          break;
        default:
          aux[name] = "#787878";
          break;
      }
    })
    this.navbar.current.setState(state => ({colorMenu: aux}));
  }

  changeScreenDonate = () => {
    console.log("hola");
    this.setState(state => ({screen: "donate"}))
  }

  setScreen = () => {
    switch (this.state.screen) {
      case "found":
        return(<FoundationFeed changeScreen={this.changeScreenDonate}/>);
      case "donate":
        return(<Donate />);
      case "feed":
        return(<Feed />);
      default:
        return(<h3>Not page found</h3>)
    }
  }

  render(props) {
    return (
      <Router >
        <div className="App">
          <Navbar ref={this.navbar} changeScreen={this.changeScreenNav} />
          <Switch>
              <Route path="/fundacionesFeed" component={() => <FoundationFeed changeScreen={this.changeScreenDonate} />} />
              <Route path="/donate" component={Donate}/>
              <Route path="/feed" component={Feed}/>
          </Switch>
        </div>
        </Router>
    );
  }
}

export default App;

// TODO: SQUARE AVATAR IMAGE
