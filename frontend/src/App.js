import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Notfound from './pages/Notfound';
import Detail from './pages/Tour/Detail';
import ListTourByCategory from './pages/Tour/ListTourByCategory';

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tour/:Slug" element={<Detail />} />
            <Route
              path="/tour/category/:Slug"
              element={<ListTourByCategory />}
            />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
