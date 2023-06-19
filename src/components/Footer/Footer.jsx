import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <>
      <div className="footercontainer">
        <div className="text">
          <span className="foottext">Reach Me:</span>
          <a
            className="link"
            href="https://github.com/alperen-erol"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="link"
            href="<span>https://www.linkedin.com/in/alperen-erol-75a17a257/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
