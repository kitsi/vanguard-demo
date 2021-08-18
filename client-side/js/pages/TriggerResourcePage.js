import "../../css/response_page.css";
import "../../css/resource_page.css";

import HRLogoLong from "../../images/hr-logo-long.png";
export default function TriggerResourcePage(trigger){
    return `
    <div class = "home__container">
    <img class="home__HR_logo" src="${HRLogoLong}">
    <div class="inspirational_quote__container">
    </br>
  ${trigger.map((trigger) => {
      return `
      <h2 class= "triggerHeader">${trigger.trigger.name} Resources</h2>
      <div class="userClassContainer">
      <div class="userDiv1">
      <img src = ${trigger.trigger.triggerImage} width="300" height="300" >
      </div>
      <div class="userDiv2">
      <h4>Articles</h4>
      <p class = "trigger_article">${trigger.trigger.triggerArticle1}</p>
      <p class = "trigger_article">${trigger.trigger.triggerArticle2}</p>
      <p class = "trigger_article">${trigger.trigger.triggerArticle3}</p>
      </br>
      <h4>Free Support Hotlines</h4>
      <p class = "trigger_phoneNumber">${trigger.trigger.triggerPhoneResource1}</p>
      <p class = "trigger_phoneNumber">${trigger.trigger.triggerPhoneResource2}</p>
      <p class = "trigger_phoneNumber">${trigger.trigger.triggerPhoneResource3}</p>
      </div>
      </div>
      <h3 class = "trigger_disclaimer"><center>Disclaimer: ${trigger.trigger.triggerDisclaimer}</center></h3>
      `;
    })
    .join("")}
   
  `;
}