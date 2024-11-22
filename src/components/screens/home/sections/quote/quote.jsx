import CustomContainer from "@/components/ui/custom_container/custom_container";
import React from "react";
import styles from "./quote.module.scss";
import { Image } from "react-bootstrap";

const QuoteSection = () => {
  return (
    <section className={styles.QuoteSection}>
      <CustomContainer>
        <div className={styles.cont}>
          <div className={styles.flowers}>
            <Image src="/assets/svg/floral_left.svg" alt="floral" />
            <Image src="/assets/svg/floral_right.svg" alt="floral" />
          </div>

          <div>
            <p className={`${styles.q1}`}>
              &quot;We’re thrilled to invite you to our wedding! Your presence
              will mean the world to us as we celebrate love and togetherness.
              Save the date for this special moment!&quot;
            </p>
            <p className={styles.q2}>
              With great joy, we invite you to celebrate the beginning of our
              new journey together! Your presence will add love and happiness to
              our special day. Join us as we exchange vows and create memories
              to cherish forever. Please save the date, and we look forward to
              sharing this beautiful occasion with you. Details await!
            </p>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default QuoteSection;
