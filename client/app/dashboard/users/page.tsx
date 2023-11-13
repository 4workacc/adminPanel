import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import fetchAllUsers from "@/app/utils/request";
import Image from "next/image";
import Link from "next/link";

interface IProp {
    placeholder: string;
}

const UserPage = async () => {
    const users = await fetchAllUsers();
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
                        <td>Code0</td>
                        <td>Code1</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>                   
                    {users.map((user: any) => (
                        <tr>
                            <td><div className={styles.user}>
                                <Image
                                    src="/userIcon.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.userImage} />
                                {user[1]}
                            </div>
                            </td>
                            <td>
                                {user[2]}
                            </td>
                            <td>
                                {user[3]}
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
                    ))}
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}
export default UserPage;