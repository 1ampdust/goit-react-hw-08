import DocumentTitle from '../../components/DocumentTitle';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div className={styles.container}>
        <h1 className={styles.title}>
          HomePage{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    </>
  );
}
