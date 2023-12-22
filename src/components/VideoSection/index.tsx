import React from "react";
import Container from "@/components/Container";
import styles from "./VideoSection.module.css";

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
function VideoSection() {
  return (
    <section>
      <Container className={styles.videoContainer}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video className={styles.videoContent} controls>
          <source src="video/good-city.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Container>
    </section>
  );
}

export default VideoSection;
