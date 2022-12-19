import { useState } from "react";
import styles from "../styles/pages.module.css";
import RegistrationForm from "../components/RegistrationForm";
import Button from "../components/Button";
import Image from "next/image";

export default function IDIOpen() {
  const [registrationOpen, setRegistrationOpen] = useState(true);

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>IDI Open</h1>
      <div className={styles.nextCompetition}>
        <h1>IDI Open 2023</h1>
        <h2>24.April</h2>
        <h2>11:00-16:00</h2>
        <h3>NTNU Gløshaugen</h3>

        {registrationOpen && <Button text="Registrer lag" />}
      </div>

      <div className={styles.description}>
        <div className={styles.logo}>
          <Image
            src="/vercel.svg"
            alt="IDI Open Logo"
            className={styles.idiopenLogo}
            width={100}
            height={24}
          />
        </div>
        <div className={styles.descriptionText}>
          <h2>Hva er IDI Open?</h2>
        </div>
      </div>
      <div className={styles.registration}>
        {registrationOpen ? (
          <RegistrationForm />
        ) : (
          <div>
            <p>Påmeldingen for neste konkurranse har ikke åpnet ennå</p>
          </div>
        )}
      </div>
    </section>
  );
}
