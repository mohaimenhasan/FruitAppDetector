import React, {Component} from 'react';
import MainScreen from "./Components/ImgDetection";
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentScreen: []
    }
  }

  componentDidMount() {
    this.setState({
      currentScreen: <MainScreen appContext={this}/>
    })
  }

  render(){
    return (
        <div className="App">
          {this.state.currentScreen}
        </div>
    );
  }
}

export default App;