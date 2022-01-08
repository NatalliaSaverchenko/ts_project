import logo from './logo.png'
import styles from './Logo.module.css'
export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo" />
    </div>
  )
}
