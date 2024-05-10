import styles from "./image.module.css";

function Img(props) {
  return <img src={props.children} alt="" />;
}

export default Img;
