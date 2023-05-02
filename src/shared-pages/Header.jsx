import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { Tooltip } from 'react-tooltip'


const Header = () => {

    const {logout,user} = useContext(AuthContext)

    //log out 
const handleLogout =()=>{
    logout()
    .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        console.log(error)
      });
}
    return (
        <>
           <div className="navbar bg-base-100 container mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-2xl">
      <li ><NavLink to ='/' >Home</NavLink></li>
      <li><NavLink to='/blog'>Blog</NavLink></li>
      </ul>
    </div>
    <Link to ='/' className="btn btn-ghost normal-case text-2xl font-bold sm:text-3xl ">Chef's Table</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-2xl">
      <li><NavLink to ='/' >Home</NavLink></li>
      <li><NavLink to='/blog'>Blog</NavLink></li>
     
      
    </ul>
  </div>
  <div className="navbar-end">
    
   {user && <Link onClick={handleLogout} to="/login" className="btn btn-main ml-4">Logout</Link>  }

   {user? <label  className="btn btn-ghost btn-circle avatar">
        <div  className="w-10 rounded-full">
         <a  id="my-anchor-element"><img  src={user?.photoURL
} /></a> <Tooltip anchorSelect="#my-anchor-element"
content={user.displayName}></Tooltip>
        </div>
      </label> : <Link to="/login" className="btn btn-main">Login</Link>}

   
    
  </div>
</div>
        </>
    );
};

export default Header;