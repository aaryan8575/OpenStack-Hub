import React from 'react';
import Button from '../Button/index';
import styles from './contactform.module.css';

const Contact_form = () => {
  return (
    <div className={styles.contactform}>
      <div className={styles.main}>
        <h4 className={styles.text}>
          Contact Us If You Need
          <br />
          Our Support
        </h4>
        <p>
          If you&apos;re looking to make data-driven decisions and gain valuable
          insights into your business, then Intelligent Analytics Suite is the
          solution for you. With its advanced analytics capabilities, automation
          of manual tasks.
        </p>
        <hr className="my-2" />
        <div>
          <h5 className="my-3">Ahmedabad</h5>
          <p>
            B-604/605, Ganesh Glory 11 Jagatpur
            <br />
            Rd, Sarkhej - Gandhinagar Hwy, nr.
            <br />
            BSNL Office, Jagatpur, Ahmedabad,
            <br />
            Gujarat 382470
          </p>
          <p className="mt-3">076000 96432</p>
        </div>
      </div>
      <div className={styles.textarea}>
        <div className={styles.input}>
          <label>NAME</label>
        </div>
        <div className="pt-2">
          <input
            className=" w-11/12 "
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
          />
        </div>
        <div className={styles.input}>
          <label>EMAIL : </label>
        </div>
        <div className="pt-2">
          <input
            className="w-11/12 "
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
          />
        </div>
        <div className={styles.input}>
          <label>MESSAGE : </label>
        </div>
        <div className="pt-3 px-4">
          <textarea
            className={styles.textarea2}
            type="text"
            id="message"
            name="message"
            rows="5"
            placeholder="Your Text"
          />
        </div>
        <div className={styles.button}>
          <Button title="APPLY NOW" />
        </div>
      </div>
    </div>
  );
};

export default Contact_form;
