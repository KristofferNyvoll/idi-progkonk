import Link from "next/link";
import Image from 'next/image'
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
            <Link href="/ncpc">NCPC</Link>
            <Link href="/idi-open">IDI Open</Link>
            <Link href="/om-oss">Om oss</Link>
        </div>
    </div>

  )
}
