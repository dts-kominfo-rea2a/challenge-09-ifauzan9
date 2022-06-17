// Kalian bisa menambahkan CSS di src/components/Header.css
import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <>
      <h1 className="header-title">Call a Friend</h1>
      <p className="sub-title">your friendly contact app</p>
    </>
  );
};

export default Header;
