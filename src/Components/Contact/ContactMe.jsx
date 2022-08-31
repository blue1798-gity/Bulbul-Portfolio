import React from "react";
import emailjs from "emailjs-com";
import phone from "../../img/phone-call.png";
import mail from "../../img/email.png";
import message from "../../img/send.png";
import "./ContactMe.css";

function ContactMe() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g7vt1mq",
        "template_tv6t0yb",
        e.target,
        "OZYRGPAP5C1f303mB"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="contact-container" id="Contact">
      <div className="contact-left">
        <div className="contact-name">
          <span className="contit">Get In Touch</span>
          <span className="contitle">Contact Me</span>

          <div className="contact-info">
            <span className="contact-title">
              <img className="contact-icon" src={phone} />
              Call Me
            </span>
            <span className="contact-subtitle">6203874682</span>

            <span className="contact-title email">
              <img className="contact-icon" src={mail} />
              Email
            </span>
            <span className="contact-subtitle">bulbulroy373@gmail.com</span>
          </div>
        </div>
      </div>

      <form action="" className="contact_form" onSubmit={sendEmail}>
        <div className="contact_inputgrid">
          <div className="contact_content">
            <label for="" className="contact_label">
              Name
            </label>
            <input type="text" name="name" className="contact_input" />
          </div>

          <div className="contact_content">
            <label for="" className="contact_label">
              Email
            </label>
            <input type="text" name="user_email" className="contact_input" />
          </div>

          <div className="contact_content">
            <label for="" className="contact_label message">
              Messages
            </label>
            <textarea
              className="area"
              name="message"
              id=""
              cols="0"
              rows="7"
            ></textarea>
          </div>

          <div>
            <input
              type="submit"
              value="Send Message"
              className="button button--flex"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactMe;
