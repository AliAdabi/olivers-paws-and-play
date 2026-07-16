import styles from './Contact.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.sectionLabel}>Contact</div>
      <h2 className={styles.sectionTitle}>Let's talk about your pup</h2>
      <p className={styles.sectionSub}>
        Questions, availability, special requests — send us a message and we'll
        get back to you quickly.
      </p>
      <div className={styles.contactGrid}>
        <div className={styles.contactCard}>
          <h3>Get in touch</h3>
          <p>
            Prefer to reach out directly? Call, email, or book a time that works
            for you.
          </p>
          <div className={styles.contactDetail}>
            <div className={styles.contactIcon}>
              <svg viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <a href="tel:650-245-6550">650-245-6550</a>
          </div>
          <div className={styles.contactDetail}>
            <div className={styles.contactIcon}>
              <svg viewBox="0 0 24 24">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
            </div>
            <a href="mailto:Israel@oliverspawsandplay.com">Israel@oliverspawsandplay.com</a>
          </div>
          <div className={styles.contactDetail}>
            <div className={styles.contactIcon}>
              <svg viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
            </div>
            <a
              href="https://calendly.com/oliverspawsandplay"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a visit on Calendly
            </a>
          </div>
          <div className={styles.contactDetail}>
            <div className={styles.contactIcon}>
              <svg viewBox="0 0 24 24">
                <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </div>
            <span>Walnut Creek, CA</span>
          </div>
        </div>
        <div className={styles.contactCard}>
          <h3>Send a message</h3>
          <form className={styles.formFields}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Your name</label>
              <input id="name" type="text" name="name" placeholder="Jane Doe" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" placeholder="jane@example.com" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="service">Service you're interested in</label>
              <select id="service" name="service" defaultValue="">
                <option value="" disabled>Select a service</option>
                <option>Overnight Boarding</option>
                <option>Dog Walking</option>
                <option>Daycare</option>
                <option>Pet Sitting</option>
                <option>Something else</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your pup and what you need..."
                required
              />
            </div>
            <button type="submit" className={styles.submitBtn}>
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;