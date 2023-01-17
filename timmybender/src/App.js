import './components/css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import ContactForm from './components/ContactForm'
// import ContactView from './pages/ContactView';
import { Routes, Route } from 'react-router-dom';
// import Fade from 'react-reveal/Fade';
import Buttons from './components/Buttons';
import Navbar from './components/Navbar';
import './index.css';



function App() {
  

  return (
    <div>
      <Navbar/>
      <Buttons/>

      <Routes>
       
      </Routes>
      {/* <ContactForm/> */}
      
      
    </div>
  );
}

export default App;

