import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";

interface IProp {
    placeholder: string;
}

const UserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search user" />
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>Add new</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created at</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
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
                            asd@sad.asd
                        </td>
                        <td>
                            10.10.2022
                        </td>
                        <td>
                            Admin
                        </td>
                        <td>
                            Active
                        </td>
                        <td className={styles.buttons}>
                            <Link href="/">
                                <button className={`${styles.button} ${styles.view}`}>View</button>
                            </Link>
                            <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}
export default UserPage;