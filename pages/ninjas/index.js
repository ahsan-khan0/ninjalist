import styles from "../../styles/ninjas.module.css";
import Link from "next/link";
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      ninjas: data,
    },
  };
};
const ninjas = ({ ninjas }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>all ninjas</h1>
      <div className={styles.ninjas}>
        {ninjas.map((ninja) => (
          <Link href={"/ninjas/" + ninja.id} key={ninja.id}>
            <div className={styles.ninja}>
              <h2>{ninja.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ninjas;
