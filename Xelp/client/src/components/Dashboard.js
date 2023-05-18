// import logo from './logo.svg';
import '../App.css';
import Sidebar from './sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Po from '../views/PO';
import SellerDetailsForm from './SellerDetails';
import SignupForm from './SignUp';
import UserList from './getUser';

function Dashboard() {
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Po/>} />
          <Route path='/SellerDetails' element={<SellerDetailsForm/>}/>
          <Route path="/SignUp" element={<SignupForm/>}/>
          <Route path="/getUser" element={<UserList/>}/>
          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} /> */}
        </Routes>
      </Sidebar>
    </BrowserRouter>
    </div>
  );
}

export default Dashboard;
