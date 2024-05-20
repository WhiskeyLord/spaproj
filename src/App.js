import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
//import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from './components/header';
import { Footer } from './components/footer';

import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Home } from './pages/home';
import { Category } from './pages/category';
import { Recipe } from './pages/recipe';






function NoMatch(){
  let location = useLocation();

  return(
    <div>
      <h1>OOOOOOPS! {location.pathname} doesn't exist....</h1>
    </div>
  );
}

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <main className='container content'>
        <Routes>
          <Route path="*" element={<NoMatch/>}></Route>
          <Route path="/" element={<Home />} />
          <Route path="contact/" element={<Contact />} />
          <Route path="about/" element={<About />} />
          <Route path='category/:name' element={<Category />} />
          <Route path='meal/:id' element={<Recipe/>}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
