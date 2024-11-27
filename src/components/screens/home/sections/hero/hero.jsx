import React from "react";
import styles from "./hero.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";
import fonts from "@/styles/fonts";
import EVENT_DETAILS from "@/constants/event_details";

const HeroSection = () => {
  return (
    <section className={styles.HeroSection}>
      <div className={styles.bg} />
      <CustomContainer>
        <div className={styles.wrap}>
          <div className={styles.left} data-aos="fade-right">
            <Image src="/assets/svg/couple.svg" alt="couple vector" />
          </div>
          <div className={styles.right}>
            <div data-aos="fade-down" data-aos-offset="-300">
              <p>We Are Inviting You</p>
              <span>To The Wedding Of</span>
            </div>
            <h2
              className={fonts.rouge_Script}
              data-aos="zoom-in"
              data-aos-offset="-300"
            >
              {EVENT_DETAILS.groom.name} & {EVENT_DETAILS.bride.name}
            </h2>
            <div data-aos="fade-up" data-aos-offset="-300">
              <span>On</span>
              <p>{EVENT_DETAILS.events.wedding.date}</p>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default HeroSection;
