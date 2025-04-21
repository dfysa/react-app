import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/">Brand</a>
        </div>
        <div className="nav-links">
          <a href="#home">首页</a>
          <a href="#features">特点</a>
          <a href="#about">关于</a>
          <a href="#contact">联系我们</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;