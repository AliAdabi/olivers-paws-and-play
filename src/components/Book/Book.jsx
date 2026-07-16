import styles from './Book.module.css';

function Book() {
  return (
    <section id="book" className={styles.bookSection}>
      <div className={styles.sectionLabel}>Book a Visit</div>
      <h2 className={styles.sectionTitle}>
        <span className={styles.bookFreePill}>FREE</span>
        Start with a meet &amp; greet
      </h2>
      <p className={styles.sectionSub}>
        Every new pup starts with a free, no-pressure meet and greet. We'll get to
        know your dog, answer your questions, and make sure it's a great fit for
        everyone — tails included.
      </p>
      <div className={styles.bookCtaWrap}>
        <a
          href="https://calendly.com/oliverspawsandplay"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.btnPrimary} ${styles.bookCtaBtn}`}
        >

          Book on Calendly
        </a>
        <a href="#contact" className={`${styles.btnSecondary} ${styles.bookCtaBtn}`}>
          Or send us a message
        </a>
      </div>
    </section>
  );
}

export default Book;