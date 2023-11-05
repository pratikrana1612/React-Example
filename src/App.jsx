import Header from "./Components/Header/Header.jsx";

// import CoreConcepts from "./Components/CoreConcepts/CoreConcepts.jsx";
import CoreConcepts from "./Components/CoreConcepts/CoreConcepts.jsx";
import Examples from "./Components/Examples/Examples.jsx";

import React, { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <main>
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>
      </main>
    </Fragment>
  );
}

export default App;
