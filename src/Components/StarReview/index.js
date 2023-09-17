import React from 'react';

const StarReview = ({ data }) => {
  return (
    <div className="flex gap-2">
      {data.map((val) => (
        <div className="w-7 h-7" key={val.id}>
          {val.svg}
        </div>
      ))}
    </div>
  );
};

export default StarReview;
