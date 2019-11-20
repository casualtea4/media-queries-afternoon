import React, {Component} from 'react';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      toggle: false
    }
  }

    toggleHandler= () => {
      this.setState({
        toggle:!this.state.toggle
      })
    }
  
  render(){
  return (
    <div className="App">
      <div class='container'>
      <img src ={pic} alt='gentleman stuff' id='pic'/>
       <div class = 'centered'>
        <h3>Welcome To Our Studio!</h3>
        <h2>IT'S NICE TO MEET YOU</h2>
        <button class='button'>TELL ME MORE</button>
       </div>
      </div>
      {!this.state.toggle
      ?(<header id='header'>
        <div id='logo'>Start Bootstrap</div>
        <nav id='nav-links'>
          <a>SERVICES</a>
          <a>PORTFOLIO</a>
          <a>ABOUT</a>
          <a>TEAM</a>
          <a>CONTACT</a>
        </nav>
        <FontAwesomeIcon icon='bars' id="bars" onClick={this.toggleHandler}/>
      </header>)
      :(
      <>
       <header id='header'>
        <div id='logo'>Start Bootstrap</div>
        <nav id='nav-links'>
          <a>SERVICES</a>
          <a>PORTFOLIO</a>
          <a>ABOUT</a>
          <a>TEAM</a>
          <a>CONTACT</a>
        </nav>
        <FontAwesomeIcon icon='bars' id="bars" onClick={this.toggleHandler}/>
      <nav id='menu'>
          <a>SERVICES</a>
          <a>PORTFOLIO</a>
          <a>ABOUT</a>
          <a>TEAM</a>
          <a>CONTACT</a>
      </nav></header>
        </>
      )
  }
    </div>
  );
  }
}



 let pic='https://graciouswatch.com/wp-content/uploads/2016/11/accessories.jpg'

export default App;
