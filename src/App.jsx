import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Barnav from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import IconDetailContainer from './Components/IconDetailContainer';
import Contact from './Components/Con-tact';
import Us from './Components/Us';
import Footer from './Components/Footer';

function App() {
  return (
<>
<BrowserRouter>
<Barnav/>
<Routes>
<Route path='/' element={<ItemListContainer/>}/>
<Route path='/categoria' element={<ItemListContainer/>}/>
<Route path='/detalle/:detailId' element={<IconDetailContainer/>}/>
<Route path='/Contacto' element={<Contact/>}/>
<Route path='/Nosotros' element={<Us/>}/>
</Routes>

<Footer/>


</BrowserRouter>



</>
  );
}
export default App;