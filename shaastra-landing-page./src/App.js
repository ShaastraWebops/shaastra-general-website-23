import './App.css';
import {BsChevronDown} from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <div class="container">
          <div class="bg1">
              <div class="heading1">
                  SHAASTRA NIGHTS
              </div>
              <div class="register-now">
                  <button id="button">Register Now</button>
              </div>
              <BsChevronDown class="icon"/>
          </div>
          
          <div class="bg2">
              <div class="blur1"></div>
              <div class="heading2">
                  ABOUT US
              </div>
              <div class="content1">
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
              </div>
          </div>
          
          <div class="bg3">
              <div class="blur2"></div>
              <div class="heading3">
                  REVERB
              </div>
              <div class="content2">
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  </p>
              </div>
          </div> 
      </div>
    </div>
  );
}

export default App;
