import styles from './About.module.css';

const pills = [
  { text: 'Licensed & insured', variant: 'teal' },
  { text: 'Pet first-aid trained', variant: 'navy' },
  { text: 'Fenced backyard', variant: 'yellow' },
  { text: 'Small group care', variant: 'teal' },
  { text: 'Since 2018', variant: 'navy' },
];

function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutWrap}>
        <div className={styles.aboutImgWrap}>
          <img
            src="https://i.imgur.com/T8wKmEQ.png"
            alt="Oliver's Paws and Play caregiver with a happy dog"
          />
        </div>
        <div className={styles.aboutContent}>
          <div className={styles.sectionLabel}>About</div>
          <h2>Hi, we're Oliver's Paws and Play</h2>
          <p>
            What started in 2018 as caring for a few neighborhood dogs has grown
            into a trusted boutique pet care service for families across Walnut
            Creek and Contra Costa County. We're not a franchise or an app — just
            genuine, personal care from someone who treats your dog like their own.
          </p>
          <p>
            Every pup in our care gets one dedicated caregiver, a real home to
            relax in, daily walks and play, and photo updates so you're never left
            wondering how they're doing.
          </p>
          <div className={styles.aboutPills}>
            {pills.map((pill) => (
              <span key={pill.text} className={styles[pill.variant]}>
                {pill.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;