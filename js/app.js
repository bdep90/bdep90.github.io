'use strict';
// TO-DO: reload to current page & scrollTop

window.onload = () => {
  // Selectors ------------------
  // Main Pages
  const homeLink = document.getElementById('home-link');
  const home = document.getElementById('home');
  const portfolioLink = document.getElementById('portfolio-link');
  const portfolio = document.getElementById('portfolio');
  const aboutLink = document.getElementById('about-link');
  const about = document.getElementById('about');

  // Projects
  const allProjects = document.getElementById('projects');
  const individualProjects = document.getElementsByClassName('project');
  const projectOneLink = document.getElementById('portfolio-project1');
  const projectOneCard = document.getElementById('project1');
  const projectFourLink = document.getElementById('portfolio-project4');
  const projectFourCard = document.getElementById('project4');
  const projectSevenLink = document.getElementById('portfolio-project7');
  const projectSevenCard = document.getElementById('project7');
  const projectTwoLink = document.getElementById('portfolio-project2');
  const projectTwoCard = document.getElementById('project2');
  const projectFiveLink = document.getElementById('portfolio-project5');
  const projectFiveCard = document.getElementById('project5');
  const projectEightLink = document.getElementById('portfolio-project8');
  const projectEightCard = document.getElementById('project8');
  const projectThreeLink = document.getElementById('portfolio-project3');
  const projectThreeCard = document.getElementById('project3');
  const projectSixLink = document.getElementById('portfolio-project6');
  const projectSixCard = document.getElementById('project6');
  const closeProjectLinks = document.getElementsByClassName('close');

  // Resume
  const resumeLink = document.getElementById('resume-link');
  const resume = document.getElementById('resume');
  const closeResumeLink = document.getElementById('close');

  // Onload defauls -------------
  home.style.display = "block";
  document.body.style.background = "url('images/yarn.jpg') no-repeat center center fixed";
  document.body.style.backgroundSize = "cover";

  // Listeners ---------------------
  homeLink.addEventListener('click', () => {
    showHome();
  });

  portfolioLink.addEventListener('click', () => {
    showPortfolio();
  });

  aboutLink.addEventListener('click', () => {
    showAbout();
  });

  projectOneLink.addEventListener('click', () => {
    showProjectOne();
  });

  projectFourLink.addEventListener('click', () => {
    showProjectFour();
  });

  projectSevenLink.addEventListener('click', () => {
    showProjectSeven();
  });

  projectTwoLink.addEventListener('click', () => {
    showProjectTwo();
  });

  projectFiveLink.addEventListener('click', () => {
    showProjectFive();
  });

  projectEightLink.addEventListener('click', () => {
    showProjectEight();
  });

  projectThreeLink.addEventListener('click', () => {
    showProjectThree();
  });

  projectSixLink.addEventListener('click', () => {
    showProjectSix();
  });

  for (var i = 0; i < closeProjectLinks.length; i++) {
    closeProjectLinks[i].addEventListener('click', () => {
      showPortfolio();
    });
  };

  resumeLink.addEventListener('click', () => {
    showResume();
  });

  closeResumeLink.addEventListener('click', () => {
    showAbout();
  });

  // Behavior ------------------
  let showHome = () => {
    home.style.display = "block";
    portfolio.style.display = "none";
    about.style.display = "none";
    allProjects.style.display = "none";
    resume.style.display = "none";
    document.body.style.background = "url('images/yarn.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
  };

  let showPortfolio = () => {
    home.style.display = "none";
    portfolio.style.display = "inline-flex";
    about.style.display = "none";
    allProjects.style.display = "none";
    resume.style.display = "none";
    document.body.style.background = "url('images/diagonal.png') repeat center center fixed";
  };

  let showAbout = () => {
    home.style.display = "none";
    portfolio.style.display = "none";
    about.style.display = "block";
    allProjects.style.display = "none";
    resume.style.display = "none";
    document.body.style.background = "url('images/diagonal.png') repeat center center fixed";
  };

  let hideMainPages = () =>{
    home.style.display = "none";
    portfolio.style.display = "none";
    about.style.display = "none";
  };

  let showProjectOne = () => {
    hideMainPages();
    allProjects.style.display = "flex";
    projectOneCard.style.display = "block";
    projectTwoCard.style.display = "none";
    projectThreeCard.style.display = "none";
    projectFourCard.style.display = "none";
    projectFiveCard.style.display = "none";
    projectSixCard.style.display = "none";
    projectSevenCard.style.display = "none";
    projectEightCard.style.display = "none";
  };

  let showProjectFour = () => {
    hideMainPages();
    allProjects.style.display = "flex";
    projectOneCard.style.display = "none";
    projectTwoCard.style.display = "none";
    projectThreeCard.style.display = "none";
    projectFourCard.style.display = "block";
    projectFiveCard.style.display = "none";
    projectSixCard.style.display = "none";
    projectSevenCard.style.display = "none";
    projectEightCard.style.display = "none";
  };

  let showProjectSeven = () => {
    hideMainPages();
    allProjects.style.display = "flex";
    projectOneCard.style.display = "none";
    projectTwoCard.style.display = "none";
    projectThreeCard.style.display = "none";
    projectFourCard.style.display = "none";
    projectFiveCard.style.display = "none";
    projectSixCard.style.display = "none";
    projectSevenCard.style.display = "block";
    projectEightCard.style.display = "none";
  };

  let showProjectTwo = () => {
    hideMainPages();
    allProjects.style.display = "flex";
    projectOneCard.style.display = "none";
    projectTwoCard.style.display = "block";
    projectThreeCard.style.display = "none";
    projectFourCard.style.display = "none";
    projectFiveCard.style.display = "none";
    projectSixCard.style.display = "none";
    projectSevenCard.style.display = "none";
    projectEightCard.style.display = "none";
  };

  let showProjectFive = () => {
    hideMainPages();
    allProjects.style.display = "flex";
    projectOneCard.style.display = "none";
    projectTwoCard.style.display = "none";
    projectThreeCard.style.display = "none";
    projectFourCard.style.display = "none";
    projectFiveCard.style.display = "block";
    projectSixCard.style.display = "none";
    projectSevenCard.style.display = "none";
    projectEightCard.style.display = "none";
  };

  let showProjectEight = () => {
    hideMainPages();
    allProjects.style.display = "flex";
    projectOneCard.style.display = "none";
    projectTwoCard.style.display = "none";
    projectThreeCard.style.display = "none";
    projectFourCard.style.display = "none";
    projectFiveCard.style.display = "none";
    projectSixCard.style.display = "none";
    projectSevenCard.style.display = "none";
    projectEightCard.style.display = "block";
  };

  let showProjectThree = () => {
    hideMainPages();
    allProjects.style.display = "flex";
    projectOneCard.style.display = "none";
    projectTwoCard.style.display = "none";
    projectThreeCard.style.display = "block";
    projectFourCard.style.display = "none";
    projectFiveCard.style.display = "none";
    projectSixCard.style.display = "none";
    projectSevenCard.style.display = "none";
    projectEightCard.style.display = "none";
  };

  let showProjectSix = () => {
    hideMainPages();
    allProjects.style.display = "flex";
    projectOneCard.style.display = "none";
    projectTwoCard.style.display = "none";
    projectThreeCard.style.display = "none";
    projectFourCard.style.display = "none";
    projectFiveCard.style.display = "none";
    projectSixCard.style.display = "block";
    projectSevenCard.style.display = "none";
    projectEightCard.style.display = "none";
  };

  let showResume = () => {
    hideMainPages();
    resume.style.display = "flex";
  };

};
