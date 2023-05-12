import Link from "next/link";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Home Page</h1>
        <br />
        <p className={styles.desription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <br />
        <p className={styles.desription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <br />

        <Link className={(styles.link, styles.button)} href="/ninjas">
          Meet Our Ninjas
        </Link>
        <br />
      </div>
    </>
  );
}
