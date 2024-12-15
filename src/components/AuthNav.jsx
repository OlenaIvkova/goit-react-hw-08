// import React from 'react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => (
  <div>
    <NavLink to="/register">Register</NavLink>
    <NavLink to="/login">Login</NavLink>
  </div>
);