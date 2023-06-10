import React from "react";

var currentYear  = new Date().getFullYear();
function Footer(){
    return(
        <footer>
          <p> Copyrights © { currentYear}  </p>
        </footer>
    );
}

export default Footer;