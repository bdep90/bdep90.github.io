'use strict';

window.onload = function () {
  // Selectors ------------------
  const homeLink = document.getElementById('home-link');
  const portfolioLink = document.getElementById('portfolio-link');
  const aboutLink = document.getElementById('about-link');

  const content = document.getElementById('content');
  const home = document.getElementById('home');
  const portfolio = document.getElementById('portfolio');
  const about = document.getElementById('about');

  // Onload default -------------
  // function default() {
  //   home.style.display = "block";
  //   document.body.style.background = "url('images/yarn.jpg') no-repeat center center fixed";
  //   document.body.style.backgroundSize = "cover";
  // };

  // Events ---------------------
  homeLink.addEventListener('click', () => {
    showHome();
  });

  portfolioLink.addEventListener('click', () => {
    showPortfolio();
  });

  aboutLink.addEventListener('click', () => {
    showAbout();
  });

  // Behavior ------------------
  let showHome = function () {
    home.style.display = "block";
    portfolio.style.display = "none";
    about.style.display = "none";
    document.body.style.background = "url('images/yarn.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
  };
  // implement scrollTop

  let showPortfolio = function () {
    home.style.display = "none";
    portfolio.style.display = "inline-flex";
    about.style.display = "none";
    document.body.style.background = "url('images/diagonal.png') repeat center center fixed";
    // showProjectOneImage();
  };

  let showAbout = function () {
    home.style.display = "none";
    portfolio.style.display = "none";
    about.style.display = "block";
    document.body.style.background = "url('images/diagonal.png') repeat center center fixed";
  };

};
