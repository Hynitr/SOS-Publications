import './css/style.css';
import Footer from './footer';
import Homepage from './home';
import Error404 from './error404';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    
      <div className="content">
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='*' element={<Error404 />} />
        </Routes>
        <Footer/>
      </div>
     
    </div>
  </Router>
  );
}

export default App;