import styles from './Hero.module.css';

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroLogoWrap}>
        <svg className={styles.heroArch} viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <path id="archPath" d="M 32 190 A 132 132 0 1 1 288 190" fill="none" />
          </defs>
          <text className={styles.heroArchText}>
            <textPath href="#archPath" startOffset="50%" textAnchor="middle">
              Where tails wag and paws play!
            </textPath>
          </text>
        </svg>
        <img
          src="https://i.imgur.com/T8wKmEQ.png"
          alt="Oliver's Paws and Play"
          className={styles.heroLogo}
        />
      </div>
      <div className={styles.heroBadge}>
        Serving the East Bay &amp; Contra Costa County since 2018
      </div>
      <h1>
        Boutique, in-home pet care for dogs who deserve{' '}
        <span>real love while you're away.</span>
      </h1>
      <p className={styles.heroDesc}>
        We're not a kennel. We're not an app. We're your dog's home away from home,
        with one dedicated caregiver, real love, and 8+ years of experience.
      </p>
      <div className={styles.heroBtns}>
        <a href="#book" className={styles.btnPrimary}>Book a meet &amp; greet</a>
        <a href="#services" className={styles.btnSecondary}>See services &amp; pricing</a>
      </div>
    </div>
  );
}

export default Hero;