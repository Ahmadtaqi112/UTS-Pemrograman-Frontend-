import styles from "./Hero.module.css";
import Button from "../Button/Button";
import Title from "../title/title";
import Img from "../image/image";

function Hero () {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Covid ID </h2>
                    <h3 className={styles.hero__genre}>
                       Monitoring Pengembangan Covid 19
                    </h3>
                    <p className={styles.hero__description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cum dolores iusto assumenda. Excepturi voluptas, veritatis recusandae quam incidunt totam ea nihil ab amet provident ut eveniet, ex explicabo nisi.

                    </p>
                    <button className={styles.hero__button}>Vaccine</button>
                </div>
                <div className={styles.hero__right}>
                    <img 
                    className={styles.hero__image}
                    src="img/nurse.svg"
                    alt="placeholder" />
                    
                </div>
            </section>
        </div>
    )
}

export default Hero;