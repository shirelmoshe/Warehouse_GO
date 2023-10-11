import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import NavigationBar from './assets/layout/NavigationBar';


import CreateProduct from './assets/pages/CreateProduct/CreateProduct';
import CreateCategory from './assets/pages/CreateCategory/CreateCategory';
import AddingProduct from './assets/pages/AddingProduct/AddingProduct';
import TabsComponent from './assets/pages/categories_management/categories_management';



const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<NavigationBar />} />
        <Route path="/add-product" element={<TabsComponent />} />
        <Route path="/create_Product" element={<CreateProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
