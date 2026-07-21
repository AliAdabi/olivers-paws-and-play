import styles from './Areas.module.css';
import areasPhoto from '../../assets/areas-walk.jpg';

export default function Areas() {
  return (
    <section id="areas" className={styles.areasSection}>
      <div className={styles.areasGrid}>
        <div>
          <div className={styles.sectionLabel}>Where we serve</div>
          <div className={styles.sectionTitle}>Dog boarding, walking &amp; daycare across the East Bay</div>
          <div className={styles.sectionSub}>
            Whether you need dog boarding in Walnut Creek, a dog walker in Concord, a pet sitter in Pleasant
            Hill, overnight dog sitting in Lafayette, or East Bay dog daycare, we're the in-home pet sitting
            alternative to national apps and big-box kennels.
          </div>
          <div className={styles.aboutPills}>
            <span className={styles.pillTeal}>Walnut Creek</span>
            <span className={styles.pillNavy}>Concord</span>
            <span className={styles.pillYellow}>Pleasant Hill</span>
            <span className={styles.pillTeal}>Lafayette</span>
            <span className={styles.pillNavy}>Moraga</span>
            <span className={styles.pillYellow}>Alamo</span>
            <span className={styles.pillTeal}>Danville</span>
            <span className={styles.pillNavy}>Martinez</span>
            <span className={styles.pillYellow}>Contra Costa County</span>
          </div>
        </div>
        <figure className={styles.areasPhoto}>
          <img src={areasPhoto} alt="Two dogs on a leashed walk at golden hour in an East Bay park" loading="lazy" />
          <figcaption>Out on a neighborhood walk at golden hour</figcaption>
        </figure>
      </div>
    </section>
  );
}