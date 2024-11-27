import React from "react";
import styles from "./events.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomSection from "@/components/ui/custom_section/custom_section";
import { Image } from "react-bootstrap";
import fonts from "@/styles/fonts";
import { GeoAltFill } from "react-bootstrap-icons";
import Link from "next/link";
import EVENT_DETAILS from "@/constants/event_details";

const EventsSection = () => {
  const events = EVENT_DETAILS.all_events

  return (
    <section id="events" className={styles.EventsSection}>
      <div className={styles.bg}></div>
      <CustomContainer>
        <CustomSection head="Wedding Events" variant={2}>
          <div className={styles.wrap}>
            {events.map((event) => {
              return (
                <div className={styles.event} key={event.name}>
                  <div className={styles.img} data-aos="fade-right">
                    <Image src={event.img} alt={event.name} />
                  </div>
                  <div className={styles.text} data-aos="fade-left">
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
