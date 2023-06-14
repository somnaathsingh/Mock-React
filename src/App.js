import './App.css';
import Header from './Components/Header';
import Introduction from './Components/Introduction';
import Team from './Components/Team';
import About from './Components/About';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
      <Routes>
      <Route exact path="/" element={ <Introduction/> } />
      <Route exact path="/Team" element={ <Team/> } />
      <Route exact path="/About" element={ <About/> } />
      </Routes>
      </div>
      </Router>
  );
}


export default App;
