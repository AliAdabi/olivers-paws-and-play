import styles from './Packages.module.css';

const packages = [
  {
    label: 'Most flexible',
    name: 'Walk Pack',
    price: '$110',
    unit: '/5 walks',
    desc: 'Five 30-minute walks to use any time. Perfect for busy weeks when your pup needs a midday stretch and some fresh air.',
    save: 'Save $15 vs. single walks',
    featured: false,
  },
  {
    label: 'Most popular',
    name: 'Weekly Care',
    price: '$200',
    unit: '/week',
    desc: 'Five full days of daycare with structured play, rest time, and daily photo updates. Your dog gets a routine, you get peace of mind.',
    save: 'Save $25 vs. daily rate',
    featured: true,
  },
  {
    label: 'Best for travel',
    name: 'Getaway Stay',
    price: '$400',
    unit: '/week',
    desc: 'Seven nights of overnight boarding, in-home comfort, walks, and constant care while you travel worry-free.',
    save: 'Save $55 vs. nightly rate',
    featured: false,
  },
];

const loyalty = [
  {
    title: 'Loyalty rewards',
    text: 'Every 10th walk or daycare day is on us. Long-term clients also get priority booking for holidays and summer weekends.',
  },
  {
    title: 'Referral perks',
    text: 'Refer a friend and you both get $15 off your next service once their first booking is complete.',
  },
];

function Packages() {
  return (
    <section id="packages" className={styles.packagesSection}>
      <div className={styles.sectionLabel}>Packages</div>
      <h2 className={styles.sectionTitle}>Bundle up and save</h2>
      <p className={styles.sectionSub}>
        Regular care keeps tails wagging. Our packages make it easy and more
        affordable to keep your pup on a happy routine.
      </p>
      <div className={styles.packagesGrid}>
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={pkg.featured ? `${styles.packageCard} ${styles.featured}` : styles.packageCard}
          >
            <div className={styles.pkgLabel}>{pkg.label}</div>
            <div className={styles.pkgName}>{pkg.name}</div>
            <div className={styles.pkgPrice}>
              {pkg.price}<span>{pkg.unit}</span>
            </div>
            <hr className={styles.pkgDivider} />
            <p className={styles.pkgDesc}>{pkg.desc}</p>
            <div className={styles.pkgSave}>{pkg.save}</div>
          </div>
        ))}
      </div>
      <div className={styles.loyaltyRow}>
        {loyalty.map((item) => (
          <div key={item.title} className={styles.loyaltyCard}>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Packages;