'use client';
import React from 'react';
import { Formik, Form, Field } from 'formik';
import Calandar from '../../../public/assets/icons/calander.svg';
import Clock from '../../../public/assets/icons/clock.svg';
import Location from '../../../public/assets/icons/location.svg';
import Button from '@/components/Button';
import styles from './style.module.css';

export default function Forms({ components }) {
  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
  };

  return (
    <div className={styles.main}>
      <div className="">
        <div className={`${styles.leftContent} bgGradient `}>
          <div className={styles.text1}>
            <div>
              <Calandar width="15" height="15" />
            </div>
            <p className="body2">Full Time </p>
          </div>
          <div className={styles.text2}>
            <div>
              <Clock width="15" height="15" />
            </div>
            <p className="body2">9:00 - 18:00 </p>
          </div>
          <div className={styles.text1}>
            <div>
              <Location width="15" height="15" />
            </div>
            <p className="body2">Ahmedabad </p>
          </div>
        </div>
        <div className={styles.formContainer}>
          <Formik
            initialValues={{
              name: '',
              email: '',
              textarea: '',
              phone: '',
            }}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col gap-4">
              {components.map((data, index) => {
                if (data.field === 'button') {
                  return (
                    <>
                      <Button className="w-full" varient="primary">
                        Apply Now
                      </Button>
                    </>
                  );
                }
                if (data.field === 'textarea') {
                  return (
                    <div key={index}>
                      <p className="py-2">{data.name}</p>
                      <Field
                        key={index}
                        as="textarea"
                        className="form"
                        {...data.additionalProperties}
                        name={data.field}
                      >
                        {data.value}
                      </Field>
                    </div>
                  );
                }
                return (
                  <div key={index}>
                    <p className="py-2">{data.name}</p>
                    <Field
                      className="form"
                      type={data.field}
                      placeholder={data.value}
                      name={data.field}
                    />
                  </div>
                );
              })}
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
