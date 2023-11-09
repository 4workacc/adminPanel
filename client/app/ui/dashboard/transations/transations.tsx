import Image from 'next/image';
import styles from './transations.module.css';

const Transations = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image 
                                    src="/userIcon.png" 
                                    alt="" 
                                    width={40} 
                                    height={40} 
                                    className={styles.userImage} />  
                                Joy
                            </div>
                        </td>
                        <td>
                            <span 
                                className={`${styles.status} ${styles.pending}`}>
                                    Pending
                            </span>
                        </td>
                        <td> 12.10.1010</td>
                        <td> $500</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image 
                                    src="/userIcon.png" 
                                    alt="" 
                                    width={40} 
                                    height={40} 
                                    className={styles.userImage} />  
                                Joy
                            </div>
                        </td>
                        <td>
                            <span 
                                className={`${styles.status} ${styles.done}`}>
                                    done
                            </span>
                        </td>
                        <td> 12.10.1010</td>
                        <td> $500</td>
                    </tr>

                    <tr>
                        <td>
                            <div className={styles.user}>   
                                <Image 
                                    src="/userIcon.png" 
                                    alt="" 
                                    width={40} 
                                    height={40} 
                                    className={styles.userImage} />  
                                Joy
                            </div>
                        </td>
                        <td>
                            <span 
                                className={`${styles.status} ${styles.canceled}`}>
                                    canceled
                            </span>
                        </td>
                        <td> 12.10.1010</td>
                        <td> $500</td>
                    </tr>

                   
                </tbody>
            </table>
        </div>
    )
}

export default Transations;