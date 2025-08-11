
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./Home.module.css";

export default function HomePage(){
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image src="/images/front-lawn.jpeg" alt="Front lawn with neat landscape beds" fill priority className={styles.heroImg}/>
          <div className={styles.overlay}/>
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.kicker}>Licensed & Insured</span>
            <h1 className={styles.h1}>Coastal-grade landscaping that looks good year-round</h1>
            <p className={styles.hlead}>Reliable mowing, clean installs, and maintenance—built for Gulf Coast weather.</p>
            <div className={styles.ctas}>
              <a href="#contact" className={`${styles.btn} ${styles.primary}`}>Get a Free Quote</a>
              <a href="#gallery" className={`${styles.btn} ${styles.secondary}`}>See Our Work</a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className={styles.strip}>
        <div className={`container ${styles.stripInner}`}>
          <div><strong>Weekly / Bi-weekly</strong><div>Maintenance Plans</div></div>
          <div><strong>Mulch & Rock</strong><div>Installs</div></div>
          <div><strong>Edging & Bed</strong><div>Redesign</div></div>
          <div><strong>Bush & Tree</strong><div>Trimming</div></div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className={`container ${styles.section}`}>
        <h2 className={styles.sectionTitle}>Services</h2>
        <p className={styles.sectionSub}>We keep yards sharp and simple: dependable mowing, bed cleanups, mulch/rock installs, and small plantings. One-time projects or ongoing care.</p>
        <div className={`${styles.grid} ${styles.grid3}`}>
          {[
            { t: "Mowing & Edging — ✂️📏", d: "Consistent cuts, clean lines, and full blow-off." },
            { t: "Bed Redefining — 🧱🪴", d: "Shape beds and install stone or metal edging." },
            { t: "Mulch & Rock Installs — 🍂🪨", d: "Premium mulch or rock, plus weed fabric on request." },
            { t: "Shrub/Tree Trimming — 🌳✂️", d: "Seasonal pruning and haul-away." },
            { t: "Cleanups — 🧹🗑️", d: "Leaf removal, weed pulling, and storm debris." },
            { t: "Small Plantings — 🌱🌼", d: "Hardy Gulf-coast selections for curb appeal." },
          ].map(s => (
            <div key={s.t} className={styles.card}>
              <h3 style={{margin:0,fontWeight:800,color:'var(--ink)'}}>{s.t}</h3>
              <p style={{marginTop:8,color:"var(--slate)"}}>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className={`${styles.section} ${styles.galleryWrap}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Recent Work</h2>
          <p className={styles.sectionSub}>Before/afters and maintenance results from local properties.</p>
          <div className={styles.gallery}>
            {[
              { src: "/images/yard-bed.jpeg", alt: "Curved bed with stone edging and fresh mulch" },
              { src: "/images/front-lawn.jpeg", alt: "Front lawn after mowing with tidy beds" },
              { src: "/images/side-yard-1.jpeg", alt: "Freshly cut side yard path" },
              { src: "/images/side-yard-2.jpeg", alt: "Side yard with trimmed edges and clear path" },
            ].map(img => (
              <div key={img.src} className={styles.thumb}>
                <Image src={img.src} alt={img.alt} fill />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className={`container ${styles.section}`}>
        <div className={styles.about}>
          <div className={styles.aboutMedia}>
            <Image src="/images/yard-bed.jpeg" alt="Mulch install with garden bed border" fill />
          </div>
          <div>
            <h2 className={styles.sectionTitle}>Local, responsive, and detail-driven</h2>
            <p className={styles.sectionSub}>
              Seaside Landscape Solutions is a small operation serving Panama City and the beaches. We show up on schedule,
              answer messages quickly, and leave your property cleaner than we found it.
            </p>
            <ul style={{marginTop:16, color:"var(--ink)"}}>
              <li>• Simple plans and clear pricing</li>
              <li>• Licensed & insured</li>
              <li>• Satisfaction guaranteed—if we miss it, we fix it</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={styles.contactWrap}>
        <div className="container">
          <div className={` ${styles.section} ${styles.contactCard}`}>
            <h2 className={styles.sectionTitle}>Get a free quote</h2>
            <p className={styles.sectionSub}>Tell us your address and ideal service schedule. We’ll respond same-day.</p>
            <div className={styles.contactGrid}>
              <a className={styles.contactBtn} href="tel:+1-555-555-5555">Call Now</a>
              <a className={styles.contactBtn} href="mailto:hello@seasidelandscape.com">Email Us</a>
              <a className={styles.contactBtn} href="#">Request Estimate Form</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
