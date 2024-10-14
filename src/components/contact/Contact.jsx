import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    const id = toast.loading("🤔 Sending message...");
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jedb8ev",
        "template_ttrhovy",
        form.current,
        "SxEUwQVRbAkf65faW"
      )
      .then(
        (result) => {
          toast.update(id, {
            render: "😍 Message Sent!!",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.update(id, {
            render: "🥴 Something Went Wrong!!",
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
          form.current.reset();
        }
      );
  };
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
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                className="contact__form-input"
                type={"text"}
                placeholder="Type your name"
                name="user_name"
              />
            </div>

            <div className="contact__form-div">
              <input
                className="contact__form-input"
                type={"email"}
                placeholder="Type your email"
                name="user_email"
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              className="contact__form-input"
              type={"text"}
              name="user_subject"
              placeholder="Type your subject"
            />
          </div>
          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
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
      <ToastContainer />
    </section>
  );
};

export default Contact;
