import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import Login from './pages/Login';
import Order from './pages/Order';
import User from './pages/User';
import Signup from './pages/Signup';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/order' element={<Order/>}/>
            <Route path='/profile' element={<User/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
