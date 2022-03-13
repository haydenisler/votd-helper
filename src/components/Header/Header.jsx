import styles from './Header.module.css';
import raidImg from '../../assets/raid.png';
import fleetImg from '../../assets/fleet.png';

export const Header = () => {
  return(
    <nav className={styles['header']}>
      <div 
        className={styles['logo-container']} 
        style={{ backgroundImage: `linear-gradient(135deg, transparent 60%, #292524 80%, #292524 100%), url(${fleetImg})`}}>
        <img src={raidImg} className={styles['logo-image']}/>
        <h1 className={styles['logo-text']}>VOTD HELPER</h1>
      </div>
    </nav>
  );
};