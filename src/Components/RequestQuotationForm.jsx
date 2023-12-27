import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const RequestQuotationForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j1ep69v",
        "template_qab5aav",
        form.current,
        "vCR9lBYtRz3HMEl64"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent.");
          alert("Message sent.");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <h2 style={{ padding: "10px 0", fontWeight: "500" }}>
        Request a Quotation
      </h2>
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="">Full name</label>
          <br />
          <input
            required
            type="text"
            id="user_name"
            name="user_name"
            placeholder="your full name"
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              outline: "none",
            }}
          />
          <br />
          <label htmlFor="">Email</label>
          <br />
          <input
            required
            type="email"
            id="user_email"
            name="user_email"
            placeholder="your email address"
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              outline: "none",
            }}
          />
          <br />
          <label htmlFor="">Message</label>
          <br />
          <textarea
            required
            id="message"
            name="message"
            rows="10"
            cols="50"
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              outline: "none",
            }}
          ></textarea>
          <br />
          <input type="submit" value="Send" style={{ padding: "7px 50px" }} />
        </form>
        {/* <form action="">
          <label htmlFor="">Full name</label>
          <br />
          <input
            type="text"
            id="user_name"
            name="user_name"
            placeholder="your full name"
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              outline: "none",
            }}
          />
          <br />
          <label htmlFor="">Email</label>
          <br />
          <input
            type="email"
            id="user_email"
            name="user_email"
            placeholder="your email address"
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              outline: "none",
            }}
          />
          <br />
          <label htmlFor="">Message</label>
          <br />
          <textarea
            id="message"
            name="message"
            rows="10"
            cols="50"
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              outline: "none",
            }}
          ></textarea>
          <br />
          <button type="submit">Request a Quotation</button>
        </form> */}
      </div>
    </div>
  );
};

export default RequestQuotationForm;
