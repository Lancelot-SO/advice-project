import React from "react";
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = { advice: ''};
  componentDidMount(){
    this.fetchAdvice();
  }

  fetchAdvice =() => {
    axios.get('https://api.adviceslip.com/advice')
    .then((response) => {
      const { advice } = response.data.slip;
      this.setState({ advice })//this will set the advice to the state on line 6
      //then we can access the advice in our UI.
    })
    .catch((error) => {
      console.log(error);
    })
  }
  render() {
    const { advice } = this.state // by destruction it we can then access advice without undefined error
    return (
      <h1>{ advice }</h1>
    );
  }
}
export default App;  