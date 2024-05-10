import styles from "./indo.module.css"
import data from "../../utils/constants/indonesia"
import Card from "../card/card";
import Title from "../title/title";


function Indo() {
    return (
      <div className={styles.container}>
        <div className={styles.indo}>
          <div className={styles.indo__title}>
            <Title title="Indonesia" />
            <Title subtitle="Data Covid Berdasarkan Global" />
          </div>
          <div className={styles.indo__body}>
            {data.indonesia.map((data) => (
              <Card
                key={data.status}
                status={data.status}
                total={data.total}
                detail={data.detail}
              />
            ))}
          </div>
       
        </div>
      </div>
    );
  }
  
  export default Indo;