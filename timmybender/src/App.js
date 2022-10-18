import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom';
import ContactForm from './components/ContactForm'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactView from './pages/ContactView';
import HomeView from './pages/HomeView';
import ServicesView from './pages/ServicesView';


function App() {
  return (
    <div>
      {/* <HomeView/> */}
      <Routes>
        <Route path="/" element={<HomeView/>}/>
        <Route path="/services" element={<ServicesView/>}/>


      </Routes>
    
    </div>
  );
}

export default App;
