import styles from './Services.module.css';

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

export default function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.paw1}><Paw size={65} color="#1DAABC" /></div>
      <div className={styles.paw2}><Paw size={55} color="#FFD166" /></div>
      <div className={styles.paw3}><Paw size={48} color="#1DAABC" /></div>

      <div className={styles.sectionLabel}>Services &amp; pricing</div>
      <div className={styles.sectionTitle}>Everything your dog needs</div>
      <div className={styles.sectionSub}>
        Premium care as standard. Transparent pricing, no hidden fees, and every service includes photo
        updates and medication administration at no extra charge.
      </div>

      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <h3>Overnight Boarding</h3>
          <div className={styles.priceStarting}>Starting at <span>$90</span> / night</div>
          <p className={styles.serviceNote}>
            In-home dog boarding in Walnut Creek where your dog is a guest, not a boarder. Cozy beds, calm
            routines, and company nearly around the clock. Inquire for details and additional pets.
          </p>
          <div className={styles.calloutBox}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--teal-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.calloutIcon}>
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <p className={styles.calloutText}>
              <strong>Meet &amp; Greet required:</strong> All first-time boarding clients must complete a free
              15-min Meet &amp; Greet before a stay can be confirmed.{' '}
              <a href="#book">Schedule yours →</a>
            </p>
          </div>
        </div>

        <div className={styles.serviceCard}>
          <h3>Walks &amp; Drop-In Visits</h3>
          <div className={styles.priceStarting}>Starting at <span>$35</span></div>
          <p className={styles.serviceNote}>
            30, 45, and 60-minute walks across Walnut Creek, Concord, Lafayette, and Pleasant Hill. Every
            visit includes a wellness check and fresh water. Inquire for details and multi-pet rates.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Daycare</h3>
          <div className={styles.priceStarting}>Starting at <span>$40</span> / day</div>
          <p className={styles.serviceNote}>
            In-home East Bay dog daycare, always one-on-one, never a group kennel room. A great option for
            busy workdays. Your pup gets playtime, socialization, and rest, then comes home happy and tired.
            Half and full days available.
          </p>
        </div>

        <div className={styles.serviceCard}>
          <h3>Pick-Up &amp; Drop-Off</h3>
          <ul className={styles.priceList}>
            <li><span>Each way</span><span className={styles.price}>$15 – $25</span></li>
          </ul>
          <p className={styles.serviceNote}>
            Available for daycare and overnight boarding. Rate varies by location within the East Bay /
            Contra Costa County.
          </p>
          <div className={styles.addonLabel}>Add-ons</div>
          <div className={styles.addonGrid}>
            <div className={styles.addonItem}>
              <div className={styles.addonName}>Holiday surcharge</div>
              <div className={styles.addonPrice}>+$20</div>
            </div>
            <div className={styles.addonItem}>
              <div className={styles.addonName}>Medication admin</div>
              <div className={styles.addonPrice}>Included</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}