import Link from "next/link";
import Image from "next/image";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className={styles.vercelLogo}
          width={100}
          height={24}
        />
      </div>
      <div className={styles.links}>
        <Link className={styles.link} href="/ncpc">
          {" "}
          <p>NCPC</p>
        </Link>
        <Link className={styles.link} href="/idi-open">
          {" "}
          <p>IDI Open</p>
        </Link>
        <Link className={styles.link} href="/om-oss">
          {" "}
          <p>Om Oss</p>
        </Link>
      </div>
    </div>
  );
}
