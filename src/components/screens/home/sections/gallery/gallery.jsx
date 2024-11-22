import React, { useEffect, useRef, useState } from "react";
import styles from "./gallery.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomSection from "@/components/ui/custom_section/custom_section";
import { Image } from "react-bootstrap";
import fonts from "@/styles/fonts";

import { ImageGallery } from "react-image-grid-gallery";

const Gallery = ({ galleryImages = [] }) => {
  return (
    <div className={styles.Gallery} data-aos="fade-in">
      <div data-aos="fade-up" className={styles.cont}>
        <div className={styles.x}>
          <div className={styles.wrap}>
            <ImageGallery
              imagesInfoArray={galleryImages}
              columnCount={"4"}
              columnWidth={125}
              gapSize={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const GallerySection = () => {
  const [isMounted, setIsMounted] = useState(false);

  const noOfImages = 10;

  const galleryImages = [
    {
      src: "/gallery/1.jpg",
      alt: "1",
    },
    {
      src: "/gallery/2.jpg",
      alt: "1",
    },
    {
      src: "/gallery/3.jpg",
      alt: "1",
    },
    {
      src: "/gallery/4.jpg",
      alt: "1",
    },
    {
      src: "/gallery/5.jpg",
      alt: "1",
    },
    {
      src: "/gallery/6.jpg",
      alt: "1",
    },
    {
      src: "/gallery/7.jpg",
      alt: "1",
    },
    {
      src: "/gallery/8.jpg",
      alt: "1",
    },
    {
      src: "/gallery/9.jpg",
      alt: "1",
    },
    {
      src: "/gallery/10.jpg",
      alt: "1",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 1);
  }, []);

  return (
    <section className={styles.GallerySection} id="gallery">
      <CustomContainer>
        <CustomSection head="Cherished Memories in Pixels">
          <div className={styles.video} data-aos="zoom-in">
            <Image
              src="/assets/images/photo_shoot_video_bg.jpg"
              fluid
              alt="vd_bg"
            />
            <div className={styles.text}>
              <p className={fonts.rouge_Script}>Pre Wedding Shoot</p>
              <div>Watch Video</div>
            </div>
          </div>
          {isMounted && <Gallery galleryImages={galleryImages} />}
        </CustomSection>
      </CustomContainer>
    </section>
  );
};

export default GallerySection;
