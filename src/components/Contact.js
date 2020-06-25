import React from "react";
import NetlifyForm from "react-netlify-form";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <NetlifyForm name="contact">
        {({ loading, error, success }) => (
          <div>
            {loading && <div>Loading...</div>}
            {error && (
              <div style={{ color: "red", marginBottom: "1em" }}>
                Your information was not sent. Please try again later.
              </div>
            )}
            {success && (
              <div style={{ color: "green", marginBottom: "1em" }}>
                Thank you for contacting us!
              </div>
            )}
            {!loading && !success && (
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="Name"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  name="Email"
                  required
                />
                <textarea placeholder="Your Message" name="Message" required />
                <button>Submit</button>
              </div>
            )}
          </div>
        )}
      </NetlifyForm>
    </section>
  );
}
