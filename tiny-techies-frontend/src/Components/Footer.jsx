import React, { useRef, useState, useEffect } from "react";
import "../css/footer.css";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  const form = useRef();
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });


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

          setFormData({
            user_name: " ",
            user_email: " ",
            message: " ",
          });

     
          toast.success("Thank you for contacting us!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000 * 60 * 60); 

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  

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
                    What is STEM education?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                  STEM education integrates science, technology, engineering, and mathematics to inspire young learners.
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
                    What age group is Tiny Techies suitable for?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                  Tiny Techies is designed for children aged 6 to 12.
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
                    How can I access Tiny Techies' learning materials?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                  You can access our STEM content by signing up on our website.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footersocialbuttons">
                  <span className="white-titles">Our social media</span>
                  <div className="footeralignbutton">
                    <div class="footersocialborder">
                      <a href="https://www.instagram.com/" target="_blank">
                        <img class="footersocialimage" src="Images/instagram.svg" />
                      </a>
                    </div>
                    <div class="footersocialborder">
                      <a href="https://www.linkedin.com/" target="_blank">
                        <img class="footersocialimage" src="Images/linkedin-in.svg" />
                      </a>
                    </div>
                    <div class="footersocialborder">
                      <a href="https://www.facebook.com/" target="_blank">
                        <img class="footersocialimage" src="Images/facebook.svg" />
                      </a>
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
      <div className="copyright">© {currentYear} by Group 4 </div>
      <ToastContainer/>
    </div>
  );
}

export default Footer;
