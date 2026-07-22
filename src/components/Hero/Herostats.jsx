import styles from './Herostats.module.css';

const stats = [
  { num: '8+', label: 'Years of care' },
  { num: '500+', label: 'Happy pups' },
  { num: '5.0', label: 'Star rating' },
  { num: '1', label: 'Dedicated caregiver' },
];

function HeroStats() {
  return (
    <div className={styles.heroStats}>
      {stats.map((stat) => (
        <div key={stat.label} className={styles.heroStat}>
          <div className={styles.heroStatNum}>{stat.num}</div>
          <div className={styles.heroStatLabel}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

export default HeroStats;