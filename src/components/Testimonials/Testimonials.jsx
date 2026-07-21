import styles from './Testimonials.module.css';

const GOOGLE_URL = 'https://share.google/9uQ09plBn0WNiggi3';
const YELP_URL = 'https://www.yelp.com/biz/olivers-paws-and-play-concord';

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

const reviews = [
  {
    avatar: 'D',
    name: 'Sancha D.',
    dog: 'Dog dad to Apple · Yelp review',
    text: "\"We've trusted Israel and Joseph with our dog, Apple, for trips ranging from a couple of days to two weeks, and they've always taken great care of her. … She's the one on vacation more than us. … If you're looking for someone trustworthy, reliable, and caring to watch your dog, we highly recommend Israel and Joseph.\"",
  },
  {
    avatar: 'J',
    name: 'Joelene D.',
    dog: 'Dog mom to Kona · Yelp review',
    text: "\"I can't recommend Joey and Israel enough! We've trusted them with our English Bulldog, Kona, since 2023 whenever we travel, and they've been nothing short of amazing. … Their communication is also exceptional. … There truly isn't anywhere else I would leave my dog.\"",
  },
  {
    avatar: 'V',
    name: 'Vincent W.',
    dog: 'Dog dad to Tinker · Yelp review',
    text: "\"I'm incredibly grateful that I have Israel taking care of my dog when I'm away. Israel is always dependable when I need someone to help me take care of Tinker. He never misses any appointments and keeps me informed about his visits to my dog. If you're looking for someone to take care of your beloved pet, I highly recommend Israel.\"",
  },
  {
    avatar: 'A',
    name: 'Alexandria B.',
    dog: 'Dog mom to Milo · Yelp review',
    text: "\"My sweet boy Milo loves seeing Israel! I'm so happy to finally have found someone who is super attentive to Milo. Thank you Israel for all you do for us! It's always a relief knowing we have you to take care of our fur baby.\"",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className={styles.paw1}><Paw size={62} color="#1DAABC" /></div>
      <div className={styles.paw2}><Paw size={44} color="#FFD166" /></div>
      <div className={styles.paw3}><Paw size={54} color="#1DAABC" /></div>

      <div className={styles.sectionLabel}>Client reviews</div>
      <div className={styles.sectionTitle}>What families are saying</div>
      <div className={styles.sectionSub}>Don't take our word for it.</div>

      <div className={styles.testimonialsGrid}>
        {reviews.map((review) => (
          <div key={review.name} className={styles.testimonialCard}>
            <div className={styles.testimonialStars}>★★★★★</div>
            <p className={styles.testimonialText}>{review.text}</p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.testimonialAvatar}>{review.avatar}</div>
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
          <h4>Had a great experience with us?</h4>
          <p>A Google or Yelp review helps other dog families find trusted care and means the world to us.</p>
        </div>
        <div className={styles.reviewBtns}>
          <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className={styles.reviewBtn}>Leave a Google review</a>
          <a href={YELP_URL} target="_blank" rel="noopener noreferrer" className={styles.reviewBtn}>Leave a Yelp review</a>
        </div>
      </div>
    </section>
  );
}