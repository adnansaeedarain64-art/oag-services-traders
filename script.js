/* =========================================================
   OAG SERVICES & TRADERS
   PROFESSIONAL CORPORATE WEBSITE
========================================================= */

:root {

  --navy: #071a35;
  --navy-2: #0b2548;

  --blue: #0878d1;
  --blue-dark: #005ca8;
  --blue-light: #eaf5ff;

  --white: #ffffff;
  --black: #07111f;

  --text: #344054;
  --muted: #667085;

  --light: #f5f8fc;
  --border: #e2e8f0;

  --shadow: 0 15px 40px rgba(7, 26, 53, .10);

  --radius: 18px;

}


/* ================= RESET ================= */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {

  font-family: "Poppins", sans-serif;

  color: var(--text);

  background: var(--white);

  line-height: 1.7;

  overflow-x: hidden;

}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  font-family: inherit;
}


/* ================= CONTAINER ================= */

.container {

  width: min(1180px, 92%);

  margin: auto;

}


/* ================= TOP BAR ================= */

.top-bar {

  background: var(--navy);

  color: rgba(255,255,255,.85);

  font-size: 13px;

}

.top-content {

  min-height: 42px;

  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 20px;

}

.top-content span {

  margin-right: 22px;

}

.top-content i {

  color: #49b8ff;

  margin-right: 6px;

}


/* ================= NAVBAR ================= */

.navbar {

  position: sticky;

  top: 0;

  z-index: 999;

  background: rgba(255,255,255,.97);

  backdrop-filter: blur(12px);

  border-bottom: 1px solid #edf1f6;

}

.nav-wrapper {

  min-height: 82px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 30px;

}

.logo-area {

  display: flex;

  align-items: center;

  gap: 12px;

}

.logo-area img {

  width: 52px;

  height: 52px;

  object-fit: contain;

}

.logo-text {

  display: flex;

  flex-direction: column;

}

.logo-text strong {

  font-family: "Montserrat", sans-serif;

  font-size: 28px;

  font-weight: 800;

  line-height: 1;

  color: var(--navy);

}

.logo-text span {

  font-size: 9px;

  font-weight: 700;

  letter-spacing: 2px;

  color: var(--blue);

}

nav {

  display: flex;

  align-items: center;

  gap: 5px;

}

nav > a {

  padding: 10px 13px;

  font-size: 13px;

  font-weight: 600;

  color: #344054;

  transition: .25s ease;

}

nav > a:hover,
nav > a.active {

  color: var(--blue);

}

.nav-quote {

  color: var(--white) !important;

  background: var(--blue);

  border-radius: 8px;

  margin-left: 7px;

  padding: 12px 17px !important;

}

.nav-quote:hover {

  background: var(--navy);

  transform: translateY(-2px);

}

.menu-toggle {

  display: none;

  border: 0;

  background: none;

  font-size: 25px;

  color: var(--navy);

  cursor: pointer;

}


/* ================= HERO ================= */

.hero {

  min-height: 680px;

  position: relative;

  display: flex;

  align-items: center;

  background:

    linear-gradient(110deg,
      rgba(4,20,42,.98) 0%,
      rgba(4,26,54,.90) 45%,
      rgba(4,35,70,.55) 100%
    ),

    url("images/hero.jpg") center/cover no-repeat;

  overflow: hidden;

}

.hero-overlay {

  position: absolute;

  inset: 0;

  background:

    radial-gradient(
      circle at 80% 30%,
      rgba(8,120,209,.35),
      transparent 35%
    );

}

.hero-content {

  position: relative;

  z-index: 2;

  display: grid;

  grid-template-columns: 1.1fr .9fr;

  align-items: center;

  gap: 70px;

  padding: 80px 0;

}

.hero-small {

  display: inline-flex;

  align-items: center;

  gap: 8px;

  color: #64c5ff;

  font-size: 12px;

  font-weight: 700;

  letter-spacing: 1.4px;

  margin-bottom: 18px;

}

.hero-text h1 {

  font-family: "Montserrat", sans-serif;

  font-size: clamp(42px, 5vw, 70px);

  line-height: 1.05;

  color: white;

  font-weight: 800;

  letter-spacing: -2px;

  margin-bottom: 24px;

}

.hero-text h1 span {

  display: block;

  color: #55bfff;

}

.hero-text > p {

  color: rgba(255,255,255,.78);

  font-size: 17px;

  max-width: 650px;

  margin-bottom: 30px;

}

.hero-buttons {

  display: flex;

  flex-wrap: wrap;

  gap: 13px;

  margin-bottom: 28px;

}

.btn {

  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 10px;

  min-height: 52px;

  padding: 0 23px;

  border-radius: 9px;

  font-size: 14px;

  font-weight: 700;

  transition: .3s ease;

}

.btn-primary {

  color: white;

  background: var(--blue);

  box-shadow: 0 12px 25px rgba(8,120,209,.25);

}

.btn-primary:hover {

  background: white;

  color: var(--blue);

  transform: translateY(-3px);

}

.btn-outline {

  color: white;

  border: 1px solid rgba(255,255,255,.35);

}

.btn-outline:hover {

  background: white;

  color: var(--navy);

  transform: translateY(-3px);

}

.hero-points {

  display: flex;

  flex-wrap: wrap;

  gap: 20px;

}

.hero-points div {

  color: rgba(255,255,255,.78);

  font-size: 12px;

  font-weight: 600;

}

.hero-points i {

  color: #54c4ff;

  margin-right: 5px;

}


/* ================= WELCOME VIDEO ================= */

.welcome-video-card {

  position: relative;

}

.video-window {

  min-height: 430px;

  position: relative;

  overflow: hidden;

  border-radius: 22px;

  border: 1px solid rgba(255,255,255,.25);

  background: #0b2548;

  box-shadow: 0 30px 70px rgba(0,0,0,.35);

}

.video-window video {

  width: 100%;

  height: 430px;

  object-fit: cover;

  opacity: .65;

}

.video-message {

  position: absolute;

  inset: 0;

  display: flex;

  flex-direction: column;

  justify-content: center;

  align-items: center;

  text-align: center;

  padding: 35px;

  background: linear-gradient(
    rgba(4,20,42,.15),
    rgba(4,20,42,.80)
  );

}

.welcome-icon {

  width: 72px;

  height: 72px;

  border-radius: 50%;

  display: grid;

  place-items: center;

  background: rgba(8,120,209,.9);

  color: white;

  font-size: 29px;

  margin-bottom: 20px;

  box-shadow: 0 0 0 10px rgba(8,120,209,.15);

}

.video-message > span {

  font-size: 11px;

  letter-spacing: 2px;

  font-weight: 700;

  color: #6bcaff;

}

.video-message h3 {

  color: white;

  font-family: "Montserrat", sans-serif;

  font-size: 25px;

  line-height: 1.3;

  margin: 10px 0 20px;

}

.video-message a {

  color: white;

  background: rgba(255,255,255,.14);

  border: 1px solid rgba(255,255,255,.3);

  padding: 10px 17px;

  border-radius: 8px;

  font-size: 13px;

  font-weight: 700;

}


/* ================= TRUST ================= */

.trust-bar {

  background: white;

  box-shadow: 0 10px 35px rgba(0,0,0,.06);

  position: relative;

  z-index: 5;

}

.trust-grid {

  display: grid;

  grid-template-columns: repeat(4,1fr);

}

.trust-grid > div {

  display: flex;

  align-items: center;

  gap: 15px;

  padding: 25px 20px;

  border-right: 1px solid var(--border);

}

.trust-grid > div:last-child {

  border-right: 0;

}

.trust-grid i {

  color: var(--blue);

  font-size: 28px;

}

.trust-grid strong {

  display: block;

  color: var(--navy);

  font-size: 13px;

}

.trust-grid small {

  display: block;

  color: var(--muted);

  font-size: 11px;

}


/* ================= SECTIONS ================= */

.section {

  padding: 100px 0;

}

.section-label {

  display: inline-block;

  color: var(--blue);

  font-size: 11px;

  font-weight: 800;

  letter-spacing: 2px;

  margin-bottom: 12px;

}

.section-heading {

  margin-bottom: 50px;

}

.section-heading.center {

  text-align: center;

  max-width: 750px;

  margin-left: auto;

  margin-right: auto;

}

.section-heading h2,
.about-text h2 {

  font-family: "Montserrat", sans-serif;

  color: var(--navy);

  font-size: clamp(31px,4vw,45px);

  line-height: 1.15;

  font-weight: 800;

  letter-spacing: -.8px;

}

.section-heading h2 span,
.about-text h2 span {

  color: var(--blue);

}

.section-heading p {

  margin-top: 14px;

  color: var(--muted);

  font-size: 14px;

}


/* ================= ABOUT ================= */

.about-preview {

  background: white;

}

.two-column {

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 80px;

  align-items: center;

}

.image-box {

  position: relative;

  border-radius: 20px;

}

.image-box > img {

  width: 100%;

  height: 480px;

  object-fit: cover;

  border-radius: 20px;

  background: var(--light);

}

.experience-card {

  position: absolute;

  right: -25px;

  bottom: 30px;

  background: white;

  padding: 18px;

  display: flex;

  align-items: center;

  gap: 13px;

  border-radius: 13px;

  box-shadow: var(--shadow);

}

.experience-card i {

  font-size: 28px;

  color: var(--blue);

}

.experience-card strong {

  display: block;

  font-size: 13px;

  color: var(--navy);

}

.experience-card span {

  font-size: 10px;

  color: var(--muted);

}

.about-text p {

  font-size: 14px;

  color: var(--muted);

  margin-top: 17px;

}

.about-features {

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 12px;

  margin: 28px 0;

}

.about-features div {

  font-size: 12px;

  font-weight: 600;

  color: var(--navy);

}

.about-features i {

  color: var(--blue);

  margin-right: 7px;

}

.text-button {

  display: inline-flex;

  align-items: center;

  gap: 10px;

  color: var(--blue);

  font-size: 13px;

  font-weight: 800;

}

.text-button:hover {

  gap: 15px;

}


/* ================= CATEGORIES ================= */

.categories-section {

  background: var(--light);

}

.category-grid {

  display: grid;

  grid-template-columns: repeat(3,1fr);

  gap: 20px;

}

.category-card {

  background: white;

  border: 1px solid var(--border);

  border-radius: var(--radius);

  padding: 30px;

  transition: .3s ease;

}

.category-card:hover {

  transform: translateY(-8px);

  border-color: rgba(8,120,209,.35);

  box-shadow: var(--shadow);

}

.category-icon {

  width: 58px;

  height: 58px;

  display: grid;

  place-items: center;

  background: var(--blue-light);

  color: var(--blue);

  border-radius: 13px;

  font-size: 23px;

  margin-bottom: 20px;

}

.category-card h3 {

  color: var(--navy);

  font-family: "Montserrat", sans-serif;

  font-size: 19px;

  margin-bottom: 8px;

}

.category-card p {

  color: var(--muted);

  font-size: 12px;

  min-height: 62px;

}

.category-card > span {

  display: inline-flex;

  align-items: center;

  gap: 8px;

  color: var(--blue);

  font-size: 11px;

  font-weight: 800;

  margin-top: 15px;

}


/* ================= PRODUCTS ================= */

.featured-section {

  background: white;

}

.featured-section .section-heading {

  display: flex;

  justify-content: space-between;

  align-items: end;

  gap: 30px;

}

.outline-button {

  border: 1px solid var(--border);

  padding: 11px 16px;

  border-radius: 8px;

  color: var(--navy);

  font-size: 12px;

  font-weight: 700;

}

.outline-button:hover {

  color: white;

  background: var(--blue);

  border-color: var(--blue);

}

.product-grid {

  display: grid;

  grid-template-columns: repeat(3,1fr);

  gap: 22px;

}

.product-card {

  overflow: hidden;

  background: white;

  border: 1px solid var(--border);

  border-radius: 16px;

  transition: .3s ease;

}

.product-card:hover {

  transform: translateY(-7px);

  box-shadow: var(--shadow);

}

.product-image {

  height: 250px;

  background: var(--light);

  position: relative;

  overflow: hidden;

}

.product-image img {

  width: 100%;

  height: 100%;

  object-fit: cover;

  transition: .5s ease;

}

.product-card:hover .product-image img {

  transform: scale(1.06);

}

.product-image span {

  position: absolute;

  left: 13px;

  top: 13px;

  background: var(--blue);

  color: white;

  padding: 5px 9px;

  border-radius: 5px;

  font-size: 8px;

  font-weight: 800;

  letter-spacing: 1px;

}

.product-info {

  padding: 22px;

}

.product-info h3 {

  font-family: "Montserrat", sans-serif;

  color: var(--navy);

  font-size: 18px;

}

.product-info p {

  color: var(--muted);

  font-size: 12px;

  margin: 8px 0 17px;

}

.product-info a {

  display: inline-flex;

  align-items: center;

  gap: 8px;

  color: var(--blue);

  font-size: 11px;

  font-weight: 800;

}


/* ================= WHY ================= */

.why-section {

  background: var(--light);

}

.why-grid {

  display: grid;

  grid-template-columns: repeat(3,1fr);

  gap: 20px;

}

.why-card {

  padding: 30px;

  background: white;

  border: 1px solid var(--border);

  border-radius: 15px;

  transition: .3s ease;

}

.why-card:hover {

  transform: translateY(-5px);

  box-shadow: var(--shadow);

}

.why-card i {

  color: var(--blue);

  font-size: 27px;

  margin-bottom: 18px;

}

.why-card h3 {

  font-family: "Montserrat", sans-serif;

  color: var(--navy);

  font-size: 17px;

  margin-bottom: 7px;

}

.why-card p {

  color: var(--muted);

  font-size: 12px;

}


/* ================= INDUSTRIES ================= */

.industries-section {

  padding: 95px 0;

  background:

    linear-gradient(
      rgba(5,25,52,.96),
      rgba(5,25,52,.96)
    ),

    url("images/industry.jpg") center/cover;

}

.section-heading.light h2 {

  color: white;

}

.section-heading.light p {

  color: rgba(255,255,255,.65);

}

.industry-grid {

  display: grid;

  grid-template-columns: repeat(4,1fr);

  gap: 14px;

}

.industry-grid > div {

  display: flex;

  align-items: center;

  gap: 12px;

  padding: 20px;

  color: white;

  background: rgba(255,255,255,.06);

  border: 1px solid rgba(255,255,255,.12);

  border-radius: 10px;

  transition: .3s;

}

.industry-grid > div:hover {

  background: var(--blue);

  transform: translateY(-4px);

}

.industry-grid i {

  color: #56c5ff;

  font-size: 20px;

}

.industry-grid span {

  font-size: 12px;

  font-weight: 700;

}


/* ================= CTA ================= */

.cta-section {

  background: linear-gradient(
    110deg,
    var(--blue-dark),
    var(--blue)
  );

  color: white;

  padding: 70px 0;

}

.cta-content {

  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 40px;

}

.cta-section .section-label {

  color: #b8e4ff;

}

.cta-section h2 {

  font-family: "Montserrat", sans-serif;

  font-size: clamp(28px,4vw,42px);

  line-height: 1.15;

  font-weight: 800;

}

.cta-section h2 span {

  display: block;

  color: #d5f0ff;

}

.cta-section p {

  max-width: 620px;

  color: rgba(255,255,255,.78);

  font-size: 13px;

  margin-top: 12px;

}

.cta-buttons {

  display: flex;

  flex-wrap: wrap;

  gap: 10px;

}

.btn-white {

  color: var(--navy);

  background: white;

}

.btn-white:hover {

  transform: translateY(-3px);

}

.btn-whatsapp {

  color: white;

  background: #20b85a;

}

.btn-whatsapp:hover {

  background: #159344;

  transform: translateY(-3px);

}


/* ================= CONTACT ================= */

.contact-preview {

  background: white;

}

.contact-grid {

  display: grid;

  grid-template-columns: repeat(4,1fr);

  gap: 18px;

}

.contact-card {

  padding: 28px 20px;

  text-align: center;

  background: var(--light);

  border: 1px solid var(--border);

  border-radius: 15px;

}

.contact-card > i {

  font-size: 27px;

  color: var(--blue);

  margin-bottom: 15px;

}

.contact-card h3 {

  color: var(--navy);

  font-family: "Montserrat", sans-serif;

  font-size: 16px;

}

.contact-card p {

  color: var(--muted);

  font-size: 11px;

  margin-top: 5px;

}

.contact-card a {

  display: inline-block;

  margin-top: 13px;

  color: var(--blue);

  font-size: 11px;

  font-weight: 800;

}


/* ================= FOOTER ================= */

.footer {

  background: #041326;

  color: rgba(255,255,255,.65);

  padding-top: 70px;

}

.footer-grid {

  display: grid;

  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;

  gap: 50px;

  padding-bottom: 55px;

}

.footer-logo {

  display: flex;

  align-items: center;

  gap: 10px;

  margin-bottom: 20px;

}

.footer-logo img {

  width: 45px;

  height: 45px;

  object-fit: contain;

}

.footer-logo strong {

  display: block;

  color: white;

  font-family: "Montserrat", sans-serif;

  font-size: 25px;

  line-height: 1;

}

.footer-logo span {

  color: #58c5ff;

  font-size: 8px;

  font-weight: 800;

  letter-spacing: 1.5px;

}

.footer-about > p {

  font-size: 12px;

  max-width: 320px;

}

.socials {

  display: flex;

  gap: 8px;

  margin-top: 20px;

}

.socials a {

  width: 35px;

  height: 35px;

  display: grid;

  place-items: center;

  color: white;

  background: rgba(255,255,255,.08);

  border-radius: 7px;

}

.socials a:hover {

  background: var(--blue);

}

.footer h3 {

  color: white;

  font-family: "Montserrat", sans-serif;

  font-size: 14px;

  margin-bottom: 20px;

}

.footer-grid > div:not(:first-child) > a {

  display: block;

  font-size: 11px;

  margin-bottom: 9px;

  transition: .2s;

}

.footer-grid > div:not(:first-child) > a:hover {

  color: #55c4ff;

  padding-left: 4px;

}

.footer-grid > div:last-child p {

  font-size: 11px;

  margin-bottom: 11px;

}

.footer-grid > div:last-child i {

  width: 18px;

  color: #55c4ff;

}

.footer-bottom {

  border-top: 1px solid rgba(255,255,255,.08);

}

.footer-bottom .container {

  min-height: 65px;

  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 20px;

}

.footer-bottom p {

  font-size: 10px;

}


/* ================= WHATSAPP ================= */

.whatsapp-float {

  position: fixed;

  right: 22px;

  bottom: 22px;

  z-index: 1000;

  display: flex;

  align-items: center;

  gap: 9px;

  background: #20b85a;

  color: white;

  padding: 12px 17px;

  border-radius: 50px;

  box-shadow: 0 10px 30px rgba(0,0,0,.22);

  font-size: 12px;

  font-weight: 700;

  animation: whatsappPulse 2.2s infinite;

}

.whatsapp-float i {

  font-size: 22px;

}

.whatsapp-float:hover {

  background: #159344;

  transform: translateY(-3px);

}

@keyframes whatsappPulse {

  0%,100% {
    box-shadow: 0 10px 30px rgba(0,0,0,.22);
  }

  50% {
    box-shadow: 0 10px 30px rgba(32,184,90,.42);
  }

}


/* ================= RESPONSIVE ================= */

@media(max-width: 1000px) {

  nav {

    gap: 0;

  }

  nav > a {

    padding: 9px 8px;

    font-size: 11px;

  }

  .hero-content {

    gap: 35px;

  }

  .category-grid,
  .product-grid {

    grid-template-columns: repeat(2,1fr);

  }

  .why-grid {

    grid-template-columns: repeat(2,1fr);

  }

  .contact-grid {

    grid-template-columns: repeat(2,1fr);

  }

  .footer-grid {

    grid-template-columns: repeat(2,1fr);

  }

}


@media(max-width: 760px) {

  .top-bar {

    display: none;

  }

  .nav-wrapper {

    min-height: 70px;

  }

  .menu-toggle {

    display: block;

  }

  nav {

    display: none;

    position: absolute;

    left: 0;

    right: 0;

    top: 70px;

    background: white;

    padding: 15px 5% 20px;

    flex-direction: column;

    align-items: stretch;

    box-shadow: 0 15px 30px rgba(0,0,0,.1);

  }

  nav.show {

    display: flex;

  }

  nav > a {

    padding: 13px;

    font-size: 13px;

  }

  .nav-quote {

    margin: 5px 0 0;

    text-align: center;

  }

  .hero {

    min-height: auto;

  }

  .hero-content {

    grid-template-columns: 1fr;

    padding: 70px 0;

  }

  .hero-text h1 {

    font-size: 43px;

  }

  .video-window {

    min-height: 350px;

  }

  .video-window video {

    height: 350px;

  }

  .trust-grid {

    grid-template-columns: 1fr 1fr;

  }

  .trust-grid > div {

    border-bottom: 1px solid var(--border);

  }

  .two-column {

    grid-template-columns: 1fr;

    gap: 45px;

  }

  .experience-card {

    right: 15px;

  }

  .section {

    padding: 70px 0;

  }

  .category-grid,
  .product-grid,
  .why-grid {

    grid-template-columns: 1fr;

  }

  .featured-section .section-heading {

    align-items: start;

    flex-direction: column;

  }

  .industry-grid {

    grid-template-columns: 1fr 1fr;

  }

  .cta-content {

    flex-direction: column;

    align-items: flex-start;

  }

  .contact-grid {

    grid-template-columns: 1fr;

  }

}


@media(max-width: 480px) {

  .container {

    width: 90%;

  }

  .logo-text strong {

    font-size: 23px;

  }

  .logo-text span {

    font-size: 7px;

  }

  .hero-text h1 {

    font-size: 37px;

  }

  .hero-text > p {

    font-size: 14px;

  }

  .hero-buttons {

    flex-direction: column;

    align-items: stretch;

  }

  .hero-buttons .btn {

    width: 100%;

  }

  .hero-points {

    flex-direction: column;

    gap: 8px;

  }

  .trust-grid {

    grid-template-columns: 1fr;

  }

  .about-features {

    grid-template-columns: 1fr;

  }

  .industry-grid {

    grid-template-columns: 1fr;

  }

  .footer-grid {

    grid-template-columns: 1fr;

  }

  .footer-bottom .container {

    flex-direction: column;

    justify-content: center;

    padding: 18px 0;

    text-align: center;

  }

  .whatsapp-float span {

    display: none;

  }

  .whatsapp-float {

    width: 55px;

    height: 55px;

    padding: 0;

    justify-content: center;

  }

}
