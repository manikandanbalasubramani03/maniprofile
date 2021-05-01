import { IconButton } from "@material-ui/core";
import { Facebook, Instagram, LinkedIn } from "@material-ui/icons";
import React from "react";
import { Element } from "react-scroll";
import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>CONTA<span>CT</span></h1>
      <div className="contact__container">
        <p>
          Email : <span>manikandanbalasubramani.03@gmail.com</span>
        </p>
        <p>
         Mob Num : <span>7373183377</span>
        </p>
        <div className="contact__icons">
        
          <a
            href="https://www.facebook.com/profile.php?id=100009282707485"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <Facebook />
            </IconButton>
          </a>
          <a
            href="https://www.instagram.com/m_a_n_i_malar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <Instagram />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
