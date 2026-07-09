import styles from './Services.module.css';

const services = [
  {
    title: 'Overnight Boarding',
    startingPrice: '$65',
    priceUnit: '/night',
    items: [
      { label: 'One dog', price: '$65/night' },
      { label: 'Two dogs (same family)', price: '$110/night' },
      { label: 'Extended stay (7+ nights)', price: '$60/night' },
      { label: 'Holiday rate', price: '+$10/night' },
    ],
    note: 'Includes walks, playtime, feeding, and daily photo updates. Pickup and drop-off available.',
  },
  {
    title: 'Dog Walking',
    startingPrice: '$25',
    priceUnit: '/walk',
    items: [
      { label: '30-minute walk', price: '$25' },
      { label: '60-minute walk', price: '$40' },
      { label: 'Two dogs (same family)', price: '+$10' },
      { label: 'Weekly package (5 walks)', price: '$110' },
    ],
    note: 'Serving Walnut Creek, Concord, Pleasant Hill, Lafayette, and nearby neighborhoods.',
  },
  {
    title: 'Daycare & Pet Sitting',
    startingPrice: '$45',
    priceUnit: '/day',
    items: [
      { label: 'Full-day daycare', price: '$45' },
      { label: 'Half-day daycare', price: '$30' },
      { label: 'In-home pet sitting visit', price: '$35' },
      { label: 'Puppy care (under 1 year)', price: '$50' },
    ],
    note: 'Structured play, rest time, and socialization in a safe home environment.',
  },
];

const addons = [
  { name: 'Bath & brush', price: 'from $20' },
  { name: 'Medication administration', price: 'Free' },
  { name: 'Pickup & drop-off', price: 'from $15' },
  { name: 'Special diet prep', price: 'Free' },
];

function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.sectionLabel}>Services &amp; Pricing</div>
      <h2 className={styles.sectionTitle}>Simple, transparent pricing</h2>
      <p className={styles.sectionSub}>
        No hidden fees, no surprises. Every service includes real attention,
        updates, and lots of love.
      </p>
      <div className={styles.servicesGrid}>
        {services.map((service) => (
          <div key={service.title} className={styles.serviceCard}>
            <h3>{service.title}</h3>
            <div className={styles.priceStarting}>
              from <span>{service.startingPrice}</span>{service.priceUnit}
            </div>
            <ul className={styles.priceList}>
              {service.items.map((item) => (
                <li key={item.label}>
                  {item.label}
                  <span className={styles.price}>{item.price}</span>
                </li>
              ))}
            </ul>
            <p className={styles.serviceNote}>{service.note}</p>
          </div>
        ))}
      </div>
      <div className={styles.addonLabel}>Add-ons</div>
      <div className={styles.addonGrid}>
        {addons.map((addon) => (
          <div key={addon.name} className={styles.addonItem}>
            <div className={styles.addonName}>{addon.name}</div>
            <div className={styles.addonPrice}>{addon.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;