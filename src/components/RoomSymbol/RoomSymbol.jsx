import styles from './RoomSymbol.module.css'
import witnessImg from '../../assets/witness.png';

export const RoomSymbol = () => {
  return(
    <div className={styles.cell}>
      <div className={styles.top}>
        <img src={witnessImg} alt="" />
      </div>
      <div className={styles.bottom}>
        <img src={witnessImg} alt="" />
      </div>
    </div>

  );
};