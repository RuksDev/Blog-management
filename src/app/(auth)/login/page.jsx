
import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/action";
import { auth } from "@/lib/auth";
import styles from "./login.module.css";


const LoginPage =() =>{

    // auth?.user?.isAdmin && router.push("/"); 
    //we have better solution from nextjs middleware

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form action={handleGithubLogin}>
                <button className={styles.github}>Login With Github</button>
            </form>
            <LoginForm/>
            </div>
        </div>
    )
}

export default LoginPage;



