import React from "react";
import '../AboutUs.css';
const ContactUs = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>If you have any questions, feel free to reach out to us!</p>

      {/* Our Mission Section */}
      <section className="our-mission">
        <h3>Our Mission</h3>
        <p>
          Our mission is to create a platform that fosters innovation and
          collaboration, making the world a better place for everyone.
        </p>
      </section>

      {/* Our History Section */}
      <section className="our-history">
        <h3>Our History</h3>
        <p>
          Founded in 2023, we started as a small team of enthusiasts committed
          to solving real-world problems. Over the years, we've grown into a
          global community of creators and innovators.
        </p>
      </section>

      {/* Creators Section */}
      <section className="creators">
        <h3>Meet the Creators</h3>
        <div className="cards">
          {/* Creator 1 */}
          <div className="card">
            <img src="https://media.gettyimages.com/id/517391954/photo/adolf-hitler.jpg?s=612x612&w=gi&k=20&c=76Cpxew4iynawDO9yh4NwB2rVfqiTD27jp8370S_ag4=" alt="Creator 1" className="creator-image" />
            <h4>Adlof Hitler</h4>
            <p>The OG Developer</p>
          </div>

          {/* Creator 2 */}
          <div className="card">
            <img src="https://i.pinimg.com/736x/31/86/15/31861521d16446e9803dbbdbba4ba913.jpg" alt="Creator 2" className="creator-image" />
            <h4>Batman</h4>
            <p>The Savior</p>
          </div>

          {/* Creator 3 */}
          <div className="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Che_Guevara_-_Guerrillero_Heroico_by_Alberto_Korda.jpg/1200px-Che_Guevara_-_Guerrillero_Heroico_by_Alberto_Korda.jpg" alt="Creator 3" className="creator-image" />
            <h4>Che guevara</h4>
            <p>UI/UX Designer and Creative Mind</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
