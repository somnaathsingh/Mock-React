// import './App.css';
// import Header from './Components/Header';
 import Introduction from './Components/Introduction';
 import Team from './Components/Team';
 import About from './Components/About';
// import UserForm from './Components/login';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


// function App() {
//   return (
//     <Router>
//       <div className="App">
//       <Routes>
//       <Route exact path="/" element={ <UserForm/> } />
//       <Route exact path="/introduction" element={ <Introduction/> } />
//       <Route exact path="/team" element={ <Team/> } />
//       <Route exact path="/about" element={ <About/> } />
//       </Routes>
//       </div>
//       </Router>
//   );
// }


// export default App;
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './Components/store';
import UserModal from './Components/UserModal';
import Header from './Components/Header';


const App = () => {
  return (
    <Router>
      
    <Provider store={store}>
    <Routes><Route exact path="/" element={ <UserModal /> } /></Routes>
      <Routes><Route exact path="/introduction" element={ <Introduction /> } />
      <Route exact path="/team" element={ <Team/> } />
      <Route exact path="/about" element={ <About/> } />
      </Routes>
    </Provider>
    </Router>
  );
};

export default App;


