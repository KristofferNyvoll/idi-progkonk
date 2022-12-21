import styles from "../styles/styling.module.css";

interface ButtonProps {
  text: string;
  fun: () => void;
}

export default function Button({ text, fun }: ButtonProps) {
  return (
    <button
      className={styles.button}
      onClick={() => {
        if (fun !== undefined) {
          fun();
        }
      }}
    >
      {text}
    </button>
  );
}
