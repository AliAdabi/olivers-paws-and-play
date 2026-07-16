import styles from './Testimonials.module.css';

const reviews = [
  {
    text: "Our golden retriever comes home from Oliver's happy and tired every single time. The daily photo updates make being away so much easier. It truly is his home away from home.",
    name: 'Sarah M.',
    dog: 'Cooper, Golden Retriever',
    initials: 'SM',
  },
  {
    text: "We've tried apps and big boarding facilities, and nothing compares. One caregiver who actually knows our dog and treats her like family. Worth every penny.",
    name: 'David R.',
    dog: 'Luna, Aussie Mix',
    initials: 'DR',
  },
  {
    text: 'Booking is easy, communication is fast, and our anxious rescue actually gets excited when we pull up. That says everything.',
    name: 'Priya K.',
    dog: 'Biscuit, Terrier Rescue',
    initials: 'PK',
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className={styles.sectionLabel}>Reviews</div>
      <h2 className={styles.sectionTitle}>Loved by East Bay pups &amp; parents</h2>
      <p className={styles.sectionSub}>
        Don't take our word for it — here's what our families have to say.
      </p>
      <div className={styles.testimonialsGrid}>
        {reviews.map((review) => (
          <div key={review.name} className={styles.testimonialCard}>
            <div className={styles.testimonialStars}>★★★★★</div>
            <p className={styles.testimonialText}>{review.text}</p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.testimonialAvatar}>{review.initials}</div>
              <div>
                <div className={styles.testimonialName}>{review.name}</div>
                <div className={styles.testimonialDog}>{review.dog}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.reviewCta}>
        <div className={styles.reviewCtaText}>
          <h4>Had a great experience?</h4>
          <p>Your review helps other pet parents find trusted care.</p>
        </div>
        <a
          href="https://www.yelp.com/biz/olivers-paws-and-play-concord"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.reviewBtn}
        >
          Leave a review on Yelp
        </a>
      </div>
    </section>
  );
}

export default Testimonials;