import React from "react";
import styles from "./hero.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";
import fonts from "@/styles/fonts";

const HeroSection = () => {
  return (
    <section className={styles.HeroSection}>
      <div className={styles.bg} />
      <CustomContainer>
        <div className={styles.wrap}>
          <div className={styles.left}>
            <Image src="/assets/svg/couple.svg" alt="couple vector" />
          </div>
          <div className={styles.right}>
            <p>We Are Inviting You</p>
            <span>To The Wedding Of</span>
            <h2 className={fonts.rouge_Script}>Sidharth & Hasini</h2>
            <span>On</span>
            <p>12.10.24</p>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default HeroSection;
