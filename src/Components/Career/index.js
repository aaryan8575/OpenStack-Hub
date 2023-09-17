import React from 'react';
import Teams from '../../../public/assets/icons/joinas.svg';
import Circle from '../../../public/assets/icons/GroupCircle.svg';
import Teamimage from '../../../public/assets/icons/sofia.svg';
import StarReview from '../StarReview/index';
import Star from '../../../public/assets/icons/star.svg';

import teamstyle from '../Career/career.module.css';

import Positions from '../../containers/Positions';

const data = [
  {
    id: '1',
    svg: <Star />,
  },
  {
    id: '2',
    svg: <Star />,
  },
  {
    id: '3',
    svg: <Star />,
  },
  {
    id: '4',
    svg: <Star />,
  },
  {
    id: '5',
    svg: <Star />,
  },
];

const Career = () => {
  return (
    <>
      <section className={teamstyle.parent}>
        <div className="relative">
          <div className={teamstyle.main}>
            <div className={teamstyle.content}>
              <h2 className="py-6">We Invite New Workers To The Team!</h2>
              <p>
                Predictive analytics is the practice of using data, statistical
                algorithms, and machine learning techniques to identify the
                likelihood of future outcomes based on historical data. With
                predictive analytics, businesses can to improve performance.
              </p>
              <hr className={teamstyle.line} />
              <div className={teamstyle.review}>
                <div className={teamstyle.starpage}>
                  <StarReview data={data} />

                  <div className={teamstyle.basetext}>
                    Based on <span className="text-neutral-300">10,000+ </span>
                    reviews
                  </div>
                </div>
                <div className={teamstyle.teamsvgs}>
                  <Teamimage className="w-20 h-20 min-h-0 min-w-0 absolute top-0 left-0" />
                  <Teamimage className="w-20 h-20 min-h-0 min-w-0 absolute top-0 left-10" />
                  <Teamimage className="w-20 h-20 min-h-0 min-w-0 absolute top-0 left-20" />
                  <Teamimage className="min-h-0 min-w-0 relative w-20 left-3" />
                </div>
              </div>
            </div>
            <div className={teamstyle.backsvg}>
              <Teams className={teamstyle.svg} />
              <Circle className={teamstyle.Circle} />
              <div className={teamstyle.Circletextpage}>
                <h2 className={teamstyle.text}>9.9K </h2>
                <span className={teamstyle.text2}>Joined Our Team</span>
              </div>
            </div>
          </div>
          <div className={teamstyle.teampage}>
            <div className={teamstyle.header}>
              <h3 className={teamstyle.richtext}>
                Join The Intelligent Analytics Suite Team
              </h3>
              <p className={teamstyle.description}>
                Are you ready to take your career to the next level and be part
                of a cutting-edge technology revolution? Look no further than
                the Intelligent Analytics Suite team!
              </p>
            </div>
          </div>
        </div>
        <Positions />
      </section>
    </>
  );
};

export default Career;
