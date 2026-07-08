import styles from './Navbar.module.css';

const links = [
  { href: '#why', label: 'Why Us' },
  { href: '#services', label: 'Services' },
  { href: '#packages', label: 'Packages' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#about', label: 'About' },
  { href: '#areas', label: 'Areas' },
  { href: '#book', label: 'Book' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  return (
    <nav className={styles.siteNav}>
      <a href="#" className={styles.navLogo}>
        <img src="https://i.imgur.com/T8wKmEQ.png" alt="Oliver's Paws and Play logo" />
        <span>Oliver's Paws and Play</span>
      </a>
      <ul className={styles.navLinks}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <a href="#book" className={styles.navCta}>Book Now</a>
    </nav>
  );
}

export default Navbar;