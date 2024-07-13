import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Contact = () =>{
    const socialMediaLinks = {
        gmail: "https://www.gmail.com",
        twitter: "https://www.twitter.com",
        instagram: "https://www.instagram.com/languitude/?igshid=MDM4ZDc5MmU%3D",
        linkedin: "https://www.linkedin.com/company/languitude/",
        whatsapp:"https://web.whatsapp.com/"
    };
    
      return (
        <div style={styles.container}>
          <h2>Contact Us</h2>
          <div style={styles.iconsContainer}>
            <a href={socialMediaLinks.gmail} target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FontAwesomeIcon icon={MailIcon} size="2x" />
            </a>
            <a href={socialMediaLinks.twitter} target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href={socialMediaLinks.whatsapp} target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
          </div>
        </div>
      );
}
const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    },
    iconsContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      width: '50%',
      marginTop: '20px'
    },
    icon: {
      color: '#000',
      textDecoration: 'none'
    }
};
  
  
export default Contact;