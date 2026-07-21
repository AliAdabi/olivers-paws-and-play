import styles from './Gallery.module.css';
import g1 from '../../assets/gallery-1-backyard-hat.jpg';
import g2 from '../../assets/gallery-2-sunglasses.jpg';
import g3 from '../../assets/gallery-3-golden-hour.jpg';
import g4 from '../../assets/gallery-4-pearls.jpg';
import g5 from '../../assets/gallery-5-bandana.jpg';
import g6 from '../../assets/gallery-6-nap-time.jpg';

const photos = [
  { src: g1, alt: 'Golden retriever relaxing in the backyard wearing a sun hat', caption: 'Backyard lounging, hat optional' },
  { src: g2, alt: 'Dog wearing orange sunglasses lying in the grass', caption: 'Palm Springs vibes, right here in the Bay' },
  { src: g3, alt: 'Two dogs relaxing together at the park at sunset', caption: 'Golden hour with good company' },
  { src: g4, alt: 'Bulldog wearing a pearl necklace standing in the kitchen', caption: 'Dressed in pearls, ready for treats' },
  { src: g5, alt: 'Golden retriever relaxing on the grass in a paw print bandana', caption: 'Bandana game: strong' },
  { src: g6, alt: 'Two dogs relaxing on a cozy rug and blanket indoors', caption: "Nap o'clock hits different here" },
];

export default function Gallery() {
  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className={styles.sectionLabel}>The good life</div>
      <div className={styles.sectionTitle}>A few of our happy campers</div>
      <div className={styles.sectionSub}>
        Naps, zoomies, and the occasional fashion statement. This is what a stay at Oliver's looks like.
      </div>
      <div className={styles.galleryGrid}>
        {photos.map((photo) => (
          <figure key={photo.caption} className={styles.galleryItem}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}