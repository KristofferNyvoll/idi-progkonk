import { useState } from "react";
import styles from "../styles/pages.module.css";
import RegistrationForm from "../components/RegistrationForm";
import Button from "../components/Button";
import Image from "next/image";
import Title from "../components/Title";

export default function IDIOpen() {
  const [registrationOpen, setRegistrationOpen] = useState(true);

  return (
    <section className={styles.section}>
      <Title text={"~/idi-open"} />
      <div className={styles.nextCompetition}>
        <h3>Hva: IDI Open 2023</h3>
        <h3>Dato: 24.April</h3>
        <h3>Tidspunkt: 11:00-16:00</h3>
        <h3>Hvor: Realfagbygget, NTNU Gløshaugen</h3>

        {registrationOpen && <Button text="Registrer lag" />}
      </div>

      <div className={styles.description}>
        <div className={styles.logo}>
          <Image
            src="/idi_open_logo.jpg"
            alt="IDI Open Logo"
            className={styles.idiopenLogo}
            width={300}
            height={300}
          />
        </div>
        <div className={styles.descriptionText}>
          <h2>Hva er IDI Open?</h2>
          <p>
            Det som begynte som en treningsarena for NCPC (som holdes på høsten)
            ble til en årlig programmeringskonkurranse som har blitt gjennomført
            siden 2012. Konkurransen er åpen for alle som vil delta, både
            tilstede på NTNU og remote (kun de på NTNU får premier). Oppgavene
            lages av ildsjeler som virkelig brenner for
            konkurranseprogrammering.
          </p>
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
