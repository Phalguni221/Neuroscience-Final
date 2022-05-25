const React = require("react");
const Def = require("../default");

function NewInfo(data) {
  console.log(data);
//   console.log("hello");


let newinfoFormatted = data.newinfo?.map((newinfo) => {
    return (
    
        <Def>
       
            <div class ="column">        
            <p>{newinfo.title}</p>
            <p>{newinfo.author}</p>
            <br></br>
            <br></br>
            <p>{newinfo.date}</p>
            <p>{newinfo.link}</p>
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
           <h1>New Info</h1>
        </div>
         <body>
             <p>
             <form method="GET" action="home">
             <text><input type="Submit" name="home" class="btn-primary" value="home"/></text>
             </form> 
             </p>
             <br></br>

             <p>
               <form method="GET" action="newInfo">
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

              {/* <p>
             <form method="GET" action="braingame">
             <text><input type="Submit" name="braingame" class="btn-primary" value="login"/></text>
             </form> 
          <br></br>
          <br></br>
              </p> */}
            </body>
      <div className = "Box">
      <p>{newinfoFormatted}</p>
      </div>
</html>
) 

  }

module.exports = NewInfo

  