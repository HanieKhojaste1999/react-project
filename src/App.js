import React from 'react';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import Header from './components/Index/Header/Header';
import MainContainer from './components/Index/Main/MainContainer';
import Footer from './components/Index/Footer/Footer';
const App = () => {

  return (
    <div>
      <Header />
      <MainContainer/>
      <Footer/>
    </div>
  );
};

export default App;