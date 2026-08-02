import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { MoveDownRight, Mail, Phone } from "lucide-react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import AboutAnime from "../About-Page/AboutAnime";

const ContactForm = ({ styles }) => {
  const blackRef = useRef(null);
  const helloRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_iikgj2u",
        "template_xfmr7y7",
        {
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          service: formData.service,
          message: formData.message,
        },
        "jZq_zwwgExUDByktL",
      );

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        organization: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <section className={styles.contactPage}>
      <div
        ref={blackRef}
        className={`${styles.black} ${styles.flex} ${styles.ac} ${styles.jc}`}
      >
        <h2 ref={helloRef} className={styles.helloText}>
          • Contact
        </h2>
      </div>

      <div className={styles.container}>
        <div
          className={`${styles.topContent} ${styles.flex} ${styles.ac} ${styles.sb}`}
        >
          <p>
            Let's start a <br /> project together
          </p>
          <div className={`${styles.topImg} ${styles.flex} ${styles.fClmn}`}>
            <img src="/Images/favicon.png" alt="Guri Ghumaan's Image" />
            <MoveDownRight size={32} />
          </div>
        </div>

        <div className={`${styles.lastContent} ${styles.flex} ${styles.sb}`}>
          <div className={`${styles.formBox} ${styles.flex} ${styles.fClmn}`}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div
                className={`${styles.formGroup} ${styles.flex} ${styles.fClmn}`}
              >
                <label htmlFor="name">
                  {" "}
                  <span>01</span> What's your name ?
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Wick *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div
                className={`${styles.formGroup} ${styles.flex} ${styles.fClmn}`}
              >
                <label htmlFor="email">
                  {" "}
                  <span>02</span> What's your email ?
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@wick.com *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div
                className={`${styles.formGroup} ${styles.flex} ${styles.fClmn}`}
              >
                <label htmlFor="organization">
                  <span>03</span> What's the name of your organization ?
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  placeholder="John & Wick ®"
                  value={formData.organization}
                  onChange={handleChange}
                />
              </div>

              <div
                className={`${styles.formGroup} ${styles.flex} ${styles.fClmn}`}
              >
                <label htmlFor="service">
                  <span>04</span> What services are you looking for ?
                </label>
                <input
                  type="text"
                  id="service"
                  name="service"
                  placeholder="Web Design, Web Development..."
                  value={formData.service}
                  onChange={handleChange}
                />
              </div>

              <div
                className={`${styles.formGroup} ${styles.flex} ${styles.fClmn}`}
              >
                <label htmlFor="message">
                  <span>05</span> Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Hello Guri, can you help me with..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div
                className={`${styles.contactCta} ${styles.flex} ${styles.ac}`}
              >
                <button type="submit" className={styles.submitBtn}>
                  Send it!
                </button>
              </div>
            </form>
          </div>
          <div
            className={`${styles.details} ${styles.flex} ${styles.fClmn} ${styles.ac}`}
          >
            <div className={`${styles.info} ${styles.flex} ${styles.fClmn}`}>
              <p> Contact Details </p>
              <div
                className={`${styles.socialIcons} ${styles.flex} ${styles.ac}`}
              >
                <Mail size={18} strokeWidth={2} />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:guristacks@gmail.com"
                >
                  guristacks@gmail.com
                </a>
              </div>
              <div
                className={`${styles.socialIcons} ${styles.flex} ${styles.ac}`}
              >
                <Phone size={16} />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="tel:+917696992194"
                >
                  +91 7696 992194
                </a>
              </div>
            </div>
            <div className={`${styles.socials} ${styles.flex} ${styles.fClmn}`}>
              <p> Socials </p>
              <div
                className={`${styles.socialIcons} ${styles.flex} ${styles.ac}`}
              >
                <FaLinkedin size={18} />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/guristacks/"
                >
                  Linkedin
                </a>
              </div>
              <div
                className={`${styles.socialIcons} ${styles.flex} ${styles.ac}`}
              >
                <FaGithub size={18} />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/guristacks"
                >
                  Github
                </a>
              </div>
              <div
                className={`${styles.socialIcons} ${styles.flex} ${styles.ac}`}
              >
                <FaInstagram size={18} />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/guristacks/"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutAnime blackRef={blackRef} helloRef={helloRef} />
    </section>
  );
};

export default ContactForm;
