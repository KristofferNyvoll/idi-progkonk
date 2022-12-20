import styles from "../styles/styling.module.css";

interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return <button className={styles.button}>{text}</button>;
}
