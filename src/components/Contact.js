import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <form name="contact" method="POST" data-netlify="true">
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />

        <label>Message</label>
        <textarea name="message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
