import styles from './Areas.module.css';

const areas = [
  'Walnut Creek',
  'Concord',
  'Pleasant Hill',
  'Lafayette',
  'Moraga',
  'Alamo',
  'Danville',
  'Martinez',
];

function Areas() {
  return (
    <section id="areas" className={styles.areasSection}>
      <div className={styles.areasGrid}>
        <div className={styles.areasContent}>
          <div className={styles.sectionLabel}>Areas We Serve</div>
          <h2 className={styles.sectionTitle}>
            Proudly serving Contra Costa County
          </h2>
          <p className={styles.sectionSub}>
            Based in Walnut Creek, we provide boarding, walking, and daycare for
            dogs across the East Bay. If you're nearby but don't see your city,
            reach out — we may still be able to help.
          </p>
          <ul className={styles.areasList}>
            {areas.map((area) => (
              <li key={area}>
                <svg viewBox="0 0 24 24" className={styles.pinIcon}>
                  <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                {area}
              </li>
            ))}
          </ul>
        </div>
        <figure className={styles.areasPhoto}>
          <img
            src="https://i.imgur.com/T8wKmEQ.png"
            alt="Happy dog out on a walk in the East Bay"
          />
          <figcaption>Adventures all across the East Bay</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Areas;