import React from "react";
import styles from "./footer.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Image, Row } from "react-bootstrap";
import PAGES from "@/constants/pages";
import Link from "next/link";
import { Dot, EnvelopeAt, Phone } from "react-bootstrap-icons";
import SocialMedia from "@/components/social_media/social_media";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.bg}></div>
      <CustomContainer>
        <div className={styles.wrap}>
          <div className={styles.logo}>
            <Image src="/logo/logo.png" alt="logo" fluid />
            <br />
            <br />
          </div>
          <div className={styles.pages}>
            {PAGES.map((p, i) => (
              <p key={p.name} className={styles.links}>
                <Link href={p.href}>
                  {p.name}
                  {i !== PAGES.length - 1 && <span>|</span>}
                </Link>
              </p>
            ))}
          </div>
          <div className={styles.text}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              architecto ex dolor amet quisquam iste at animi adipisci, sit
              consectetur labore eum debitis, maiores voluptate perspiciatis
              soluta tenetur harum vero?
            </p>
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <div>
                <EnvelopeAt /> <p>connect@vowwdisites.com</p>
              </div>
              <div>
                <Phone /> <p>+91 99944 99999</p>
              </div>
            </div>
            <div>
              <SocialMedia />
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.tc}>
          <Link href="/terms-conditions">Terms & Conditions</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </CustomContainer>
    </footer>
  );
};

export default Footer;
