import "./App.css";
import { BsChevronDown } from "react-icons/bs";
import nightsimg from "./image2.png";
import streetsimg1 from "./image1.jpg";
import streetsimg2 from "./image4.jpg";
import streetsimg3 from "./image3.png";

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="bg1">
          <div class="heading1">SHAASTRA SHOWS</div>
          <div class="register-now">
            <button id="button">Register Now</button>
          </div>
          <a href="#bg2">
            <BsChevronDown class="icon" style={{ color: "black" }} />
          </a>
        </div>

        <div class="bg2" id="bg2">
          <div class="blur1">
            <div class="heading2">SHAASTRA NIGHTS</div>
            <div class="nightsbody">
              <div class="bodytext">
                For this year's much awaited EDM night we have Sonu Sebastian,
                who is sure to enthrall y’all through his live performance of
                musical fusion, bringing together EDM (Electronic Dance Music)
                and percussion instruments. Sonu is the first to have created
                the LIQUID DRUMS, illuminated drums with water that creates an
                illusion of water and light dancing to every beat. He then went
                one step further to customize it with LED lighting, creating a
                unique audio visual treat, not just for the audience, but for
                the musician as well. A trendsetter in the field of music, he
                named his creation “Orbiter”. Be there on 28th Jan, 7:30pm at
                OAT to witness this spectacle.
                <br />
                <br />
                Beatboxer and Host: Abhishek Bhaskar
              </div>
              <img
                src={nightsimg}
                className="nightsimg"
                alt="couldn't load img"
                w
              />
            </div>
          </div>
        </div>
        <div class="bg3">
          <div class="blur2">
            <div class="heading3">SHAASTRA STREETS</div>
            <div class="streetsbody">
              Shaastra 2023 is very proud in announcing one of our latest
              endeavors i.e Shaastra streets. One of the flagship events under
              Shaastra streets this year is a MOTOR SHOW which will comprise a
              team of bikers who will be displaying their skills for the
              audience. Team Pro Guyz Stunts Inc. are one of India's leading
              motorcycle stunt teams providing interactive, jaw dropping stunts
              suitable for audiences of all ages. Apart from just appealing to a
              limited genre of audiences like racing or rallying, they influence
              a much bigger span of audience.
              <br />
              <br />
              Date and Time: 27th Jan, 5:00 pm
              <br />
              Venue: Road connecting GC and CLT
              <br /> Open to all!
              <br />
              <div style={{ flexDirection: "row" }}>
                <img
                  src={streetsimg1}
                  className="streetsimg"
                  alt="couldn't load img"
                  w
                />
                <img
                  src={streetsimg2}
                  className="streetsimg"
                  alt="couldn't load img"
                  w
                />
              </div>
              Beatboxer and Host for the show: Abhishek Bhaskar
              <br /> To engage the streets crowd and bring in much needed
              attention, we have a beatboxer cum emcee for the show in Abhishek
              “abverse” Bhaskar. He is one of India’s 1st gen and leading
              beatboxers, he has done 750+ shows across India, he has also
              featured in a pepsi commercial. He is an ex-brand ambassador for
              adidas originals and jbl. He is also world’s first ever beatboxer
              to perform in the metaverse.
              <br />
              <img
                src={streetsimg3}
                className="streetsimgalt"
                alt="couldn't load img"
                w
              />
              Date, Time, Venue: Same as streets.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
