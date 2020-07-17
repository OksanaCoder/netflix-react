import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import Btn from './components/Btn';
import Comments from './components/Comments';
import Details from './components/Details';
import Registration from './components/Registration';
import Cart from './components/Cart';
import Login from './components/Login';
import { BrowserRouter, Route  } from 'react-router-dom';

class App extends Component {

  state = {
    text : '',
    show: false
  }
  componentDidMount = () =>{
    console.log('com meth');
  }
  buttonClick = () => {
    this.setState({
      text : 'something',
      show: !this.state.show
    })
  }

  componentDidUpdate = () => {
    if(this.state == 'something else') {
      this.setState({
        text: this.state.text + ' else'
      })
    }
  }
  render () {
   
    return (
     <BrowserRouter>
          <NavBar />
          <Route path="/" exact component={(props) => <Main title="TV Shows"/>}/>
          <Route path="/comments" exact component={(props) => <Comments />}/>
          <Route path="/details/:imdbID" component={Details}/>
          <Route path='/registration' exact component={Registration}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/cart' exact component={Cart}/>
      </BrowserRouter>
    );

  }
  
}

export default App;
