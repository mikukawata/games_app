import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Web Game App</h1>
      <p className={styles.subtitle}>Enjoy a variety of fun mini-games!</p>
    </main>
  );
}
