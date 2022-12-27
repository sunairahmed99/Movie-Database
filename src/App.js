import './App.css';
import Header from './Common/Header';
import Home from './Pages/Home';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Movieid from './Pages/Movieid';
import Footer from './Common/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movies/:imdbID' element={<Movieid/>}></Route>
      </Routes>
      <Footer/>
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
