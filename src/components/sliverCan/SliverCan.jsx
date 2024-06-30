import styles from "./SliverCan.module.css";
import Button from "../button/Button";
import { COLORS } from "../../assets/constants";
import { useNavigate } from "react-router-dom";

const SliverCan = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.contentDiv}>
        <h5 className={styles.subHeading}>Robust • Reliable • Optimised</h5>
        <h3 className={styles.heading}>Sliver Can</h3>
        <p className={styles.desc}>
          Sliver cans are an integral part of the Textile and Jute spinning
          industry as they play a major role in the manufacturing of yarn.
          Sliver cans are cylindrical containers used for collection, storing,
          transporting and discharging sliver for further operations.
        </p>
        <Button
          content="Know More"
          bgColor={COLORS.orange}
          onClick={() => navigate("/sliver-can")}
        />
      </div>
    </div>
  );
};

export default SliverCan;
