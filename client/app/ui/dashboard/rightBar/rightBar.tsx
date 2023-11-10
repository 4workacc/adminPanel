import Image from 'next/image';
import styles from './rightBar.module.css';
import { MdPlayCircleFilled } from 'react-icons/md';

const RightBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/next.svg" alt="" fill className={styles.bg}/>
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>TEXT</span>
                    <h3 className={styles.title}>How to use</h3>
                    <span className={styles.subtitle}>Take 4 minutes</span>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore vitae mollitia deserunt ratione iure veritatis natus iste alias nisi quis. In laboriosam soluta impedit delectus consectetur, dolores quis dolor asperiores.
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled />
                        Watch
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RightBar;