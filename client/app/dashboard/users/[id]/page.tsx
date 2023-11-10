import styles from "@/app/ui/dashboard/users/userInfo/userInfo.module.css";
import Image from "next/image";

const UserInfoPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imageContainer}>
                    <Image src="/userIcon.png" alt="" fill className={styles.image} />
                </div>
                Joy
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Joy" />

                    <label>Email</label>
                    <input type="email" name="email" placeholder="Joy@mail.cc" />

                    <label>Password</label>
                    <input type="password" name="password" placeholder="" />

                    <label>Phone</label>
                    <input type="phone" name="phone" placeholder="Joy" />

                    <label>Address</label>
                    <input type="text" name="address" placeholder="Joy" />

                    <label>isAdmin</label>
                    <select name="isAdmin">
                        <option value={"true"}>True</option>
                        <option value={"false"}>True</option>
                    </select>

                    <label>isActive</label>
                    <select name="isActive">
                        <option value={"true"}>True</option>
                        <option value={"false"}>True</option>
                    </select>
                    <button>Upadte</button>
                </form>
            </div>
        </div>
    )
}

export default UserInfoPage;