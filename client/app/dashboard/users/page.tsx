import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import {fetchUsers} from "@/app/utils/requests";
import { IUser } from "@/app/utils/types";
import Image from "next/image";
import Link from "next/link";

interface IProp {
    searchParams: {
        username: string,
        page: string,
    };
}

const UserPage = async ({searchParams}:IProp) => {
    const requestUserName: string = searchParams?.username;
    const requestPage: string = searchParams?.page || "1";
    const users: IUser[] = await fetchUsers(requestUserName, requestPage) || [];
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
                        <td>Post</td>
                        <td>Employement</td>
                        <td>Unit</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>                   
                    {users.map((user: IUser) => (
                        <tr key={user.id}>
                            <td><div className={styles.user}>
                                <Image
                                    src="/userIcon.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={styles.userImage} />
                                {user.fio}
                            </div>
                            </td>
                            <td>
                                {user.code0}
                            </td>
                            <td>
                                {user.code1}
                            </td>
                            <td>
                                {user.post}
                            </td>
                            <td>
                                {user.employement}
                            </td>
                            <td>
                                {user.unit}
                            </td>
                            <td className={styles.buttons}>
                                <Link href={"/dashboard/users/"+user.id}>
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