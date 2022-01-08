import logo from './logo.svg';
import './App.css';
import { Navbar } from './Pages/Navbar';
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Dashboard } from './Pages/Dashboard';
import { Setting } from './Pages/Setting';
import { Route,Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home />} ></Route>
          <Route path="/Login" element={ <Login />} ></Route>
          <Route path="/Dashboard" element={ 
             <PrivateRoute> 
               <Dashboard/>
              </PrivateRoute> 

          } ></Route>
          <Route path="/Dashboard/Setting" element={   <Setting/>} ></Route>
        </Routes>
    </div>
  );
}

export default App;
