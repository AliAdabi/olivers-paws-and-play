import { useState } from 'react';
import styles from './Contact.module.css';

const FORMSPREE_URL = 'https://formspree.io/f/xgobqwvb';
const GOOGLE_URL = 'https://share.google/9uQ09plBn0WNiggi3';
const YELP_URL = 'https://www.yelp.com/biz/olivers-paws-and-play-concord';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 4000);
  }

  const buttonText = {
    idle: 'Send message',
    sending: 'Sending...',
    success: 'Message sent!',
    error: 'Something went wrong, please try again',
  }[status];

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.sectionLabel}>Get in touch</div>
      <div className={styles.sectionTitle}>Every relationship starts with a conversation</div>
      <div className={styles.sectionSub}>Prefer to reach out directly? We're available 7 days a week.</div>

      <div className={styles.contactGrid}>
        <div className={styles.contactCard}>
          <h3>Contact info</h3>
          <p>
            Serving Walnut Creek, Concord, Pleasant Hill, Lafayette, Moraga, Alamo, Danville, Martinez,
            and the broader Contra Costa County area.
          </p>
          <div className={styles.contactDetail}>
            <div className={styles.contactIcon}>
              <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
            </div>
            Walnut Creek, CA · East Bay
          </div>
          <div className={styles.contactDetail}>
            <div className={styles.contactIcon}>
              <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            </div>
            Israel@oliverspawsandplay.com
          </div>
          <div className={styles.contactDetail}>
            <div className={styles.contactIcon}>
              <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.58 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.06 6.06l1.32-1.32a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            </div>
            650-245-6550
          </div>
          <div className={styles.contactDetail}>
            <div className={styles.contactIcon}>
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            </div>
            7 days a week · Flexible hours
          </div>
          <div className={styles.contactDetail}>
            <div className={styles.contactIcon}>
              <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </div>
            <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>Find us on Google</a>
          </div>
          <div className={styles.contactDetail}>
            <div className={styles.contactIcon}>
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            </div>
            <a href={YELP_URL} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>Find us on Yelp</a>
          </div>
        </div>

        <div className={styles.contactCard}>
          <h3>Send a message</h3>
          <form className={styles.formFields} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" placeholder="Jane Smith" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email address</label>
              <input type="email" id="email" name="email" placeholder="jane@email.com" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone number</label>
              <input type="tel" id="phone" name="phone" placeholder="(555) 123-4567" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="service">Service you're interested in</label>
              <select id="service" name="service">
                <option>Overnight Boarding</option>
                <option>Daycare</option>
                <option>Walks &amp; Drop-In Visits</option>
                <option>Busy Professional Package</option>
                <option>Frequent Traveler Package</option>
                <option>Just exploring!</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="dog">Tell us about your dog</label>
              <textarea id="dog" name="dog" placeholder="Breed, age, personality, any special needs..." />
            </div>
            <button
              type="submit"
              className={`${styles.submitBtn} ${status === 'error' ? styles.submitBtnError : ''} ${status === 'success' ? styles.submitBtnSuccess : ''}`}
              disabled={status === 'sending'}
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}