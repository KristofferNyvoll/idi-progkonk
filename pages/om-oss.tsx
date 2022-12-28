import Title from "../components/Title";
import styles from "../styles/styling.module.css";
// import Image from "next/image";

export default function About() {
  return (
    <section className={styles.section}>
      <Title text={"~/om-oss"} />
      {/* Some text about what we do, why we do it, who are involved */}
    </section>
  );
}
