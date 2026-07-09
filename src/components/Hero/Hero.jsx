import styles from './Hero.module.css';
import Paw from './Paw';

const TEAL = '#1DAABC';
const YELLOW = '#FFD166';

const paws = [
  { size: 52, color: TEAL,   style: { top: '10%', left: '6%' },   anim: 'pawFloat 7s ease-in-out infinite' },
  { size: 40, color: YELLOW, style: { top: '62%', left: '4%' },   anim: 'pawDrift 9s ease-in-out infinite 1.5s' },
  { size: 44, color: TEAL,   style: { top: '15%', right: '7%' },  anim: 'pawFloat 8.5s ease-in-out infinite 2s' },
  { size: 36, color: YELLOW, style: { top: '70%', right: '5%' },  anim: 'pawDrift 6.5s ease-in-out infinite 0.5s' },
  { size: 30, color: TEAL,   style: { top: '42%', left: '2%' },   anim: 'pawFloat 10s ease-in-out infinite 3s' },
  { size: 38, color: YELLOW, style: { top: '5%',  left: '22%' },  anim: 'pawFloat 8s ease-in-out infinite 0.8s' },
  { size: 54, color: TEAL,   style: { top: '80%', left: '18%' },  anim: 'pawDrift 11s ease-in-out infinite 2.2s' },
  { size: 32, color: TEAL,   style: { top: '5%',  right: '22%' }, anim: 'pawDrift 7s ease-in-out infinite 1.8s' },
  { size: 46, color: YELLOW, style: { top: '78%', right: '20%' }, anim: 'pawFloat 9.5s ease-in-out infinite 0.3s' },
  { size: 28, color: YELLOW, style: { top: '52%', left: '10%' },  anim: 'pawDrift 6s ease-in-out infinite 2.7s' },
  { size: 42, color: TEAL,   style: { top: '25%', left: '14%' },  anim: 'pawFloat 8.5s ease-in-out infinite 1.2s' },
  { size: 36, color: YELLOW, style: { top: '55%', right: '13%' }, anim: 'pawDrift 10s ease-in-out infinite 3.5s' },
  { size: 50, color: TEAL,   style: { top: '88%', left: '35%' },  anim: 'pawFloat 7.5s ease-in-out infinite 0.6s' },
  { size: 34, color: YELLOW, style: { top: '3%',  left: '45%' },  anim: 'pawDrift 9s ease-in-out infinite 4s' },
];

function Hero() {
  return (
    <div className={styles.hero}>
      {paws.map((paw, i) => (
        <div
          key={i}
          className={styles.heroPaw}
          style={{ ...paw.style, animation: paw.anim }}
        >
          <Paw size={paw.size} color={paw.color} />
        </div>
      ))}
      <div className={styles.heroLogoWrap}>
        <svg className={styles.heroArch} viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <path id="archPath" d="M 32 190 A 132 132 0 1 1 288 190" fill="none" />
          </defs>
          <text className={styles.heroArchText}>
            <textPath href="#archPath" startOffset="50%" textAnchor="middle">
              Where tails wag and paws play!
            </textPath>
          </text>
        </svg>
        <img
          src="https://i.imgur.com/T8wKmEQ.png"
          alt="Oliver's Paws and Play"
          className={styles.heroLogo}
        />
      </div>
      <div className={styles.heroBadge}>
        Serving the East Bay &amp; Contra Costa County since 2018
      </div>
      <h1>
        Boutique, in-home pet care for dogs who deserve{' '}
        <span>real love while you're away.</span>
      </h1>
      <p className={styles.heroDesc}>
        We're not a kennel. We're not an app. We're your dog's home away from home,
        with one dedicated caregiver, real love, and 8+ years of experience.
      </p>
      <div className={styles.heroBtns}>
        <a href="#book" className={styles.btnPrimary}>Book a meet &amp; greet</a>
        <a href="#services" className={styles.btnSecondary}>See services &amp; pricing</a>
      </div>
    </div>
  );
}

export default Hero;