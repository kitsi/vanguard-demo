export default function ContactUsPage() {
    return `
    <link rel="stylesheet" href="css/form.css">
      
      <div class="contact__container shorter">
      <h1> Talk To Us !! </h1> 
    <div class="row">
      <div class="column">

      <form id="form1" method="post" action="javascript:alert('Submitted')">
          <label for="fname">First Name:</label>
          <input type="text" id="fname"  class="shorter"name="firstname" placeholder="Your name..">
          <span class="invalid" id="name-status"></span>
          </br>
          <label for="lname">Last Name:</label>
          <input type="text" id="lname" class="shorter" name="lastname" placeholder="Your last name..">
          <span class="invalid" id="name-status"></span>
          </br>
          <label for="email">Email Address:</label>
          <input type="text" id="email" class="shorter" name="email placeholder="Your email..">
          <span class="invalid" id="email-status"></span>
          </br>
          <label for="email"> Your Thoughts: </label>
          </br>
          <textarea id="subject" name="subject" placeholder="Write something.." style="height:170px"></textarea>
          
          <div class="star-rating" >
          <div class="thanks-msg">Thank you for your feedback! Please Rate Us! </div>
            <div class="star-input">
            <select class="form-control" id="rate">
            <option value="1star">1</option>
            <option value="2stars">2</option>
            <option value="3stars">3</option>
            <option value="4stars">4</option>
            <option value="5stars">5</option>
          </select>

  
                    <span class="rating-reaction"></span>
                    <button onclick="submit" class="submit-rating">Submit</button>

                    
                
          </div>
        </form>
      </div>
    </div>
      `;
  }