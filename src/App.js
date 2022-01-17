import logo from './logo.svg';
import './App.css';
import { Dashboard } from './components/Dashboard';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { AdminLogin } from './components/AdminLogin';
import { UserDashboard } from './components/UserDashboard';
import { AppliedJobs } from './components/AppliedJobs';
import { UserLogin } from './components/UserLogin';
import { Navbar } from './components/Navbar';
import { PrivateRouteUser } from './components/PrivateRouteUser';

function App() {
  return (
    <div className="App">
      
      <Routes>

        <Route path="/" element={<Navbar />}></Route>
  
        <Route path="/admin" element={<PrivateRoute>
          <Dashboard />
        </PrivateRoute>}></Route>

        <Route path="/user" element={<PrivateRouteUser>
          <UserDashboard />
        </PrivateRouteUser>}></Route>

        {/* <Route path="/user" element={<UserDashboard />}></Route> */}

        <Route path="/userLogin" element={<UserLogin />}></Route>

        <Route path="/appliedJobs" element={<AppliedJobs />}></Route>

        <Route path="/adminLogin" element={<AdminLogin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
