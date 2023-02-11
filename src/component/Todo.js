
import React, { useState } from "react";



import MainSection from "./MainSection";
import Sidenav from "./Sidenav";

function App(props) {

 
  const [active, setActive] = useState("INBOX");
  return (
    <div>
      
        <div>
        
          <div className="row">
            <div className="col-md-10">
              <MainSection active={active} />
            </div>
            <div className="col-md-2">
              <Sidenav change={setActive} />
            </div>
          </div>
        
        </div>
      
    </div>
  );
}

export default App;
