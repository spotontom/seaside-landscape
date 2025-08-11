
'use client';
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar(){
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={`container ${styles.row}`}>
        <div className={styles.brand}>
          <Image className={styles.logo} src="/images/logo.png" alt="Seaside Landscape Solutions logo" width={44} height={44} />
          <span>Seaside Landscape Solutions</span>
        </div>
        <nav className={styles.nav}>
          <Link className={styles.link} href="#services">Services</Link>
          <Link className={styles.link} href="#gallery">Gallery</Link>
          <Link className={styles.link} href="#about">About</Link>
          <Link className={styles.link} href="#contact">Contact</Link>
        </nav>
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <a className={styles.cta} href="tel:+1-555-555-5555">Call for a Quote</a>
          <button className={styles.burger} aria-label="Open menu" onClick={()=>setOpen(v=>!v)}><span/></button>
        </div>
      </div>
      {open && (
        <div className={`container ${styles.mobile}`}>
          <Link href="#services" onClick={()=>setOpen(false)}>Services</Link>
          <Link href="#gallery" onClick={()=>setOpen(false)}>Gallery</Link>
          <Link href="#about" onClick={()=>setOpen(false)}>About</Link>
          <Link href="#contact" onClick={()=>setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
