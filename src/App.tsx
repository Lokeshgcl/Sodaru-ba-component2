import React from 'react';
// import _ from 'lodash';
import difference from 'lodash/difference';
// import capitilize from 'lodash/capitalize'
import { Button } from "@material-ui/core";

function App() {

  var str = "fslfjslj";
 var str2 = "fslfjsljdfsd";
 difference(str,str2);
 
  return (
    <div className="App">
      <Button variant="contained" color="primary">
      Button Material ui tree shake
    </Button>
      <header className="App-header">
        
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
