import React from 'react';

import { requests } from "./request";
import { Row } from "./components";
// Start of Selection

function App() {
  return (
    // 追加箇所
    <div className="App">
      <Row fetchUrl={requests.fetchNetflixOriginals} />
    </div>
  );
}

export default App;
