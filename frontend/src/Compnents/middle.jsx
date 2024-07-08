import React from "react";
import middleimg from "./middleimg.json";
import middleimg2 from "./middleimg2.json";
import Lottie from "lottie-react";

import "./style.css";

export default function Middle() {
  return (
    <div className="middle_cntnr">
      {/* heading */}

      {/* body future */}
      <div className="middle_body">
        <div className="middle_body1">
          <h2>
            The future of cryptocurrency promises innovation, increased
            adoption, and potential <span>challenges</span>.
          </h2>
          <br />
        </div>

        <div className="middle_body2">
          <Lottie
            animationData={middleimg}
            style={{ width: "250px", height: "auto" }}
          />
        </div>
      </div>

      <br/> <br/>

      <div className="middle_body">
        <div className="middle_body6">
          <Lottie
            animationData={middleimg2}
            style={{ width: "400px", height: "auto" }}
          />
        </div>

        <div className="middle_body5">
          <h2>
            The future of crypto robots promises automation, efficiency,
            advanced trading, and security.
          </h2>
          <br />
        </div>
      </div>

      {/*vedio */}
      <div className="middle_body3">
        <video
          autoPlay
          loop
          muted
          className="myVideo"
          src="vedioweb.mp4"
        ></video>
      </div>

      {/*ai */}
      <div class="middle_body4">
        <div>
          <h1>CASE STUDIES & RESOURCES</h1>
        </div>
        <div class="card_sec">
          <div class="card">
            <div class="image">
              <img src="c1.avif" alt="" className="blog_img" />
            </div>
            <div class="content">
              <p class="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium
              </p>
              <a class="action" href="#">
                Find out more
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="c2.avif" alt="" className="blog_img" />
            </div>
            <div class="content">
              <p class="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium
              </p>
              <a class="action" href="#">
                Find out more
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="c3.jpg" alt="" className="blog_img" />
            </div>
            <div class="content">
              <p class="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium
              </p>
              <a class="action" href="#">
                Find out more
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div class="card">
            <div class="image">
              <img src="c4.jpg" alt="" className="blog_img" />
            </div>
            <div class="content">
              <p class="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium
              </p>
              <a class="action" href="#">
                Find out more
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* pricing */}    
      <div className="middle_body7">
        <h1>PRICING</h1>
        <br />
        <br />

        <div class="pricing_sec">
            <div className="pricing_box">
                <img src="p1.avif" alt="" />
                
                <h3>Free</h3>
                <p>Perfect for developers who need a simple platform.</p>
                <h2><sup>$</sup>0<sub>/month</sub></h2>
                <span>Forever</span>
                <br/>
                <button>Get started</button>
                <div className="list">
                <p>Host open source projects</p>
                <p>Host unlimited users</p>
                <p>Get unlimited support</p>
                <p>Unlimited downloads</p>
                <p>Flexible project managment features</p>
                <p>24/7 support</p>
                <p>Community Support</p>
                <p>Blazing fast cloud developers</p>
                <p>Spark copilot access</p>
                <p>Spark codespace access</p>
                <p>Code of Conduct</p>
                <p>Darft pull request</p>
                </div>
            </div>
        </div>

        
      </div>
    </div>
  );
}
