import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">MHB.</span>
        <div className="links">
          <a href="https://www.linkedin.com/in/hamza-baig-759042175/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100086823825783&mibextid=ZbWKwL">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        <p className="copyright">
          <i className="fa-solid fa-palette"></i>
          Designed by Hamza
        </p>
      </div>
    </footer>
  );
}

export default Footer;
