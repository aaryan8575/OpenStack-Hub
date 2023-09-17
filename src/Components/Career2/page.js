import React from 'react';
import Form from './Form';
import TextData from './TextData';

const Career = () => {
  return (
    <div className="bg-[rgb(0,0,0)] p-3 md:p-16 lg:p-28 xl:p-40 2xl:p-60 flex flex-wrap-reverse justify-between">
      <div className=" basis-[1440px] flex-[2]">
        <TextData />
      </div>
      {/* <div className="min-w-[480px]"> */}
      <div className="flex-1 basis-[390px] max-w-[700px] mb-14">
        {/* <div> */}
        <Form />
      </div>
    </div>
  );
};

export default Career;
