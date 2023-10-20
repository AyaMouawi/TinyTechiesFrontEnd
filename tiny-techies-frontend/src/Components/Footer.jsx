// import React from 'react'
import React, { useEffect, useRef } from "react";
import "../css/footer.css";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rv3ltxg",
        "template_80pjlbk",
        form.current,
        "Lvk1L6c9LoarSAiee"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // useEffect(() => {
  //   var acc = document.getElementsByClassName("accordion");
  //   var i;

  //   for (i = 0; i < acc.length; i++) {
  //     acc[i].addEventListener("click", function () {
  //       this.classList.toggle("active");
  //       var panel = this.nextElementSibling;
  //       if (panel.style.maxHeight) {
  //         panel.style.maxHeight = null;
  //       } else {
  //         panel.style.maxHeight = panel.scrollHeight + "px";
  //       }
  //     });
  //   }

  //   // Cleanup event listeners on component unmount
  //   return () => {
  //     for (i = 0; i < acc.length; i++) {
  //       acc[i].removeEventListener("click", function () {
  //         this.classList.toggle("active");
  //         var panel = this.nextElementSibling;
  //         if (panel.style.maxHeight) {
  //           panel.style.maxHeight = null;
  //         } else {
  //           panel.style.maxHeight = panel.scrollHeight + "px";
  //         }
  //       });
  //     }
  //   };
  // }, []);

  return (
    <div className="Footer" id="Footer">
      <div className="blockfooter">
        <div className="footerdiv1">
          <div className="FAQ">
            <h1 className="white-titles">FAQ</h1>

            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Question #1
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> className.
                    This is the first item's accordion body.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Question #2
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> className.
                    This is the second item's accordion body. Let's imagine this
                    being filled with some actual content.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Question #3
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footersocialbuttons">
            <span className="white-titles">Our social media</span>
            <div className="footeralignbutton">
              <div className="footersocialborder">
                <img className="footersocialimage" src="Images/instagram.svg" />
              </div>
              <div className="footersocialborder">
                <img
                  className="footersocialimage"
                  src="Images/linkedin-in.svg"
                />
              </div>
              <div className="footersocialborder">
                <img className="footersocialimage" src="Images/facebook.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="footerdiv2">
          <div className="FooterContact">
            <h1 className="white-titles">Dont Hesitate, Contact Us </h1>
            <form className="footerform" ref={form} onSubmit={sendEmail}>
              <div className="ContactForm">
                <div className="FormItem">
                  <label className="Footer-lbl">User Name</label>
                </div>

                <input type="text" id="Footer-username" name="user_name" />

                <div className="FormItem">
                  <label className="Footer-lbl" htmlFor="email">
                    E-mail
                  </label>
                </div>

                <input type="text" id="footer-email" name="user_email" />

                <div className="FormItem">
                  <label className="Footer-lbl" htmlFor="message">
                    Message
                  </label>
                </div>

                <div>
                  <input type="text" name="message" id="Footer-message" />
                </div>

                <input
                  type="submit"
                  defaultValue="Submit"
                  value="Submit"
                  className="SubmitForm"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="copyright">© 2023 by Group 4 </div>
    </div>
  );
}

export default Footer;
