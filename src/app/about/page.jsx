import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.acontainer}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>A network</h1>
          <h2 className={styles.imgDesc}>
            Created for all college students
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
          Welcome to our college student-led platform, your ultimate hub for promoting 
          college events, hackathons, syllabus information, and fostering a sense of 
           unity among students from different colleges.
           We are a passionate group of students committed to enhancing your college experience.
            <br />
            <br />
            Our mission is to provide a seamless resource where you can discover 
            exciting upcoming events, participate in thrilling hackathons, access 
            your syllabus effortlessly, and connect with a community that shares your
            academic journey.additionally, we're dedicated to bridging the gap between
            institutions and creating a powerful union of young minds.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
           our platform, you can engage with fellow students, share ideas, collaborate 
           on projects, and collectively shape an inspiring community that transcends
           college boundaries. Join us in building a stronger, interconnected 
           student community and navigate the exciting world of college life together!
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
