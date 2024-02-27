import styles from "./page.module.css";

export default function Home() {
  console.log('hola mundo pagina de inicio')
  return (
    <main className={styles.main}>
      <h1>Hola Mundo</h1>
    </main>
  );
}