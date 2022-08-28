import React, { Component } from "react";
// import { Route } from "react-router";
// import { Layout } from "./components/Layout";
// import { Home } from "./components/Home";
// import { FetchData } from "./components/FetchData";
// import { Counter } from "./components/Counter";

// import './custom.css'
import "./mein.css";

import { ReactComponent as LogoV1 } from "./assets/logoV1.svg";
import { ReactComponent as Insta } from "./assets/insta.svg";
import { ReactComponent as StravaLogo } from "./assets/stravaLogo.svg";
const targetMap = {
  infoBtn: "infoSection",
  contributeBtn: "contributeSection",
  contributeBtn2: "contributeSection",
};
export default class App extends Component {
  static displayName = App.name;

  componentDidMount() {
    const btns = Object.keys(targetMap);

    const scrollToArea = (e) => {
      const id = targetMap[e.target.id];
      console.info("id: ", id);
      document
        .getElementById(id)
        .scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const onTextChange = () => {
      const ta = document.getElementById("textArea");
      const value = `${ta.value}`;
      const count = value.length;
      document.getElementById("textCount").innerText = 1000 - count;
    };

    btns.forEach((btn) =>
      document.getElementById(btn).addEventListener("click", scrollToArea)
    );
    document
      .getElementById("textArea")
      .addEventListener("keydown", onTextChange);
  }

  render() {
    window.onload = function () {
      const btns = Object.keys(targetMap);

      btns.forEach((btn) =>
        document.getElementById(btn).addEventListener("click", scrollToArea)
      );
      document
        .getElementById("textArea")
        .addEventListener("keydown", onTextChange);
    };

    const scrollToArea = (e) => {
      const id = targetMap[e.target.id];
      console.info("id: ", id);
      document
        .getElementById(id)
        .scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const onSubmit = () => {
      const textArea = document.getElementById("textArea");
      const value = textArea.value;
      const sendVal = encodeURIComponent(value);
      console.info("sendVal: ", sendVal);
      fetch(
        `https://www.mapper.bike/api/sbmt/submission/BikssesBeersBaby3a58a6bc3f6a?segment=${sendVal}`,
        { method: "GET", mode: "cors" }
      )
        .then((response) => response.json())
        .then(endSubmit)
        .catch(endSubmit);
    };

    const endSubmit = () => {
      document.getElementById("submitArea").classList.add("hideElm");
      document.getElementById("allDone").classList.remove("hideElm");
      document.getElementById("submitArea").classList.remove("flexCol");
      document.getElementById("allDone").classList.add("flexCol");
      document.getElementById("textArea").value = "";
    };

    const bringTextBack = () => {
      document.getElementById("submitArea").classList.remove("hideElm");
      document.getElementById("allDone").classList.add("hideElm");
      document.getElementById("submitArea").classList.add("flexCol");
      document.getElementById("allDone").classList.remove("flexCol");
    };

    const onTextChange = () => {
      const ta = document.getElementById("textArea");
      const value = `${ta.value}`;
      const count = value.length;
      document.getElementById("textCount").innerText = 1000 - count;
    };

    setInterval(onTextChange, 450);

    return (
      <div>
        <section>
          <div className="logo">
            {/* <img alt="rabble" id="logo" src="./assets/logoV1.svg" /> */}
            <LogoV1 id="logo" />
            <h2>
              Coming
              <br />
              May 26th 2023
            </h2>
          </div>
          <div id="infoBtn" className="button">
            Info
          </div>
          <div id="contributeBtn" className="button">
            Feedback / Contribute
          </div>
          <a href="https://www.instagram.com/sbmtchallenge/">
            <div>
              <Insta id="insta" />
            </div>
          </a>
          <div>
            <a href="https://www.strava.com/clubs/1051955">
              {/* <img alt="rabble" id="stravaIco" src="./assets/stravaLogo.svg" /> */}
              <StravaLogo id="stravaIco" />
            </a>
          </div>
          <div></div>
        </section>
        <section id="infoSection">
          <h1>
            What is <span className="sbmt">SBMT</span> ?
          </h1>
          <article>
            Inspired by the{" "}
            <a href="http://www.smmtchallenge.com">
              Santa Monica Mountain Challenge
            </a>{" "}
            the <span className="sbmt">SBMT</span> is the same idea here in
            Santa Barbara. <br />
            We'll have a list of 10-15 local cycling climbs and a leaderboard
            running. Starts Memorial Day weekend and runs through end of Labor
            Day weekend.
            <br />
            <br />
            Ranking is done 1st by number of segments completed, then total
            cumulative time. <br />
            <br />
            We'll have plenty of sub categories so you can compete against
            people you're competitive with.
            <br />
            <br />I discovered the SMMT during COVID and really enjoyed it, plus
            it got me to some areas of the Santa Monicas I probably wouldn't
            have done otherwise. Hoping to bring something similar to SB!
          </article>
          <div id="contributeBtn2" className="button">
            Feedback / Contribute
          </div>
        </section>
        <section id="contributeSection">
          <h1>Contribute</h1>
          <article>
            <div>
              <ul>
                <li>Have a segment suggestion?</li>
                <li>Care to be part of the beta testing?</li>
                <li>Want to help with coding / designing?</li>
                <li>Have any feedback or ideas for how to make this fun?</li>
                <li>Got a good recipe you'd like to share?</li>
              </ul>
            </div>
            <div className="contactList">
              <a href="https://www.instagram.com/sbmtchallenge/">
                @sbmtchallenge
              </a>
              <a href="mailTo:Sam.Selfridge@gmail.com">
                Sam.Selfridge@gmail.com
              </a>
            </div>
            <div className="flexCol" id="submitArea">
              <textarea
                id="textArea"
                placeholder="Message here..."
                maxlength="1000"
                onchange="onTextChange()"
              ></textarea>
              <span className="characterCount">
                <span id="textCount">1000</span> characters remaining
              </span>
              <div className="button" onClick={onSubmit}>
                Submit
              </div>
            </div>
            <div className="hideElm" id="allDone">
              <span>
                Thanks for your submission! <br />
                If you left contact info I'll get back to you.
              </span>
              <div className="button" onClick={bringTextBack}>
                Wait, I had more...
              </div>
            </div>
          </article>
        </section>{" "}
      </div>
    );
  }
}
