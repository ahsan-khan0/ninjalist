import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Ninja List</h1>
      <div className={styles.links}>
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/about">
          {" "}
          About{" "}
        </Link>
        <Link className={styles.link} href="/ninjas">
          Ninja Listing
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
