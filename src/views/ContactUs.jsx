
import React from "react";
const ContactUs = () => {
    return (
      <div className="contact-us">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us!</p>
        {/* You can add a form or any other content here */}
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default ContactUs;