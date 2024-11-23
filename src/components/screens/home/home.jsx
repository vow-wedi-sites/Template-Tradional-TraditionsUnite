import React from "react";
import styles from "./home.module.scss";
import HeroSection from "./sections/hero/hero";
import QuoteSection from "./sections/quote/quote";
import CoupleSection from "./sections/couple/couple";
import GallerySection from "./sections/gallery/gallery";
import EventsSection from "./sections/events/events";
import RSVP_Section from "./sections/rsvp/rsvp";

const HomeScreen = () => {
  return (
    <main className={styles.home}>
      <HeroSection />
      <QuoteSection />
      <CoupleSection />
      <EventsSection />
      <GallerySection />
      <RSVP_Section />
    </main>
  );
};

export default HomeScreen;
