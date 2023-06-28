import React from "react";
// import React, { useState } from "react";
import Projects from "./Projects";
import aboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";

import Navbar from "./navBar";
import Resume from "./resume";
export default function Header() {
  return (
    <section class="home-hero overflow-hidden">
      <div id="particles" class="col-sm-12">
        <div id="webcoderskull">
          <div class="home-hero__content overflow-auto">
            <h1 class="heading-primary">Hello! I'm Wyatt Howlett:</h1>
            <div class="home-hero__info .text-white">
              <p class="text-primary .text-white">FullStack Web Developer</p>
            </div>
            <div class="home-hero__cta">
              <a href="./index.html#projects" class="btn btn--bg">
                Projects
              </a>
            </div>
          </div>
          <div class="home-hero__socials">
            <div class="home-hero__social">
              <a
                href="https://www.linkedin.com/in/wyatt-howlett-399849254/"
                class="home-hero__social-icon-link"
              >
                <img
                  src="./assets/png/linkedin-ico.png"
                  alt="icon"
                  class="home-hero__social-icon"
                />
              </a>
            </div>
            <div class="home-hero__social">
              <a
                href="https://github.com/Whowlett13"
                class="home-hero__social-icon-link"
              >
                <img
                  src="./assets/png/github-ico.png"
                  alt="icon"
                  class="home-hero__social-icon"
                />
              </a>
            </div>

            <div class="home-hero__social">
              <a
                href="https://www.instagram.com/wyattever/"
                class="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
              >
                <img
                  src="./assets/png/insta-ico.png"
                  alt="icon"
                  class="home-hero__social-icon"
                />
              </a>
            </div>
          </div>

          <div class="home-hero__mouse-scroll-cont"></div>
        </div>
      </div>
    </section>
  );
}
