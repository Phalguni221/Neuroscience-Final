const React = require('react');
const Def = require('../default')
// const App = require('../App')

// import React from 'react';
// import Def from '../default';
import Newinfo from './newinfo'
// import Home from './website/home'
// import Login from './website/login'
// import Tech from './tech'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import styled from 'styled-components';


function User ({ children, title }) {

    return (
        <html>
            <head>
                <link rel="stylesheet" href="/css/neurostyle.css" />
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <title>Hello</title>
            </head>
              
      
                <header>

                </header>
                {/* different links go here*/}
                 {/* <Def title={App}> 
                    {children}
                </Def> */}
                 <div class= "Wrapper">
                <h1>Neurosense:Where Neuroscience Makes Sense</h1>
                </div>
                
        <body>
        <div class = "navbar">
            <p>
             <form method="GET" action="home">
             <text><input type="Submit" name="home" class="btn-primary" value="home"/></text>
             </form> 
             </p>
             <br></br>

             <p>
               <form method="GET" action="NewInfo">
             <text><input type="Submit" name="newinfo" class="btn-primary" value="newinfo"/></text>
             </form> 
          <br></br>
          <br></br>
             </p>

              <p>
             <form method="GET" action="tech">
             <text><input type="Submit" name="tech" class="btn-primary" value="tech"/></text>
             </form> 
             <br></br>
             <br></br>
              </p>

              <p>
             <form method="GET" action="login">
             <text><input type="Submit" name="login" class="btn-primary" value="login"/></text>
             </form> 
          <br></br>
          <br></br>
              </p>

              <p>
             <form method="GET" action="braingame">
             <text><input type="Submit" name="braingame" class="btn-primary" value="braingame"/></text>
             </form> 
          <br></br>
          <br></br>
              </p>

               <p>
             <form method="GET" action="ContactInfo">
             <text><input type="Submit" name="ContactInfo" class="btn-primary" value="ContactInfo"/></text>
             </form> 
          <br></br>
          <br></br>
              </p> 
            </div>
            <div className = "Box">
              <p>Hello</p>
              <p>Welcome to the site!</p>
              <p>Here, you can find lots of information about neuroscience through the form of articles! Check out New Info and Tech to access these various articles!</p>
              <p>Welcome to the site!</p>
             </div>

           
            </body>   


           
                <footer>
                <br></br>
<div>
<h3>
   Want to find more information from the creator of the website? Find her information located below!
 </h3>
 <h3>
     Email address: Phalguni221@gmail.com
 </h3>

 <h3>
     Phone number: 732-259-1884
 </h3>

<h3>
LinkedIn: https://www.linkedin.com/in/sriya-bhamidipati/
</h3>
</div>
                </footer>
              
   
        </html>
    )
}

module.exports = User