import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Navigate, useLocation} from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingCar from './pages/BookingCar';
import UserBookings from './pages/UserBookings';
import AddCar from './pages/AddCar';
import AdminHome from './pages/AdminHome';
import EditCar from './pages/EditCar';


// import  'antd/dist/antd.css';


function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route exact path='/' element={ <ProtectedRoute>   < Home />  </ProtectedRoute>} />
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/register' element={< Register />}></Route>
          <Route exact path='/booking/:carid' element={<ProtectedRoute>  <BookingCar/> </ProtectedRoute>} />
          <Route exact path='/userbookings' element={ <ProtectedRoute> <UserBookings/> </ProtectedRoute>  } />
          <Route exact path='/addcar' element={ <ProtectedRoute> <AddCar/> </ProtectedRoute>  } />
          <Route exact path='/editcar/:carid' element={<ProtectedRoute>  <EditCar/> </ProtectedRoute>} />
          <Route exact path='/admin' element={ <ProtectedRoute> <AdminHome/> </ProtectedRoute>  } />
        </Routes>
      </Router>

    </div>
  );
}

export default App;


export function ProtectedRoute(props)
{
  if(localStorage.getItem("user"))
  {
    return props.children
  }
  else{
    return <Navigate to="/login"/> 
  }
}