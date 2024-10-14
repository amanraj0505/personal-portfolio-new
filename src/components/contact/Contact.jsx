import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [bodyError, setBodyError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [body, setBody] = useState("");
  const sendEmail = (e) => {
    if (!(name && subject && email && body)) {
      e.preventDefault();
      setEmailError(!email);
      setNameError(!name);
      setSubjectError(!subject);
      setBodyError(!body);
      toast.error("some form fields are missing...");
    } else {
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
          () => {
            toast.update(id, {
              render: "😍 Message Sent!!",
              type: "success",
              isLoading: false,
              autoClose: 3000,
            });
            form.current.reset();
          },
          () => {
            toast.update(id, {
              render: "🥴 Something Went Wrong!!",
              type: "error",
              isLoading: false,
              autoClose: 3000,
            });
            form.current.reset();
          }
        );
    }
  };
  const onNameChange = (e) => {
    setName(e.target.value);
    setNameError(!e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(!e.target.value);
  };
  const onSubjectChange = (e) => {
    setSubject(e.target.value);
    setSubjectError(!e.target.value);
  };
  const onBodyChange = (e) => {
    setBody(e.target.value);
    setBodyError(!e.target.value);
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
                style={{
                  ...(nameError
                    ? { border: "1px solid hsl(353, 100%, 65%)" }
                    : {}),
                }}
                onChange={onNameChange}
              />
            </div>

            <div className="contact__form-div">
              <input
                className="contact__form-input"
                type={"email"}
                placeholder="Type your email"
                name="user_email"
                style={{
                  ...(emailError
                    ? { border: "1px solid hsl(353, 100%, 65%)" }
                    : {}),
                }}
                onChange={onEmailChange}
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              className="contact__form-input"
              type={"text"}
              name="user_subject"
              style={{
                ...(subjectError
                  ? { border: "1px solid hsl(353, 100%, 65%)" }
                  : {}),
              }}
              placeholder="Type your subject"
              onChange={onSubjectChange}
            />
          </div>
          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              id=""
              cols={"30"}
              row={"10"}
              style={{
                ...(bodyError
                  ? { border: "1px solid hsl(353, 100%, 65%)" }
                  : {}),
              }}
              placeholder="Type your message..."
              className="contact__form-input"
              onChange={onBodyChange}
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
