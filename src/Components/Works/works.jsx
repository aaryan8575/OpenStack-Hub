import React from 'react';
import Image from 'next/image';
import '@/Components/Works/works.css';

const works = ({ sources }) => {
  return (
    <div className="main">
      <div className="gridbox px-container py-container">
        {sources &&
          sources.length > 0 &&
          sources.map((element, index) => (
            <div key={index} className="bg-secondary2 rounded ">
              <Image
                className="w-[500px]"
                src={`./assets/images/${element[0]}`} width={1080} height={1090}
              />
              <div className="flex justify-center pb-3">{element[1]}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default works;
