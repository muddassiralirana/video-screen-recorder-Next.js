"use client"
import Image from 'next/image'
import styles from './page.module.css'
import ScreenRecorder from '../components/ScreenRecorder';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
         &nbsp;
          <code className={styles.code}>MuddassirAliRana</code>
        </p>
        <div>
          <a
            href="https://muddassiralirana.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
          
            <Image
              src="/dp.png"
              alt="Logo"
              className={styles.vercelLogo}
              width={100}
              height={100}
              priority
            />
          </a>
        </div>
      </div>

      <div >
        <ScreenRecorder />
      </div>

     
    </main>
  )
}
