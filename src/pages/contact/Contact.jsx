import "./contact.scss";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__content">
        <h1 className="contact-header">Contact Us</h1>

        <div className="contact-flex-wrapper">
          <div className="flex-wrap">
            <p className="contact-paragraph">
              Feel free to reach out through contact form or find our contact
              information below. Your feedback, questions, and suggestions are
              important to us as we strive to provide exceptional service to our
              community.
            </p>
            <br />  
            <h2 className="contact-paragraph1"> Our Address</h2>
            <address className="contact-paragraph2">
            Number 10 of Tivadar Layout street Angeles,90094 CA, USA
            </address>
          </div>

          <div className="contact__list">
            <form method="get" className="contactsubmit" action="#">
              <input
                id="contact_input"
                type="e-mail"
                name="email"
                placeholder="Email Address"
              ></input>
              <input
                type="text"
                name="number"
                id="contact_input"
                placeholder="Number"
              ></input>
              <input
                type="text"
                name=""
                id="contact_input"
                placeholder="Type Your Message"
              ></input>
              <input type="submit" id="submitbtn" value="Proceed"></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
