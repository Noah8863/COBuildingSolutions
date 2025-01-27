import React from "react";
import "./contact.scss";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import emailjs from "@emailjs/browser";
import Certification from "../Certification/index";


function Contact() {
  const sendEmail = (e) => {
    var today = new Date().toLocaleDateString();

    e.preventDefault();
    const formData = {
      time: today,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phoneNumber: document.getElementById("phoneNumber").value,
      lumber: document.getElementById("lumber").checked ? "Yes ✅" : "No ❌",
      plywood: document.getElementById("plywood").checked ? "Yes ✅" : "No ❌",
      osb: document.getElementById("osb").checked ? "Yes ✅" : "No ❌",
      lsl: document.getElementById("lsl").checked ? "Yes ✅" : "No ❌",
      lvl: document.getElementById("lvl").checked ? "Yes ✅" : "No ❌",
      ijoists: document.getElementById("ijoists").checked ? "Yes ✅" : "No ❌",
      ewp: document.getElementById("ewp").checked ? "Yes ✅" : "No ❌",
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };
    console.log(formData);
    emailjs
      .send(
        "service_yctb6c8",
        "template_s77x9a4",
        formData,
        "nIOQ4DjOD6VPrQRy0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  function showMessage() {
    alert("Message has been recorded! We'll get in touch soon");
  }

  return (
    <>
      <div id="contact-form-container">
        <div id="left-contact-container">
          <div id="left-contact-details">
            <h1>CONTACT US</h1>
            <p>
              CBS Lumber is dedicated to offering you the best experince,
              products, and quality at an affordable price.
            </p>
            <p>
              Leave your information or give us a call, and we'll help fulfill
              your building needs.
            </p>
            <a id="contact-phone-number" href="tel:7207561299">
              <PhoneInTalkIcon className="contact-icons" />
              (720)-756-1299
            </a>
          </div>
        </div>
        <form className="inputContainer" onSubmit={sendEmail}>
        {/* <form className="inputContainer"> */}
          <p type="Name:">
            <input
              className="inputfield"
              id="name"
              type="text"
              placeholder="* Name"
              required
            ></input>
          </p>
          <p type="Email:">
            <input
              className="inputfield"
              id="email"
              placeholder="* Email"
              required
            ></input>
          </p>
          <p type="PhoneNumber:">
            <input
              type="number"
              className="inputfield"
              id="phoneNumber"
              placeholder="Phone Number"
            ></input>
          </p>
          <div className="checkboxform field">
            <h4>Products of Interest*</h4>
            <div id="checklist">

              <input id="lumber" type="checkbox" value="1" />
              <label htmlFor="01 lumber">Roofing Service</label>

              <input id="osb" type="checkbox" value="2" />
              <label htmlFor="02 osb">Roofing Inspection</label>

              <input id="plywood" type="checkbox" value="3" />
              <label htmlFor="03 plywood">Skylight Install</label>

              <input id="lvl" type="checkbox" value="7" />
              <label htmlFor="07 lvl">Solar Panel Install</label>

              <input id="ijoists" type="checkbox" value="4" />
              <label htmlFor="04 ijoists">Gutter Cleaning</label>

              <input id="lsl" type="checkbox" value="5" />
              <label htmlFor="05 lsl">Lumber</label>
            </div>
          </div>
          <p type="Message:">
            <input
              className="inputfield"
              id="subject"
              placeholder="* Subject"
              required
            ></input>
          </p>
          <p type="Message:">
            <input
              className="inputfield"
              id="message"
              placeholder="* Message"
              required
            ></input>
          </p>
          <button id="btn" className="bubbly-button" onClick={showMessage}>
            Submit
          </button>
        </form>
      </div>
      <Certification />
    </>
  );
}

export default Contact;
