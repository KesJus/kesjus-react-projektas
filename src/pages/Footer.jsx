import React from "react";
import "./style.scss";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <>
        <a className="logos" href="https://www.paypal.com/paypalme/kesju4">
          <img
            src="/coffee.webp"
            style={{ width: 38, float: "left", marginLeft: 100 }}
            title={"Buy me a coffee"}
          />
        </a>
        <p>
          <a className="logos" href="https://pramonineiranga.lt/">
            &copy; {currentYear} Mad Frogs
          </a>
        </p>{" "}
      </>
    </footer>
  );
}

export default Footer;
