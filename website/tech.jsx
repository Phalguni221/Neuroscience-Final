const React = require('react')
const Def = require('../default')


function tech (data) {
  console.log(data)
  let techFormatted = data.tech?.map((tech) => {
return (
  <Def>
      
      <div class ="column">        
            <p>{tech.title}</p>
            <p>{tech.author}</p>
            <br></br>
            <br></br>
            <p>{tech.date}</p>
            <p>{tech.link}</p>
            </div> 
            <hr></hr>
          
</Def>
)     
 
})

  return (

    <html>
     <head>
         <link rel="stylesheet" href="/css/neurostyle.css" />
         <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
         <title>Hello</title>
     </head>

      <div className = "Wrapper">
       <h1>Tech</h1>
       </div>
    
       <body>
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
{/* 
              <p>
             <form method="GET" action="braingame">
             <text><input type="Submit" name="braingame" class="btn-primary" value="login"/></text>
             </form> 
          <br></br>
          <br></br>
              </p> */}
                <div class = "Box">
            {techFormatted}
          </div>
            </body>
          {/* <div class = "Box">
            {techFormatted}
          </div> */}
 </html>
 ) 
     


}

  module.exports = tech