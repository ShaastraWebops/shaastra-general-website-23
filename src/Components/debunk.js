import React from "react";
import "./debunkStyle.css";

import NavBar from "./navigation/NavBar";
import Footer from "./Footer";
import TopBar from "./TopBar";

function debunk() {
  return (
    <body>
      <TopBar />
      <NavBar />
      <section className="debunk-section">
        <div className="banner">
          <svg class="signup-heading">
            <svg class="signup-2">
              <text
                x="50%"
                dominant-baseline="middle"
                text-anchor="middle"
                y="50%"
              >
                DEBUNK
              </text>
            </svg>
          </svg>
        </div>
        <div className="aboutdebunk">
          <br></br>
          <br></br>
          <p>
            Cars melt in Saudi Arabia due to the extreme heat in summers!!
            Almost believed it, didn’t you? Extremely eye-catching, and in most
            cases misleading ,these kind of clickbaits and captions are all
            fabricated information, designed to manipulate our thoughts and
            decisions. The world is witnessing a rapid rise in news stories that
            are high on emotion and low on facts; leaving us often confused on
            whether we must raise an eyebrow, or raise our voices. Major media
            and tech organizations like Google and WhatsApp have invested over
            $300 million into combating fake news, in addition to the many
            activists, NGOs and interest groups supporting the cause. So this
            year, we at Shaastra initiated 'Debunk', a brand-new initiative by
            Shaastra to increase media literacy, dismantle myths, dissolve
            delusions and eliminate illusions.
          </p>
          <br></br>
          <br></br>
          <h2>WHO ARE WE?</h2>
          <p>
            Debunk is India’s first ever student-run initiative to address the
            growing bane of misinformation in popular media. Through a series of
            innovative events, competitions, and creative collaborations, we aim
            to strengthen awareness among students, researchers, industry and
            the general public about the importance of media literacy and equip
            them with modern fact-checking tools which will enable them to
            discern fact from fake as they fight their way across manipulative
            content in media.
          </p>
        </div>
        <div className="deb-inits">
          <h2>OUR EVENTS AND INITIATIVES:</h2>
          <br></br>
          <br></br>
          <div className="theme">
            <h3>Theme Reveal</h3>
          </div>
          <div className="deb-inits-1">
            <div id="debimg1"></div>
            <div>
              <p>
                Our first event during this tenure was a theme reveal event (in
                August 2022) - a Fact v/s Fake crowd engaging interactive quiz.
                The event proved to be extremely successful with 500+ people
                participating in a matter of just 3 hours and got students
                talking about the spread of misinformation in the campus.
              </p>
            </div>
          </div>
          <div className="deb-inits-2">
            <br></br>
            <br></br>
            <div className="facts">
              <h3>Fact Checking Workshops</h3>
            </div>
            <div id="debimg2"></div>
            <div>
              <p>
                Debunk in partnership with BOOM (one of India’s first and
                leading fact-checking initiatives) also conducted a series of
                workshops on digital media literacy and fact-checking in October
                for the general public, particularly the youth. With an
                attendance of over 1000 participants, the workshops were
                successful in imparting critical thinking and observational
                skills – both key elements required for identifying fake news –
                through engaging games, quizzes, and other activities.
              </p>
            </div>
          </div>
          <div className="deb-news">
            <br></br>
            <br></br>
            <h3>Debunk Newsletter</h3>
            <p>
              The partnership also runs a monthly newsletter, ‘Debunk by BOOM’,
              covering the latest happenings in the misinformation space.
            </p>
            <div className="imgcont">
              <div className="deb-news-img1"></div>
              <div className="deb-news-img2"></div>
              <div className="deb-news-img3"></div>
            </div>
          </div>

          <div className="debunkathon">
            <br></br>
            <br></br>
            <h3>Debunkathon</h3>
            <p>
              An AI-ML based Hackathon to build innovative implementable
              solutions to growing misinformation (such as detection using NLP,
              source detection, deep fakes, etc.). We have partnered with
              DataLeads - Fact Shaala in organizing this competition. The
              problem statement will be out soon! Register now{" "}
            </p>
          </div>
          <div className="aifcb">
            <br></br>
            <br></br>
            <h3>All India Fact Check Battle</h3>

            <p>
              Debunk in association with BOOM is proud to announce the All India
              Fact Check Battle, our flagship fact-checking competition. Started
              in the 2nd week of December, Fact Check Battle runs through a
              series of contests that dwell into media literacy and news
              verification over three rounds, each testing participants’
              fact-checking mettle in different ways. Fact Check Battle also
              includes mentorship by professional fact-checkers across the
              country. The finals will be held during Shaastra 2023 in IITM
              campus.
            </p>
            <div className="aifcb-img"></div>
          </div>
          {/* <div className="misinfo">
            
            <h3>
              Conference on Technical and Policy _______ of Misinformation
            </h3>
            <p>
              We are organizing the (conf name). The conference aims to propose
              the first-ever policy suggestion to the government on regulating
              the use of technical tools concerning misinformation. The
              conference will happen on the 28th of January, 2023 with speakers
              from technical and policy-making backgrounds highlighting the
              necessity of policy in the newly emerging technologies, with a
              special focus on Deepfakes. (2 posters of panelists)
            </p>
          </div> */}

          <div className="discord">
            <h3>Discord Community</h3>
          </div>
          <p>
            As a part of our engaging initiatives, we have also created a
            discord community, which is a forum for fact-checking professionals
            and enthusiasts to analyze, b, consult, discuss and endorse many
            articles and latest evolving technologies related to the domain of
            fact-checking.
            <a href="https://discord.gg/wJT3BmjP">
              https://discord.gg/wJT3BmjP
            </a>
          </p>
        </div>
      </section>

      <Footer
        designed={[
          { name: "Arnav", mail: "mailto:Cs21b009@smail.IITM.AC.in " },
        ]}
      />
    </body>
  );
}

export default debunk;
