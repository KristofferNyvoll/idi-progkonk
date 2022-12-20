import styles from "../styles/pages.module.css";

interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  return <h1 className={styles.title}>{text}</h1>;
}
