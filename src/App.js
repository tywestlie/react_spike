import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {
 contructor(){
   this.state = {
     projects: [
       {
         title: 'Buisness Website',
         category: 'Web Design'
       },
       {
         title: 'Social App',
         category: 'Mobile Development'
       },
       {
         title: 'Ecommerce Shopping Cart',
         category: 'Web Development'
       }
     ]
   }
 }
  render() {
    return (
      <div className="App">
      My App
      <Projects/>
      </div>
    );
  }
}

export default App;
