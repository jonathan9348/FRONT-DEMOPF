import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer():any {
  return (
    <footer>
      <div>
        <img src="" alt=""/>
        <div>
          <h3 className="">
            Book
          </h3>
          <h3 className="">
            Store
          </h3>
        </div>
      </div>
      <div>
        
        <NavLink to="/contact">
          Contact us
        </NavLink>
      </div>
    </footer>
  );
}