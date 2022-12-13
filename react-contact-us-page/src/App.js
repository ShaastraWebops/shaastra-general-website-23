import "./App.css";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div class="contact-us-heading">Contact Us</div>
      <div class="container">
        <div class="left-side">
          <div class="icon-container">
            <div class="icon-box">
              <IoMdMail class="icon" />
            </div>
          </div>
          <div class="content-container email-align">
            <div>
              <a href="mailto:sponsorship@shaastra.org">
                sponsorship@shaastra.org ➜
              </a>
              <br />
              <a href="mailto:outreach@shaastra.org">outreach@shaastra.org ➜</a>
              <br />
              <a href="mailto:sec_cocur@shaastra.org">
                sec_cocur@shaastra.org ➜
              </a>
            </div>
          </div>
        </div>
        <div class="right-side">
          <div class="icon-container">
            <div class="icon-box">
              <FaPhoneAlt class="icon" />
            </div>
          </div>
          <div
            class="content-container content-container-para"
          >
            <div class="para-left">
              <div class="contact-component">
                <div class="heading">English</div>
                <div class="content">
                  <p>maxfirstnamelen +91 1234567890</p>
                  <br />
                  <p>maxfirstnamelen +91 1234567890</p>
                </div>
              </div>

              <div class="contact-component">
                <div class="heading">Tamil</div>
                <div class="content">
                  <p>maxfirstnamelen +91 1234567890</p>
                  <br />
                  <p>maxfirstnamelen +91 1234567890</p>
                </div>
              </div>

              <div class="contact-component">
                <div class="heading">Hindi</div>
                <div class="content">
                  <p>maxfirstnamelen +91 1234567890</p>
                  <br />
                  <p>maxfirstnamelen +91 1234567890</p>
                </div>
              </div>
            </div>
            <div class="para-right">
              <div class="contact-component">
                <div class="heading">Kannada</div>
                <div class="content">
                  <p>maxfirstnamelen +91 1234567890</p>
                  <br />
                  <p>maxfirstnamelen +91 1234567890</p>
                </div>
              </div>

              <div class="contact-component">
                <div class="heading">Marathi</div>
                <div class="content">
                  <p>maxfirstnamelen +91 1234567890</p>
                  <br />
                  <p>maxfirstnamelen +91 1234567890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
