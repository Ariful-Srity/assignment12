
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import AddReview from './Pages/Dashboard/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/Payment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Portfolio from './Pages/Portfolio/Portfolio';
import Purchase from './Pages/Purchase/Purchase';

import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Notfound from './Pages/Shared/Notfound/Notfound';

function App() {
  return (
    <div className='mx-12' >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/myportfolio' element={<Portfolio></Portfolio>}></Route>

        <Route path='/purchase' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>

        }

        ></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>

        }

        >
          <Route path='myOrders' element={
            <RequireAuth>
              <MyOrders />
            </RequireAuth>
          } />
          <Route path='myProfile' element={
            <RequireAuth>
              <MyProfile />
            </RequireAuth>
          } />
          <Route path='addReview' element={
            <RequireAuth>
              <AddReview />
            </RequireAuth>
          } />

        </Route>

        <Route path='/purchase/:id' element={
          <RequireAuth>
            {/* <Purchase></Purchase> */}
          </RequireAuth>
        }></Route>


        <Route path='/myorders' element={
          <RequireAuth>
            <MyOrders></MyOrders>
          </RequireAuth>

        }

        ></Route>
        <Route path='/payment' element={
          <RequireAuth>
            <Payment></Payment>
          </RequireAuth>

        }

        ></Route>



        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
