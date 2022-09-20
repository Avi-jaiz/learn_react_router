import { NavLink } from "react-router-dom";
import '../Styles/mainNavigation.css';

const MainNavigation =()=>
{
  return(
    <div className="mainNavigation">
<div>
  <h2>Great Quotes</h2>  
</div>
<nav className="navigation">
    <ul className="navigationHead">
        <li ><NavLink className="navLink" to='/quotes' activeClassName="active_class">All Quotes</NavLink></li>

        <li><NavLink className="navLink" to='/new-quote' activeClassName="active_class">New Quotes</NavLink></li>

        <li><NavLink className="navLink" to='/quote/:quoteId' activeClassName="active_class">Quotes Details</NavLink></li>

       
    </ul>
</nav>



    </div>
  )
}


export default MainNavigation;