import Image from "next/image";
import styles from "./about.module.css"

export const metadata = {
    title: 'About Page',
    description: 'About description',
  };

const AboutPage = () =>{

    // console.log("Let's check where it's work ")
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className="subTitle">About Agency</h2>
                <h1 className="title">
                    We create digital ideas that are bigger, bloder, brever, and better.
                </h1>
                <p className="desc">
                We create digital ideas that are bigger, bloder, brever, and better. 
                We belive in good ideas flexibility and precission we're world's our 
                special team best consulting & finance solution provider. Wide range of web 
                and software development services.
                </p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of Experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of Experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Year of Experience</p>
                    </div>
                </div>
            </div> 
            <div className={styles.imgContainer}>
                <Image src="/about.png" alt="About Image" fill className={styles.img} />
            </div>
        </div>
    )
}

export default AboutPage;