import React from "react";
import {BrowserRouter as Router, Route, useHistory} from "react-router-dom";
import Demo from "Demo";
import DevntechRouter from "projects/DevntechRouter";

function App() {
  const history = useHistory();
  return (
      <Router history={history}>
          <Route path={`/`} component={DevntechRouter}/>
          <Route path={`/demo`} component={Demo}/>
      </Router>
  );
}

export default App;
