import React from 'react';
import { NavLink} from "react-router-dom";     

const Navbar = () => { return (
<>
<nav className="w3-container w3-teal">
<NavLink className="nav-link" to = "./Home" className="w3-button"><h1>anicient temple</h1></NavLink>
</nav>


<nav className="w3-bar w3-black">

  <NavLink className="nav-link" to="./North" className=" w3-bar-item w3-button">North Temple</NavLink>
  <NavLink  className = "nav-link" to="./South" className="w3-bar-item w3-button">South Temple</NavLink>  
  <NavLink  className = "nav-link" to="./West" className="w3-bar-item w3-button">West Temple</NavLink> 
  <NavLink  className = "nav-link" to="./East" className="w3-bar-item w3-button">East Temple</NavLink> 
</nav>





</>
);
};
export default Navbar;