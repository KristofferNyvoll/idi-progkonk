import Title from "../components/Title";
import UpcomingCompetition from "../components/UpcomingComp";
import styles from "../styles/pages.module.css";
import Image from "next/image";

export default function NCPC() {
  // Fetch data pertaining to NCPC here (upcomingComp, logo, description, etc)
  return (
    <section className={styles.section}>
      <Title text={"~/ncpc"} />
      <UpcomingCompetition
        // This data will be dynamic, just filler right now
        title="IDI Open 2023"
        date="24.April"
        time="11:00-16:00"
        location="Realfagbygget, NTNU Gløshaugen"
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
          <h2>Hva er NCPC?</h2>
          <p>Tekst om NCPC her.</p>
        </div>
      </div>
    </section>
  );
}
