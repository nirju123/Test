import './App.css';
import Card from './components/Card';
import Card1 from './components/Card1';
import Layout from './components/Layout';
import Profile from './components/Profile';
import Faq from './components/Faq';
import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './components/DataContext.js';


function App() {
  return (
    <DataProvider>
 
        <Routes>
          <Route
            path="/"
            element={<Layout ><div className='container'><Faq/></div></Layout>}
          />
          <Route path="/about" element={<Layout ><Faq/></Layout>} />
          <Route path="/login" element={<Layout ><Card/></Layout>} />
          <Route path="/newUser" element={<Layout ><Card1/></Layout>} />
          <Route path="/profile" element={<Layout ><Profile/></Layout>} />
        </Routes>

    </DataProvider>
  );
}

export default App;



  
