import styles from './Packages.module.css';

function Paw({ size, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <ellipse cx="30" cy="40" rx="16" ry="13" fill={color} />
      <ellipse cx="13" cy="23" rx="7" ry="9" fill={color} />
      <ellipse cx="25" cy="15" rx="7" ry="9" fill={color} />
      <ellipse cx="38" cy="15" rx="7" ry="9" fill={color} />
      <ellipse cx="49" cy="23" rx="7" ry="9" fill={color} />
    </svg>
  );
}

export default function Packages() {
  return (
    <section id="packages" className={styles.packagesSection}>
      <div className={styles.paw1}><Paw size={72} color="#ffffff" /></div>
      <div className={styles.paw2}><Paw size={50} color="#FFD166" /></div>
      <div className={styles.paw3}><Paw size={58} color="#FFD166" /></div>
      <div className={styles.paw4}><Paw size={42} color="#ffffff" /></div>

      <div className={styles.sectionLabel}>Packages &amp; loyalty</div>
      <div className={styles.sectionTitle}>For the clients who trust us most</div>
      <div className={styles.sectionSub}>
        For our regular families, we offer packages that save money and lock in your spot.
      </div>

      <div className={styles.packagesGrid}>
        <div className={styles.packageCard}>
          <div className={styles.pkgLabel}>For working owners</div>
          <div className={styles.pkgName}>Busy Professional</div>
          <div className={styles.pkgPrice}>$375 <span>/ month</span></div>
          <hr className={styles.pkgDivider} />
          <div className={styles.pkgDesc}>
            12 x 30-minute walks per month, with consistent daily coverage so you never have to scramble.{' '}
            <strong>30-minute walks only.</strong>
          </div>
          <div className={styles.pkgSave}>Save $45 vs. à la carte</div>
        </div>

        <div className={`${styles.packageCard} ${styles.featured}`}>
          <div className={styles.pkgLabel}>For frequent travelers</div>
          <div className={styles.pkgName}>Frequent Traveler</div>
          <div className={styles.pkgPrice}>10% <span>off</span></div>
          <hr className={styles.pkgDivider} />
          <div className={styles.pkgDesc}>
            10+ boarding nights per month. Locks in your spot and rewards your loyalty. The more you travel,
            the more you save.
          </div>
          <div className={styles.pkgSave}>~$90 savings at 10 nights</div>
        </div>
      </div>

      <div className={styles.loyaltyRow}>
        <div className={styles.loyaltyCard}>
          <h4>Refer a Friend, Get $25</h4>
          <p>You refer someone, you get $25 credit toward your next service!</p>
        </div>
      </div>
    </section>
  );
}