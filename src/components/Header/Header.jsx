import styles from './Header.module.css';

export const Header = () => {
  return(
    <nav className={styles.header}>
      <h1 className={styles.logo}>VotD Helper</h1>
    </nav>
  );
};