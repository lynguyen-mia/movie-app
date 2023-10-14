import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import Browse from "./pages/browse/Browse";
import Search from "./pages/search/Search";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* <HashRouter> */}
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      {/* </HashRouter> */}
    </BrowserRouter>
  );
}

export default App;
