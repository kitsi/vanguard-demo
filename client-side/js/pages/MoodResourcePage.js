import "../../css/response_page.css";

import HRLogoLong from "../../images/hr-logo-long.png";
export default function MoodResourcePage(moods){
    return `
    <div class = "home__container">
    <img class="home__HR_logo" src="${HRLogoLong}">
    <div class="inspirational_quote__container">
    <h1>This is the Moods Page</h1>
    </div>
    `;
}