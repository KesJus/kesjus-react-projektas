import React from "react";
import "./style.scss";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Mad Frogs</p>
    </footer>
  );
}

export default Footer;
