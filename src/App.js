import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Startpage from "./component/Startpage";
import jNvabar from "./component/jNvabar";
import About from "./Itemnavbar/About";
import Contac from "./Itemnavbar/Contac";

import Resume from "./Itemnavbar/Resume";


function App() {
  return (
    
    <div>
     
      <Switch>
      <Route path="/amirhoseinmahdion/resume" component={Resume}/>
      <Route path="/amirhoseinmahdion/contac" component={Contac}/>
      <Route path="/amirhoseinmahdion/about" component={About}/>
        <Route path="/amirhoseinmahdion" component={jNvabar} />
        <Route path="/mypage" component={Startpage} />
        {/* <Redirect to="/mypage"/> */}
      </Switch>
    </div>
  );
}

export default App;
