import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SearchPage from '../../Pages/SearchPage/SearchPage';
import NotFoundPage from '../../Pages/NotFoundPage/NotFoundPage';
import CardPage from '../../Pages/CardPage/CardPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />}/>
        <Route path="giphys/:id" element={<CardPage />}  />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>     
  );
}

export default App;
