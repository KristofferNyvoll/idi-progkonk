import { useState } from "react";
import styles from "../styles/styling.module.css";
import RegistrationForm from "../components/RegistrationForm";
import Image from "next/image";
import Title from "../components/Title";
import UpcomingCompetition from "../components/UpcomingComp";

export default function IDIOpen() {
  const [registrationOpen, setRegistrationOpen] = useState(true);
  // Fetch data pertaining to IDI Open
  return (
    <section className={styles.section}>
      <Title text={"~/idi-open"} />
      {/* The inputs below will be dynamic */}
      <UpcomingCompetition
        title="IDI Open 2023"
        date="22.April"
        time="11:00-16:00"
        location="Realfagbygget, NTNU Gløshaugen"
        registrationButton={registrationOpen}
        buttonText="Registrer lag"
      />

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
          <div className={styles.placeholder}>
            <p>
              Påmeldingen for neste konkurranse åpner&nbsp;
              <code className={styles.code}>01.03.2023</code>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
