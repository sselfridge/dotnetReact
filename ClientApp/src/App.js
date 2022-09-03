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
  letMeKnow: "contributeSection",
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
      <div className="root">
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
          <a href="#segmentList">
            <div className="button segments">Segment List Announced!</div>
          </a>
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
            running. Starts Memorial Day weekend and runs til just before labor
            day weekend
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
        </section>
        <section id="segmentList">
          <h1>Segments</h1>

          <article>
            <h3>Road</h3>
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>KOM</th>
                  <th>Miles</th>
                  <th>Elevation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <a href={"https://www.strava.com/segments/658277"}>
                      Gibraltar
                    </a>
                  </td>
                  <td>0:27:12</td> <td>6.14</td> <td>2593</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <a href={"https://www.strava.com/segments/1290381"}>OSM</a>
                  </td>
                  <td>0:12:58</td> <td>2.97</td> <td>1165</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <a href={"https://www.strava.com/segments/637362"}>
                      Painted Cave
                    </a>
                  </td>
                  <td>0:15:44</td> <td>3.52</td> <td>1336</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    <a href={"https://www.strava.com/segments/881465"}>
                      Ladera
                    </a>
                  </td>
                  <td>0:04:23</td> <td>0.86</td> <td>496</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    <a href={"https://www.strava.com/segments/631703"}>
                      Farren Road
                    </a>
                  </td>
                  <td>0:06:59</td> <td>2.01</td> <td>508</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>
                    <a href={"https://www.strava.com/segments/3596686"}>
                      Tunnel Rd
                    </a>
                  </td>
                  <td>0:10:43</td> <td>1.92</td> <td>647</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>
                    <a href={"https://www.strava.com/segments/29015105"}>
                      Roundabout to Mtn
                    </a>
                  </td>
                  <td>0:13:22</td> <td>2.91</td> <td>710</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>
                    <a href={"https://www.strava.com/segments/618305"}>
                      Toro Canyon Full
                    </a>
                  </td>
                  <td>0:14:14</td> <td>2.17</td> <td>1194</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>
                    <a href={"https://www.strava.com/segments/1313"}>
                      First Casitas Pass
                    </a>
                  </td>
                  <td>0:08:16</td> <td>2.5</td> <td>730</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>
                    <a href={"https://www.strava.com/segments/1315"}>
                      Second Casitas Pass
                    </a>
                  </td>
                  <td>0:04:30</td> <td>1.33</td> <td>404</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>
                    <a href={"https://www.strava.com/segments/5106261"}>
                      Casitas Climb (rear)
                    </a>
                  </td>
                  <td>0:12:25</td> <td>4.42</td> <td>654</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>
                    <a href={"https://www.strava.com/segments/12039079"}>
                      Sycamore Coyote
                    </a>
                  </td>
                  <td>0:11:19</td> <td>2.22</td> <td>736</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>
                    <a href={"https://www.strava.com/segments/813814"}>
                      Arroyo Burro to La Cumbre
                    </a>
                  </td>
                  <td>0:12:10</td> <td>2.67</td> <td>879</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>
                    <a href={"https://www.strava.com/segments/751029"}>
                      Las Alturas
                    </a>
                  </td>
                  <td>0:05:35</td> <td>1.3</td> <td>597</td>
                </tr>
              </tbody>
            </table>
            <h3>Gravel</h3>
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>KOM</th>
                  <th>Miles</th>
                  <th>Elevation</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <a href="https://www.strava.com/segments/746977">
                      Angostura
                    </a>
                  </td>
                  <td>0:31:27</td> <td>5.89</td> <td>1738</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    <a href="https://www.strava.com/segments/647251"> Romero</a>
                  </td>
                  <td>0:36:01</td> <td>6.09</td> <td>2178</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <a href="https://www.strava.com/segments/2622235">
                      {" "}
                      Arroyo Burro
                    </a>
                  </td>
                  <td>0:33:30</td> <td>5.3</td> <td>1944</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    <a href="https://www.strava.com/segments/641588">
                      Refugio Ocean side
                    </a>
                  </td>
                  <td>0:58:14</td> <td>12.43</td> <td>3838</td>
                </tr>
              </tbody>
            </table>
            <div id="postSegmentText">
              Did I miss one?
              <div id="letMeKnow" className="button">
                Let me know!!
              </div>
            </div>
          </article>
        </section>
      </div>
    );
  }
}
