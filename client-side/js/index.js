import apiActions from "./api-actions/api-actions";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import user_login from "./pages/LoginPage";
import userWelcome from "./pages/UserProfilePage";
import MoodsPage from "./pages/MoodsPage";
import TriggersPage from "./pages/TriggersPage";
import CopingMechanismsPage from "./pages/CopingMechanismsPage";
import ConsequencesPage from "./pages/ConsequencesPage";
import ResultsPage from "./pages/ResultsPage";
import ResponsesPage from "./pages/ResponsesPage";
import AlternativesPage from "./pages/AlternativesPage";
import ReviewsPage from "./pages/ReviewsPage";
import AboutUsPage from "./pages/AboutUsPage";
import AssessmentPage from "./pages/AssessmentPage";
import AppointmentPage from "./pages/AppointmentPage";
import ContactUsPage from "./pages/ContactUsPage";
import LegalPage from "./pages/LegalPage";
import InspirationalQuote from "./components/InspirationalQuote";
import LoginPage from "./pages/LoginPage";
import LoginDraft from "./pages/LoginPage";
import AssesmentMenu from "./rendering/AssessMenu";

const app = document.querySelector("#app");
const affirmation_api_url = "https://type.fit/api/quotes";
// const affirmation_api_url ="https://zenquotes.io/api/quotes/";
// const affirmation_api_url = 'https://zenquotes.io/api/today/';

buildPage();

function buildPage() {
  header();
  footer();
  renderUserLogin();
  home();
  moods();
  triggers();
  copingMechanisms();
  consequences();
  results();
  alternatives();
  responses();
  reviews();
  about();
  navUserProfile();
  contact();
  appointment();
  legal();
  loginDraft();
}

const getMood = new AssesmentMenu();

function navUserProfile() {
  const profilePage = document.querySelector(".nav__list_profile");
  profilePage.addEventListener("click", () => {
    console.log("firing!");
    const app = document.querySelector("#app");
    apiActions.getRequest("http://localhost:8080/users", (user) => {
      app.innerHTML = userWelcome(user);
    });
  });
}

function header() {
  const headerElement = document.querySelector(".header");
  headerElement.innerHTML = Header();
}
function footer() {
  const footerElement = document.querySelector(".footer");
  footerElement.innerHTML = Footer();
}

function renderUserLogin() {
  app.innerHTML = LoginDraft();
  app.addEventListener("click", (event) => {
    console.log("firing");
    if (event.target.classList.contains("loginButton")) {
      const userName =
        event.target.parentElement.querySelector(".userName").value;
      const password =
        event.target.parentElement.querySelector(".password").value;

      apiActions.postRequest(
        "http://localhost:8080/create_user_profile",
        {
          userName: userName,
          password: password,
        },
        (app.innerHTML = HomePage()),
        (users) => (app.innerHTML = userWelcome(users))
      );
    }
  });
}
function populateAssessmentMenu() {
  app.innerHTML = AssessmentPage();
  const assessmentButton = document.querySelector(".assessBtn");
  assessmentButton.addEventListener("click", (event) => {
    if (event.target.parentElement.querySelector(".intakeMood")) {
      const moodMenu = document.getElementsByTagName("option");

      if (moodMenu[1].selected) {
        getMood.getAfraid();
        apiActions.postRequest(
          "http://localhost:8080/send_response",
          {
            mood: moodMenu[1].value,
          },

          (responses) => (app.innerHTML = ResponsesPage(responses))
        );
      } else if (moodMenu[2].selected) {
        getMood.getAnxious();
      } else if (moodMenu[3].selected) {
        getMood.getSad();
      } else if (moodMenu[4].selected) {
        getMood.getLonely();
      } else if (moodMenu[5].selected) {
        getMood.getDepressed();
      } else if (moodMenu[6].selected) {
        getMood.getHopeless();
      } else if (moodMenu[7].selected) {
        getMood.getSuicidal();
      } else if (moodMenu[8].selected) {
        getMood.getHomicidal();
      } else if (moodMenu[9].selected) {
        getMood.getExhausted();
      }
    }
  });
}

function renderUser() {
  app.innerHTML = userWelcome();
  app.addEventListener("click", (event) => {
    if (event.target.classList.contains(".userName")) {
      const userId = event.target.parentElement.querySelector("#userId").value;
      apiActions.getRequest(userId, (user) => {
        app.innerHTML = userInfo(user);
      });
    }
  });
}

function loginDraft() {
  const homeElement = document.querySelector(".loginButton");
  homeElement.addEventListener("click", () => {
    app.innerHTML = HomePage();
  });
}

function moods() {
  const moodElement = document.querySelector(".nav__list_moods");
  moodElement.addEventListener("click", () => {
    console.log("firing!");
    apiActions.getRequest("http://localhost:8080/moods", (moods) => {
      console.log(moods);
      app.innerHTML = MoodsPage(moods);
    });
  });
}

function triggers() {
  const triggerElement = document.querySelector(".nav__list_triggers");
  triggerElement.addEventListener("click", () => {
    console.log("firing!");
    apiActions.getRequest("http://localhost:8080/triggers", (triggers) => {
      console.log(triggers);
      app.innerHTML = TriggersPage(triggers);
    });
  });
}

function copingMechanisms() {
  const copingElement = document.querySelector(".nav__list_coping_mechanisms");
  copingElement.addEventListener("click", () => {
    console.log("firing!");
    apiActions.getRequest(
      "http://localhost:8080/coping",
      (copingMechanisms) => {
        console.log(copingMechanisms);
        app.innerHTML = CopingMechanismsPage(copingMechanisms);
      }
    );
  });
}

function consequences() {
  const consequencesElement = document.querySelector(".nav__list_consequences");
  consequencesElement.addEventListener("click", () => {
    console.log("firing!");
    apiActions.getRequest(
      "http://localhost:8080/consequences",
      (consequences) => {
        console.log(consequences);
        app.innerHTML = ConsequencesPage(consequences);
      }
    );
  });
}

function results() {
  const resultsElement = document.querySelector(".nav__list_results");
  resultsElement.addEventListener("click", () => {
    console.log("firing!");
    apiActions.getRequest("http://localhost:8080/results", (results) => {
      console.log(results);
      app.innerHTML = ResultsPage(results);
    });
  });
}

function alternatives() {
  const alternativesElement = document.querySelector(".nav__list_alternatives");
  alternativesElement.addEventListener("click", () => {
    apiActions.getRequest(
      "http://localhost:8080/alternatives",
      (alternatives) => {
        console.log(alternatives);
        app.innerHTML = AlternativesPage(alternatives);
      }
    );
  });
}

function responses() {
  const responseElement = document.querySelector(".nav__list_responses");
  responseElement.addEventListener("click", () => {
    console.log("firing!");
    apiActions.getRequest("http://localhost:8080/responses", (responses) => {
      console.log(responses);
      app.innerHTML = ResponsesPage(responses);
    });
  });
}

function reviews() {
  const reviewElement = document.querySelector(".nav__list_reviews");
  reviewElement.addEventListener("click", () => {
    app.innerHTML = ReviewsPage();
  });
}

function about() {
  const aboutElement = document.querySelector(".footer_list_aboutUs");
  aboutElement.addEventListener("click", () => {
    app.innerHTML = AboutUsPage();
  });
}

function contact() {
  const contactElement = document.querySelector(".footer_list_contactUs");
  contactElement.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = ContactUsPage();
  });
}

function appointment() {
  const appointmentElement = document.querySelector(".nav__list_appointment");
  appointmentElement.addEventListener("click", () => {
    app.innerHTML = AppointmentPage();
  });
}

function legal() {
  const legalElement = document.querySelector(".footer_list_legal");
  legalElement.addEventListener("click", () => {
    app.innerHTML = LegalPage();
  });
}
function slideShow() {
  const slideshows = document.querySelectorAll(".slideshow");
  slideshows.forEach(initSlideShow);
}
function initSlideShow(slideshow) {
  var slides = slideshow
    .querySelector("div")
    .querySelectorAll(".slideShowGrid");
  var index = 0,
    time = 5000;
  slides[index].classList.add("active");
  setInterval(() => {
    slides[index].classList.remove("active");
    index++;
    if (index === slides.length) index = 0;
    slides[index].classList.add("active");
  }, time);
}

function assessment() {
  const assessmentElement = document.querySelector(".assessmentButton");
  assessmentElement.addEventListener("click", () => {
    console.log("Firing!");
    app.innerHTML = AssessmentPage();
    populateAssessmentMenu();
  });
}

function home() {
  const homeElement = document.querySelector(".nav__list_home");
  homeElement.addEventListener("click", () => {
    app.innerHTML = HomePage();
    slideShow();
    assessment();
  });
}

function getAffirmationApi(url) {
  const quoteDiv = document.querySelector(".inspirational_quote__container");
  quoteDiv.onload = () => {
    apiActions.getRequest(url, (quotes) => {
      quoteDiv.innerHTML = InspirationalQuote(
        quotes[Math.floor(Math.random() * quotes.length)]
      );

      // quotes.forEach((quote, index) => {
      //   quoteDiv.innerHTML = InspirationalQuote(quote);
      // });

      // apiActions.getRequest(url, (quote) => {
      //     console.log(quote);
      //     quoteDiv.innerHTML = InspirationalQuote(quote[0]);
      // });
    });
  };
}
