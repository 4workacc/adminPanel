import styles from "@/app/ui/login/loginPage.module.css";
import fetchAllUsers from "../utils/request";

const LoginPage = async () => {  
   const users = (await fetchAllUsers());
   console.log(users);
   return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>LogIn</button>
      </form>
    </div>
  )
}

export default LoginPage;