import React from 'react'
import { MoveDownRight } from 'lucide-react';

const ContactForm = ({ styles }) => {
    return (
        <section className={styles.contactPage}>
            <div className={styles.container}>
                <div className={`${styles.topContent} ${styles.flex} ${styles.ac} ${styles.sb}`}>
                    <p>Let's start a <br /> project together</p>
                    <div className={`${styles.topImg} ${styles.flex} ${styles.fClmn}`}>
                        <img src="https://images.unsplash.com/photo-1496360166961-10a51d5f367a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <MoveDownRight size={32} />
                    </div>
                </div>

                <div className={`${styles.lastContent} ${styles.flex} ${styles.sb}`}>
                    <div className={`${styles.formBox} ${styles.flex} ${styles.fClmn}`}>

                        <form className={styles.contactForm}>
                            <div className={`${styles.formGroup} ${styles.flex} ${styles.fClmn}`}>
                                <label htmlFor="name"> <span>01</span> What's your name ?</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Wick *"
                                    required
                                />
                            </div>

                            <div className={`${styles.formGroup} ${styles.flex} ${styles.fClmn}`}>
                                <label htmlFor="email"> <span>02</span> What's your email ?</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@wick.com *"
                                    required
                                />
                            </div>

                            <div className={`${styles.formGroup} ${styles.flex} ${styles.fClmn}`}>
                                <label htmlFor="organization">
                                    <span>03</span> What's the name of your organization ?
                                </label>
                                <input
                                    type="text"
                                    id="organization"
                                    name="organization"
                                    placeholder="John & Wick ®"
                                />
                            </div>

                            <div className={`${styles.formGroup} ${styles.flex} ${styles.fClmn}`}>
                                <label htmlFor="service">
                                    <span>04</span> What services are you looking for ?
                                </label>
                                <input
                                    type="text"
                                    id="service"
                                    name="service"
                                    placeholder="Web Design, Web Development..."
                                />
                            </div>

                            <div className={`${styles.formGroup} ${styles.flex} ${styles.fClmn}`}>
                                <label htmlFor="message">
                                    <span>05</span> Your message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    placeholder="Hello Guri, can you help me with..."
                                    required
                                ></textarea>
                            </div>

                            <div className={`${styles.contactCta} ${styles.flex} ${styles.ac}`}>
                                <button type="submit" className={`${styles.submitBtn} ${styles.fancyBtn}`}>
                                    Send it!
                                </button>
                            </div>

                        </form>
                    </div>
                    <div className={`${styles.details} ${styles.flex} ${styles.fClmn} ${styles.ac}`}>
                        <div className={`${styles.info} ${styles.flex} ${styles.fClmn}`}>
                            <p> Contact Details </p>
                            <a href="mailto:guristacks@gmail.com">guristacks@gmail.com</a>
                            <a href="tel:+917696992194"> +91 7696 992194</a>
                        </div>
                        <div className={`${styles.socials} ${styles.flex} ${styles.fClmn}`}>
                            <p> Socials </p>
                            <a href="https://www.linkedin.com/in/guristacks/">Linkedin</a>
                            <a href="https://github.com/guristacks"> Github</a>
                            <a href="https://www.instagram.com/guri_ghumxn/"> Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;