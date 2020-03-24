import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Fundaciones from './components/Collapsible'

class App extends Component {

  constructor(props) {
    super(props)
    this.fundaciones = new React.createRef();
    this.state = {
      test: ""
    }
  }

  callApi = (ip) => {
    fetch("http://localhost:3100/inicio")
        .then(res => res.text())
        .then(res => this.setState({ test: res }));
    console.log(this.state.test)
  }

  componentWillMount = () => {
    this.callApi("inicio");
  }
  render(props) {
    return (
      <div className="App">
        <div className="container">
          <Fundaciones ref={this.fundaciones}/>
        </div>
      </div>
    )
  }
  
}

export default App;
