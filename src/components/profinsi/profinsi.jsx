import data from "../../utils/constants/provinces";
import Table from "../table/table";
import Title from "../title/title";
import styles from "./profinsi.module.css"



function Profinsi(props) {
    const { provinces, setProvinces } = props;
  
    return (
      <div className={styles.container}>
        <div className={styles.provinsi}>
          <div className={styles.provinsi__title}>
            <Title title="Provinsi" />
            <Title subtitle="Data Covid Berdasarkan Provinsi" />
          </div>
          <div className={styles.provinsi__body}>
            <table className={styles.provinsi__table}>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Provinsi</th>
                  <th>Positif</th>
                  <th>Sembuh</th>
                  <th>Dirawat</th>
                  <th>Meninggal</th>
                </tr>
              </thead>
              <tbody>
                {provinces.map((data, index) => (
                  <Table
                    index={index}
                    key={data.kota}
                    kota={data.kota}
                    kasus={data.kasus}
                    dirawat={data.dirawat}
                    sembuh={data.sembuh}
                    meninggal={data.meninggal}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  
  export default Profinsi;