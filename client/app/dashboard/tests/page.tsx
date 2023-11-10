import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/tests/tests.module.css";
import Link from "next/link";

interface IProp {
    placeholder: string;
}

const TestsPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search test" />
                <Link href="/dashboard/tests/add">
                    <button className={styles.addButton}>Add new test</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Test name</td>
                        <td>Classes</td>
                        <td>Created at</td>
                        <td>Time to finish</td>
                        <td>Max point</td>
                        <td>action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>                                                     
                            Test 1                            
                        </td>
                        <td>
                            10-11
                        </td>
                        <td>
                            10.10.2022
                        </td>
                        <td>
                            180 min
                        </td>
                        <td>
                            3500 pts
                        </td>
                        <td className={styles.buttons}>
                            <Link href="/">
                                <button className={`${styles.button} ${styles.view}`}>View</button>
                            </Link>
                            <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                            <button className={`${styles.button} ${styles.edit}`}>Edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}
export default TestsPage;