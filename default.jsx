const React = require("react");
// import Wrapper from "./styled-components/style";

<>
  <head>
    <link rel="stylesheet" href="/css/neurostyle.css" />
  </head>
  <body>
    <p>
      <form method="GET" action="home">
        <text><input type="Submit" name="home" class="btn-primary" value="home" /></text>
      </form>
    </p>
    <br></br>

    <p>
      <form method="GET" action="NewInfo">
        <text><input type="Submit" name="newinfo" class="btn-primary" value="newinfo" /></text>
      </form>
      <br></br>
      <br></br>
    </p>

    <p>
      <form method="GET" action="tech">
        <text><input type="Submit" name="tech" class="btn-primary" value="tech" /></text>
      </form>
      <br></br>
      <br></br>
    </p>

    <p>
      <form method="GET" action="login">
        <text><input type="Submit" name="login" class="btn-primary" value="login" /></text>
      </form>
      <br></br>
      <br></br>
    </p>
  </body>
  </>

function Def(html, button) {
  return (
    <div>
      <p>{html.children}</p>
      <p>{button.children}</p>
    </div>
  
  
  );
}

module.exports = Def
