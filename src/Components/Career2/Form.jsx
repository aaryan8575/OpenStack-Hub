import React from 'react';
import Calandar from '../../../public/assets/icons/calander.svg';
import Clock from '../../../public/assets/icons/clock.svg';
import Location from '../../../public/assets/icons/location.svg';
import './Form.css';
import Button from '@/components/Button';
export default function Form() {
  return (
    <div className="rounded-xl overflow-hidden form-container">
      <div
        className="bg-error flex justify-between flex-wrap py-3 md:py-8 "
        style={{
          backgroundImage: 'linear-gradient(136deg, #90F 0%, #3F0EFA 100%) ',
        }}
      >
        <div className="flex items-center justify-center gap-3 p-3 flex-1 basis-36">
          <div>
            <Calandar />
          </div>
          <p>Full Time </p>
        </div>
        <div className="flex items-center justify-center gap-3 p-3 flex-1 basis-40">
          <div>
            <Clock />
          </div>
          do
          <p>9:00 - 18:00 </p>
        </div>
        <div className="flex items-center justify-center gap-3 p-3 flex-1 basis-36">
          <div>
            <Location />
          </div>
          <p>Ahmedabad </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-10 p-3 md:p-12">
        <p>NAME</p>
        <div className="flex justify-between flex-wrap">
          <input
            type="text"
            placeholder={'First Name'}
            className=" flex-1 basis-6"
          ></input>
          <input
            type="text"
            placeholder={'Last Name'}
            className=" flex-1 basis-6"
          ></input>
        </div>
        <p>EMAIL</p>
        <input type="email" placeholder={'Your email'}></input>

        <p>PHONE</p>
        <input type="tel" placeholder={'Your Mobile Number'}></input>
        <Button title={'APPLY NOW'}></Button>
      </div>
    </div>
  );
}
