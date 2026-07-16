import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <img
        src="https://i.imgur.com/T8wKmEQ.png"
        alt="Oliver's Paws and Play"
        className={styles.footerLogo}
      />
      <strong>Oliver's Paws and Play LLC</strong>
      <p>Boutique In-Home Dog Care · Walnut Creek, CA</p>
      <p>
        Founded 2018 · Serving Walnut Creek, Concord, Pleasant Hill, Lafayette,
        Moraga, Alamo, Danville, Martinez and Contra Costa Communities
      </p>
      <p className={styles.footerLinks}>
        <a href="https://share.google/9uQ09plBn0WNiggi3" target="_blank" rel="noopener noreferrer">
          Find us on Google
        </a>
        <span> · </span>
        <a href="https://www.yelp.com/biz/olivers-paws-and-play-concord" target="_blank" rel="noopener noreferrer">
          Find us on Yelp
        </a>
        <span> · </span>
        <a href="https://calendly.com/oliverspawsandplay" target="_blank" rel="noopener noreferrer">
          Book a visit
        </a>
      </p>
      <span className={styles.copyright}>
        © {new Date().getFullYear()} Oliver's Paws and Play LLC. All rights reserved.
      </span>
    </footer>
  );
}

export default Footer;