import React from 'react'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import CartContextProvider from './components/context/CartContext';
import Dashboard from './components/DashBoard/Dashboard'
import Footer from './components/Footer/Footer'







function App() {
  
  return (
    
    
    
    
    
    
    <div>
    <CartContextProvider>
  
     <BrowserRouter>
      <Navbar/>
      <Routes>

       <Route path={'category/:categoryId'} element={ <ItemListContainer/>}/>
       
       
        <Route exact path={'/'} element={<ItemListContainer/> }/>
           
      

        

        <Route path={'/item/:paramId'} element={<ItemDetailContainer/>}/>
          

        
        
        

        <Route path={'/cart'} element={<Cart/>}/>
          

       
         <Route path={'/dashboard'} element={<Dashboard/>}/>
        

       
  
      </Routes>
      <Footer/>
      </BrowserRouter>
    </CartContextProvider>

    </div>
  );
}

export default App;
