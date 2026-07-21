import styles from './Sendoff.module.css';
import sendoffPhoto from '../../assets/sendoff-oliver.jpg';

export default function Sendoff() {
  return (
    <section className={styles.sendoffSection}>
      <figure className={styles.sendoffPhoto}>
        <img src={sendoffPhoto} alt="Oliver rolling happily in the grass with a paw in the air" loading="lazy" />
      </figure>
      <div className={styles.sendoffCaption}>Life's good when you're one of our happy campers.</div>
    </section>
  );
}