import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>OMS</div>
            <div className={styles.text}>Some text</div>
        </div>
    )
}

export default Footer;