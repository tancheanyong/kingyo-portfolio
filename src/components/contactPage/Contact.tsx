import { useEffect } from "react";
import "../../scss/contactPage/Contact.scss";

function Contact() {
  useEffect(() => {
    let thispage = document.querySelector(".contact-container");
    thispage?.classList.add("fade-in");
  }, []);

  return (
    <div className="contact-container">
      <p>Drop me an email!</p>
      <form action="" className="contact-form">
        <div className="form-section">
          <label htmlFor="" className="name">
            Name
          </label>
          <input type="text" className="name-input" />
        </div>
        <div className="form-section">
          <label htmlFor="" className="email">
            Email
          </label>
          <input type="text" className="email-input" />
        </div>
        <div className="form-section">
          <label htmlFor="" className="subject">
            Subject
          </label>
          <input type="text" className="subject-input" />
        </div>
        <div className="form-section">
          <label htmlFor="" className="message">
            Message
          </label>
          <textarea name="" id="" className="message-input"></textarea>
        </div>
        <button className="form-submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
