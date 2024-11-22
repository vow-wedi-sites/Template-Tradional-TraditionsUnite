import React from "react";
import styles from "./events.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomSection from "@/components/ui/custom_section/custom_section";
import { Image } from "react-bootstrap";
import fonts from "@/styles/fonts";
import { GeoAltFill } from "react-bootstrap-icons";
import Link from "next/link";

const EventsSection = () => {
  const events = [
    {
      name: "Engagement",
      place: "MSR Mahal, Chennai",
      time: "5 PM to 11 PM",
      text: "Two souls, one journey! 💍 Sidharth and Hasini are set to exchange rings and promises soon. Join us in celebrating their beautiful beginning and love-filled future! ❤️",
      img: "/assets/svg/couple.svg",
    },
    {
      name: "Reception",
      place: "MSR Mahal, Chennai",
      time: "5 PM to 11 PM",
      text: "The celebration continues! 🎉 Sidharth and Hasini invite you to their grand reception as they begin their new chapter together. Join us for an evening of love, joy, and blessings! ❤️",
      img: "/assets/svg/reception.svg",
    },
    {
      name: "The Wedding..!!",
      place: "MSR Mahal, Chennai",
      time: "5 PM to 11 PM",
      text: "The big day is here! 🎊 Sidharth and Hasini are getting married, and it’s going to be magical! 💍✨ Join us to celebrate love, laughter, and their happily ever after! ❤️",
      img: "/assets/svg/engagement.svg",
    },
  ];

  return (
    <section id="events" className={styles.EventsSection}>
        <div className={styles.bg}></div>
      <CustomContainer>
        <CustomSection head="Wedding Events" variant={2}>
          <div className={styles.wrap}>
            {events.map((event) => {
              return (
                <div className={styles.event} key={event.name}>
                  <div className={styles.img} data-aos='fade-right'>
                    <Image src={event.img} alt={event.name} />
                  </div>
                  <div className={styles.text} data-aos='fade-left'>
                    <h1 className={fonts.rouge_Script}>{event.name}</h1>
                    <p>{event.place}</p>
                    <p>{event.time}</p>
                    <span className={fonts.rouge_Script}>{event.text}</span>
                    <br />
                    <br />
                    <Link href="#">
                      <button>
                        Get Location <GeoAltFill />
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </CustomSection>
      </CustomContainer>
    </section>
  );
};

export default EventsSection;
