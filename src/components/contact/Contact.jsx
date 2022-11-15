import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Lets talk about everything!</h3>
          <p className="contact_details">
            {" "}
            Don't like forms? send me an email. 👋
          </p>
        </div>
        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                className="contact__form-input"
                type={"text"}
                placeholder="Type your name"
              />
            </div>

            <div className="contact__form-div">
              <input
                className="contact__form-input"
                type={"email"}
                placeholder="Type your email"
              />
            </div>

            <div className="contact__form-div">
              <input
                className="contact__form-input"
                type={"text"}
                placeholder="Type your subject"
              />
            </div>

            <div className="contact__form-div">
              <input
                className="contact__form-input"
                type={"text"}
                placeholder="Type your subject"
              />
            </div>
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name=""
              id=""
              cols={"30"}
              row={"10"}
              placeholder="Type your message..."
              className="contact__form-input"
            ></textarea>
          </div>
          <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
