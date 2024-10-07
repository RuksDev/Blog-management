import Image from "next/image";
import styles from "./home.module.css"

const Home = () => {
  return <div className={styles.container}>
    
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Creative Thought Agency.</h1>
      <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi.
         Proin non massa ac justo ultricies tempus. Fusce et augue a justo condimentum malesuada.
          Ut bibendum, purus non ullamcorper dignissim, nulla lorem efficitur massa, eget consectetur lectus sapien at neque. 
          Nam vitae purus eu libero fermentum scelerisque.
      </p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
        
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="" className={styles.brandImg}
        width={800} // Set the appropriate width & height
        height={70} />
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.gif" alt="" className={styles.heroImg} 
      width={600} // Set the appropriate width
      height={500}/>
    </div>
  </div>;
  
  
  
};

export default Home;






