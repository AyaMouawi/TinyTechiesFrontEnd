// import React from 'react'
import React, { useEffect } from "react";
import "../css/footer.css";

function Footer() {
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
                <span className="qstion"> question 1 </span><img src="" className="footersocialimage1" />
              </button>
              <div className="panel">
                <p> reponse.</p>
              </div>
              <button className="accordion">
                {" "}
                <span className="qstion"> question 2 </span>
                <img src="" className="footersocialimage1" />{" "}
              </button>
              <div className="panel">
                <p> reponse2.</p>
              </div>
              <button
                className="accordion"
                style={{ borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px" }}>              
                {" "}
                <span className="qstion"> question 3 </span> <img src="" className="footersocialimage1" />
              </button>
              <div className="panel">
                <p> reponse3.</p>
              </div>
            </div>
          </div>
          <div className="footersocialbuttons">
            <span className="white-titles">Our social media</span>
            <div className="footeralignbutton">
              <div className="footersocialborder">
                <img className="footersocialimage" src=" " />
              </div>
              <div className="footersocialborder">
                <img className="footersocialimage" src="" />
              </div>
              <div className="footersocialborder">
                <img className="footersocialimage" src="" />
              </div>
            </div>
          </div>
        </div>
        <div className="footerdiv2">
          <div className="FooterContact">
            <h1 className="white-titles">Dont Hesitate, Contact Us </h1>
            <form className="footerform">
              <div className="ContactForm">
                <table className="footertable">
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <div className="FormItem">
                          <label className="Footer-lbl">User Name</label>
                        </div>
                      </td>
                      <td>
                        <input type="text" id="Footer-username" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <div className="FormItem">
                          <label className="Footer-lbl" htmlfor="email">
                            E-mail
                          </label>
                        </div>
                      </td>
                      <td>
                        <input type="text" id="footer-email" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="FormItem">
                          <label className="Footer-lbl" htmlfor="message">
                            Message
                          </label>
                        </div>
                      </td>
                      <td>
                        {" "}
                        <textarea id="Footer-message" defaultValue={""} />
                      </td>
                    </tr>
                    <tr>
                      <td />
                      <td>
                        <input
                          type="submit"
                          defaultValue="Submit"
                          className="SubmitForm"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
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
