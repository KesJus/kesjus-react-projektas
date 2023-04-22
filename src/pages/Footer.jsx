import React from "react";
import "./style.scss";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
    <>
      <span>
          <a className="logos" href="https://www.paypal.com/paypalme/kesju4"><img src="./coffee.webp" style={{ width: 36, float: "left", marginLeft:100 }} title={"Buy me a coffee"}  />
      </a>
      </span>
      <p>&copy; {currentYear} Mad Frogs</p>
    </>
    </footer>
  );
}

export default Footer;
