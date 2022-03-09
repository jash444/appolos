import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Doctor } from './components/Doctor';
import { Solodoctor } from './components/Solodoctor';


function App() {
  return (
    
    <div className="App">
   
   
 
  <Routes>
    <Route exact path="/" element={ <Doctor />} ></Route>
    <Route exact path="/doctor/:id" element={ <Solodoctor />} ></Route>
    
     
    </Routes>
    
    

  
    </div>
  );
}

export default App;
