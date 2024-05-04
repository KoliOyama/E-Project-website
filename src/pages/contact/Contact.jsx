import "./contact.scss";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="contact">
      <div>
        <h1>Contact Us</h1>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          community.
        </p>
        <ul>
          <li>
            <MdOutlineEmail size={24} />
            <span>thescratchynib@gmail.com</span>
          </li>
          <li>
            <IoLocationOutline size={24} />
            <span>thescratchynib@gmail.com</span>
          </li>
          <li>
            <IoCallOutline size={24} />
            <span>thescratchynib@gmail.com</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
