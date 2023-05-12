import styles from "../../styles/ninjas.module.css";

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const paths = data.map((ninja) => {
    return {
      params: {
        id: ninja.id.toString(),
      },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};
export const getStaticProps = async (ab) => {
  const id = ab.params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  return {
    props: {
      ninja: data,
    },
  };
};

const Details = ({ ninja }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Ninja Details</h1>
      <div className={styles.details}>
        <p>
          <strong>Name:</strong> {ninja.name}
        </p>
        <p>
          <strong>Email:</strong> {ninja.email}
        </p>
        <p>
          <strong>Website:</strong> {ninja.website}
        </p>
        <p>
          <strong>City:</strong> {ninja.address.city}
        </p>
      </div>
    </div>
  );
};

export default Details;
