// import React from 'react'
import React, { useEffect,useRef } from "react";
import "../css/footer.css";
import emailjs from '@emailjs/browser';

function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rv3ltxg', 'template_80pjlbk', form.current, 'Lvk1L6c9LoarSAiee')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  useEffect(() => {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }

    // Cleanup event listeners on component unmount
    return () => {
      for (i = 0; i < acc.length; i++) {
        acc[i].removeEventListener("click", function () {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }
    };
  }, []);

  return (
    <div className="Footer">
      <div className="blockfooter">
        <div className="footerdiv1">
          <div className="FAQ">
            <h1 className="white-titles">FAQ</h1>
            <div className="a">
              <button className="accordion">
                {" "}
                <span className="qstion"> question 1 </span><img src="Images/Capture.PNG" className="footersocialimage1" />
              </button>
              <div className="panel">
                <p> reponse.</p>
              </div>
              <button className="accordion">
                {" "}
                <span className="qstion"> question 2 </span>
                <img src="Images/Capture.PNG" className="footersocialimage1" />{" "}
              </button>
              <div className="panel">
                <p> reponse2.</p>
              </div>
              <button
                className="accordion"
                style={{ borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px" }}>              
                {" "}
                <span className="qstion"> question 3 </span> <img src="Images/Capture.PNG" className="footersocialimage1" />
              </button>
              <div className="panel"  style={{ borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px" }}>
                <p > reponse3.</p>
              </div>
            </div>
          </div>
          <div className="footersocialbuttons">
            <span className="white-titles">Our social media</span>
            <div className="footeralignbutton">
              <div className="footersocialborder">
                <img className="footersocialimage" src="Images/instagram.svg"  />
              </div>
              <div className="footersocialborder">
                <img className="footersocialimage" src="Images/linkedin-in.svg" />
              </div>
              <div className="footersocialborder">
                <img className="footersocialimage" src="facebook-f.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="footerdiv2">
          <div className="FooterContact">
            <h1 className="white-titles">Dont Hesitate, Contact Us </h1>
            <form className="footerform" ref={form} onSubmit={sendEmail}>
              <div className="ContactForm">
               
                  
                     
                        <div className="FormItem" >
                          <label className="Footer-lbl">User Name</label>
                        </div>
                      
                        <input type="text" id="Footer-username" name="user_name"/>
                     
                      
                        <div className="FormItem">
                          <label className="Footer-lbl" htmlfor="email">
                            E-mail
                          </label>
                        </div>
                      
                        <input type="text" id="footer-email" name="user_email"/>
                     
                   
                        <div className="FormItem">
                          <label className="Footer-lbl" htmlfor="message">
                            Message
                          </label>
                        </div>
                     
                        <div>
                        <textarea name="message" id="Footer-message" defaultValue={""} />
                     </div>
                    
                        <input
                          type="submit"
                          defaultValue="Submit"
                          value="send"
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
