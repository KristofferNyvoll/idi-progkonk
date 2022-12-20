import styles from "../styles/pages.module.css";
import Button from "./Button";

interface CompetitionProps {
  title: string;
  date: string;
  time: string;
  location: string;
  registrationButton?: boolean;
  buttonText?: string;
}

export default function UpcomingCompetition({
  title,
  date,
  time,
  location,
  registrationButton,
  buttonText,
}: CompetitionProps) {
  return (
    <div className={styles.nextCompetition}>
      <h3>Hva: {title}</h3>
      <h3>Dato: {date}</h3>
      <h3>Tidspunkt: {time}</h3>
      <h3>Hvor: {location}</h3>

      {registrationButton && buttonText && <Button text={buttonText} />}
    </div>
  );
}
