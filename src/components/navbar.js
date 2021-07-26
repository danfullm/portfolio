import React from 'react';
import './navbar.css'
import '../App.css';
import {
  Link
} from "react-router-dom";
import { SidebarData } from './routes';




function Navbar() {


    return (
        <header className="App-header">
           
           
          
       
             <div className="nav-menu">

             <ul className="menu">
            <li> <Link to="/"><h3 className="logo-text">DAN<br/>FULLMAN</h3><h6 className="logo-text-sub">Front-End Web Developer</h6></Link></li>
             {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                    
                  </Link>
                
                </li>
           
                
              );
            }
            )}


  </ul>
  <li className="toggle"><a href="#">X
  </a></li>
  </div>




         </header>


        );
}

export default Navbar;
