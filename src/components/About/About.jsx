import styles from './About.module.css';
import aboutPhoto from '../../assets/about-oliver.jpg';

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutWrap}>
        <div className={styles.aboutImgWrap}>
          <img src={aboutPhoto} alt="Oliver, the face of Oliver's Paws and Play, smiling in the grass" />
        </div>
        <div className={styles.aboutContent}>
          <div className={styles.sectionLabel}>Our story</div>
          <h2>We started this because we believe every dog deserves better than a kennel when their family is away.</h2>
          <p>
            Oliver's Paws and Play was founded in 2018 out of a simple belief: dogs deserve better than a
            kennel when their family is away. Over 8+ years, we've built something we're really proud of,
            a boutique, in-home pet care service where every dog is treated like family.
          </p>
          <p>
            At the center of it is Israel, who doesn't just care for dogs, he genuinely loves them. Every dog,
            every time. He's the kind of person who will rearrange his whole day for a pup who needs a little
            extra, and it shows in how every guest is treated here.
          </p>
          <div className={styles.storyBox}>
            <h3>Meet Oliver, the heart of it all</h3>
            <p>
              Oliver isn't just our logo. He's our dog, and he's the reason this business exists. A few years
              ago, at age 8, Oliver went blind. Caring for him through that change taught us what dogs truly
              need: patience, routine, and someone who's really paying attention. It's one of the reasons we
              started Oliver's Paws and Play, and it shapes how we care for every dog who stays with us. If
              Oliver can trust us to guide him through a world he can't see, your pup is in good hands too.
            </p>
          </div>
          <p>
            We keep our group small on purpose. Max 3–4 dogs at a time. Because your dog shouldn't have to
            compete for attention. They should have it all.
          </p>
          <p>
            We serve Walnut Creek, Concord, Pleasant Hill, Lafayette, Moraga, Alamo, Danville, Martinez,
            and surrounding Contra Costa County communities.
          </p>
          <div className={styles.aboutPills}>
            <span className={styles.pillTeal}>Founded 2018</span>
            <span className={styles.pillTeal}>Home-style care</span>
            <span className={styles.pillNavy}>Max 3–4 dogs</span>
            <span className={styles.pillNavy}>East Bay local</span>
            <span className={styles.pillYellow}>LLC registered</span>
            <span className={styles.pillYellow}>Nearly 24/7 supervision</span>
          </div>
        </div>
      </div>
    </section>
  );
}