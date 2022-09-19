import {Redirect, Route} from 'react-router-dom'
import WelcomePage from './Components/WelcomePage';
import Products from './Components/Products';
import { Link ,NavLink} from 'react-router-dom';
import './App.css'
import ProductDetail from './Components/ProductDetail';

function App() {
  return (
    <div className="App">
<header>
 <li>
 <Link to='/welcome'>Welcome</Link>
  
 </li>

 <li>

  <Route path='/' exact>
    <Redirect to='/welcome/new-user'>   /* redirect */ 

    </Redirect>

  </Route>
 <NavLink  activeClassName='activeLink' to='/product'>Products</NavLink>
 </li>
</header>
   <Route path="/welcome">
 <WelcomePage />

   </Route>

   <Route path="/product"  exact>
 <Products />

   </Route>

   <Route path='/product/:productid'>
    <ProductDetail />
   </Route>

    </div>
  );
}

export default App;
