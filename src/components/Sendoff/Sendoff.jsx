import styles from './Sendoff.module.css';

function Sendoff() {
  return (
    <section className={styles.sendoffSection}>
      <div className={styles.waveDivider} aria-hidden="true">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path
            d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z"
            fill="#FFFBEF"
          />
        </svg>
      </div>
      <figure className={styles.sendoffPhoto}>
        <img
          src="https://i.imgur.com/T8wKmEQ.png"
          alt="A happy dog enjoying their stay"
        />
      </figure>
      <div className={styles.sendoffCaption}>
        Life's good when you're one of our happy campers.
      </div>
    </section>
  );
}

export default Sendoff;