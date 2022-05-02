import React from "react";
import {BrowserRouter as Router, useHistory} from "react-router-dom";
import DevntechRouter from "projects/DevntechRouter";

function App() {
  const history = useHistory();
  return (
      <Router history={history}>
        <DevntechRouter/>
      </Router>
  );
}

export default App;
