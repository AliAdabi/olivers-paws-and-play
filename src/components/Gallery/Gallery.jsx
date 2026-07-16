import styles from './Gallery.module.css';

const photos = [
  { src: 'https://i.imgur.com/T8wKmEQ.png', caption: 'Backyard lounging, hat optional' },
  { src: 'https://i.imgur.com/T8wKmEQ.png', caption: 'Making new best friends' },
  { src: 'https://i.imgur.com/T8wKmEQ.png', caption: "Life's good when you're a happy camper" },
];

function Gallery() {
  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className={styles.sectionLabel}>Gallery</div>
      <h2 className={styles.sectionTitle}>A day in the life</h2>
      <p className={styles.sectionSub}>
        Snapshots from walks, playtime, and cozy stays with our happy campers.
      </p>
      <div className={styles.galleryGrid}>
        {photos.map((photo, i) => (
          <figure key={i} className={styles.galleryItem}>
            <img src={photo.src} alt={photo.caption} loading="lazy" />
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Gallery;