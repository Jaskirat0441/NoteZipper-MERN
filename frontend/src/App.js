import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MyNotes from './screens/MyNotes/MyNotes';

function App() {
  return (
   <BrowserRouter>
   <Header/>
   <main>
    <Routes>
   <Route path='/' Component={LandingPage}/>
    <Route path='/mynotes' Component={MyNotes}/>
    </Routes>
   </main>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
