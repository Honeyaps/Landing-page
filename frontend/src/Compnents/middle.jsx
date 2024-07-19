import React from "react";
import middleimg from "./middleimg.json";
import middleimg2 from "./middleimg2.json";
import Lottie from "lottie-react";
import "./style.css";
import { IoCheckmark } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";

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
                <img src="p1.png" alt="" />
                
                <h3>Free</h3>
                <p className="amount"><sup>$</sup>0<sub>/month</sub></p>
                <span>Forever</span>
                <br/>
                <button>Get started</button>
                <div className="list">
                <p><IoCheckmark className="checkmark"/> Host open source projects</p>
                <p><IoCheckmark className="checkmark"/> Host unlimited users</p>
                <p><IoCheckmark className="checkmark"/> Get unlimited support</p>
                <p><IoCheckmark className="checkmark"/> Unlimited downloads</p>
                <p><IoCheckmark className="checkmark"/> Flexible project managment</p>
                <p><RxCross2 /> 24/7 support</p>
                <p><RxCross2 /> Community Support</p>
                <p><RxCross2 /> Blazing fast cloud developers</p>
                <p><RxCross2 /> Spark copilot access</p>
                <p><RxCross2 /> Spark codespace access</p>
                <p><RxCross2 /> Code of Conduct</p>
                <p><RxCross2 /> Darft pull request</p>
                </div>
            </div>
            <div className="pricing_box">
                <img src="p2.png" alt="" />
                
                <h3>Standard</h3>
                <p className="amount"><sup>$</sup>7<sub>/month</sub></p>
                <span>/per year</span>
                <br/>
                <button>Get started</button>
                <div className="list">
                <p><IoCheckmark className="checkmark"/> Host open source projects</p>
                <p><IoCheckmark className="checkmark"/> Host unlimited users</p>
                <p><IoCheckmark className="checkmark"/> Get unlimited support</p>
                <p><IoCheckmark className="checkmark"/> Unlimited downloads</p>
                <p><IoCheckmark className="checkmark"/> Flexible project managment</p>
                <p><IoCheckmark className="checkmark"/> 24/7 support</p>
                <p><IoCheckmark className="checkmark"/> Community Support</p>
                <p><RxCross2 /> Blazing fast cloud developers</p>
                <p><RxCross2 /> Spark copilot access</p>
                <p><RxCross2 /> Spark codespace access</p>
                <p><RxCross2 /> Code of Conduct</p>
                <p><RxCross2 /> Darft pull request</p>
                </div>
            </div>
            <div className="pricing_box">
                <img src="p3.png" alt="" />
                
                <h3>Premium</h3>
                <p className="amount"><sup>$</sup>19<sub>/month</sub></p>
                <span>/per year</span>
                <br/>
                <button>Get started</button>
                <div className="list">
                <p><IoCheckmark className="checkmark"/> Host open source projects</p>
                <p><IoCheckmark className="checkmark"/> Host unlimited users</p>
                <p><IoCheckmark className="checkmark"/> Get unlimited support</p>
                <p><IoCheckmark className="checkmark"/> Unlimited downloads</p>
                <p><IoCheckmark className="checkmark"/> Flexible project managment</p>
                <p><IoCheckmark className="checkmark"/> 24/7 support</p>
                <p><IoCheckmark className="checkmark"/> Community Support</p>
                <p><IoCheckmark className="checkmark"/> Blazing fast cloud developers</p>
                <p><IoCheckmark className="checkmark"/> Spark copilot access</p>
                <p><IoCheckmark className="checkmark"/> Spark codespace access</p>
                <p><IoCheckmark className="checkmark"/> Code of Conduct</p>
                <p><IoCheckmark className="checkmark"/> Darft pull request</p>
                </div>
            </div>
        </div>

        
      </div>

      {/* footer */}
      <footer className="footer">
        <div className="footer_content">
          <div className="footer_section about">
            <h3>About Us</h3>
            <p>
              We are committed to providing the best service and delivering exceptional value to our customers.
            </p>
          </div>
          <div className="footer_section links">
            <h3>Help</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>
          <div className="footer_section social">
            <h3>Follow Us</h3>
            <a href="#"><FaFacebookSquare /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaGithubSquare /></a>
            <a href="#"><FaDiscord /></a>
          </div>
        </div>
        <div className="footer_bottom">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
