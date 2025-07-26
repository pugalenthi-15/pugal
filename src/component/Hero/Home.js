import React from "react";
import "./Home.css";
// import hero from "../pic/hero.png"
import skill1 from "../pic/skill1.png";
import skill2 from "../pic/skill2.png";
import skill3 from "../pic/skill3.png";
import { Typewriter } from "react-simple-typewriter";
import info from "../../info.json";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>PUGALENTHI</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                  words={info.typewrite_content}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>{info.description}</p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>FIND WITH ME</h4>
                <div className="button">
                  <a
                    href={info.profile.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn_shadow">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                  </a>
                  <a
                    href={info.profile.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn_shadow">
                      <i className="fab fa-instagram"></i>
                    </button>
                  </a>
                  <a
                    href={info.profile.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn_shadow">
                      <i className="fab fa-linkedin-in"></i>
                    </button>
                  </a>
                </div>
              </div>
              <div className="col_1">
                <h4>BEST SKILL ON</h4>
                {/* <button className="btn_shadow">
                  <img src={skill1} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={skill2} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={skill3} alt="" />
                </button> */}
                <button className="btn_shadow">
                  <img src="pugal/images/laravel.png" alt="" />
                </button>
                <button className="btn_shadow">
                  <img src="pugal/images/django.png" alt="" />
                </button>
                <button className="btn_shadow">
                  <img src="pugal/images/python.png" alt="" />
                </button>
                {/* <button className="btn_shadow">
                  <img src="/images/skills/mysql.png" alt="" />
                </button> */}
                <button className="btn_shadow">
                  <img src="pugal/images/github.png" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={info.profile.logo} alt="hai" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
