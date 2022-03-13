import styles from './RoomSymbols.module.css';

export const RoomSymbols = () => {
  const test = new Array(5 * 4).fill(0);

  return(
    <div className={styles.grid}>
      {test.map((t, i) => {
        return(
          <div className={styles.cell}>{i}</div>
        );
      })}
    </div>
  );
};