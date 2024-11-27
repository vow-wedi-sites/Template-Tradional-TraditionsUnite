import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomSection from "@/components/ui/custom_section/custom_section";
import React from "react";
import styles from "./couple.module.scss";
import { Image } from "react-bootstrap";
import fonts from "@/styles/fonts";
import EVENT_DETAILS from "@/constants/event_details";

const BrideGroomSection = () => {
  return (
    <section id="couple" className={styles.BrideGroomSection}>
      <CustomContainer>
        <CustomSection head="The Couple">
          <div className={styles.wrap}>
            <div className={styles.box} data-aos="fade-right">
              <div className={styles.img}>
                <Image
                  src={"/assets/img_border.svg"}
                  alt="border"
                  width={300}
                  className={styles.border}
                />
                <Image
                  src={EVENT_DETAILS.groom.imgUrl}
                  alt="groom"
                  width={250}
                  className={styles.i}
                />
              </div>
              <h2 className={fonts.rouge_Script}>{EVENT_DETAILS.groom.name}</h2>
              <p>{EVENT_DETAILS.groom.about}</p>
            </div>
            <div className={styles.divider}>
              <Image
                src={"/assets/heart1.png"}
                data-aos="zoom-out"
                alt="heart"
                width={200}
              />
            </div>
            <div className={styles.box} data-aos="fade-left">
              <div className={styles.img}>
                <Image
                  src={"/assets/img_border.svg"}
                  alt="border"
                  width={300}
                  className={styles.border}
                />
                <Image
                  src={EVENT_DETAILS.bride.imgUrl}
                  alt="groom"
                  width={250}
                  className={styles.i}
                />
              </div>
              <h2 className={fonts.rouge_Script}>{EVENT_DETAILS.bride.name}</h2>
              <p>{EVENT_DETAILS.bride.about}</p>
            </div>
          </div>
        </CustomSection>
      </CustomContainer>
    </section>
  );
};

export default BrideGroomSection;
