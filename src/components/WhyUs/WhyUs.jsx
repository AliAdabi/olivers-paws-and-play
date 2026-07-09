import styles from './WhyUs.module.css';

const cards = [
  {
    title: 'In-home, not a kennel',
    text: 'Your dog stays in a real home with cozy spaces, a backyard, and zero cages. It feels like a sleepover, not a facility.',
    iconBg: '#E1F6F9',
    iconColor: '#0F6E7A',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 9.5L12 3l9 6.5" />
        <path d="M5 10v10h14V10" />
        <path d="M10 20v-6h4v6" />
      </svg>
    ),
  },
  {
    title: 'One dedicated caregiver',
    text: 'No rotating strangers. The same experienced caregiver looks after your pup every visit, every stay.',
    iconBg: '#FFF8E1',
    iconColor: '#7A5C00',
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
      </svg>
    ),
  },
  {
    title: 'Daily photo updates',
    text: 'Get photos and messages throughout the day so you always know your dog is happy, safe, and loved.',
    iconBg: '#E8EDF5',
    iconColor: '#1B3A6B',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="6" width="18" height="14" rx="2" />
        <circle cx="12" cy="13" r="4" />
        <path d="M8 6l1.5-2h5L16 6" />
      </svg>
    ),
  },
  {
    title: '8+ years of experience',
    text: 'Trusted by East Bay families since 2018, with hundreds of happy campers and five-star reviews.',
    iconBg: '#FFE8E8',
    iconColor: '#FF6B6B',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2l3 6.5 7 .8-5.2 4.7 1.5 6.9L12 17.5 5.7 20.9l1.5-6.9L2 9.3l7-.8L12 2z" />
      </svg>
    ),
  },
];

function WhyUs() {
  return (
    <section id="why" className={styles.whySection}>
      <div className={styles.sectionLabel}>Why Us</div>
      <h2 className={styles.sectionTitle}>Care that feels like family</h2>
      <p className={styles.sectionSub}>
        We keep things small on purpose. Fewer dogs, more attention, and the kind of
        care we'd want for our own pup.
      </p>
      <div className={styles.whyGrid}>
        {cards.map((card) => (
          <div key={card.title} className={styles.whyCard}>
            <div
              className={styles.whyIcon}
              style={{ background: card.iconBg, color: card.iconColor }}
            >
              {card.icon}
            </div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyUs;