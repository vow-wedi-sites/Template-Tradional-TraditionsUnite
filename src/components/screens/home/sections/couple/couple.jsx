import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomSection from "@/components/ui/custom_section/custom_section";
import React from "react";
import styles from "./couple.module.scss";
import { Image } from "react-bootstrap";
import fonts from "@/styles/fonts";

const BrideGroomSection = () => {
  const groom = {
    id: "Groom",
    img: "/assets/groom.jpg",
    name: "Siddharth",
    about:
      "Siddharth, a beacon of grace and elegance, brings a radiant spirit to every moment, infusing joy and warmth into the lives of those around her. Her kindness and sincerity form the cornerstone of her being, illuminating the lives of all who cross her.",
  };

  const bride = {
    id: "Bride",
    img: "/assets/bride.jpg",
    name: "Natasha",
    about:
      "Natasha, a blend of strength and tenderness, emanates a captivating charm that lights up every room. His unwavering support and love serve as a pillar for all who know him, his charismatic presence leaving an indelible mark on the hearts of those he encounters. ",
  };

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
                  src={groom.img}
                  alt="groom"
                  width={250}
                  className={styles.i}
                />
              </div>
              <h2 className={fonts.rouge_Script}>{groom.name}</h2>
              <p>{groom.about}</p>
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
                  src={bride.img}
                  alt="groom"
                  width={250}
                  className={styles.i}
                />
              </div>
              <h2 className={fonts.rouge_Script}>{bride.name}</h2>
              <p>{bride.about}</p>
            </div>
          </div>
        </CustomSection>
      </CustomContainer>
    </section>
  );
};

export default BrideGroomSection;
