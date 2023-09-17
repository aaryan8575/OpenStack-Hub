import Image from 'next/image';
import React from 'react';
import Navigate from '../../../public/assets/icons/pagenavigateicon.svg';
import WorkComponent from '../WorkComponent';
import WorkStyle from '../Works/works.module.css';

const data = [
  {
    id: '1',
    src: 'Projects',
    image:
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/stackhub.jpg?updatedAt=1691385279845',
    text: 'StackHub',
    svg: <Navigate />,
  },
  {
    id: '1',
    image:
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/stackhub.jpg?updatedAt=1691385279845',
    text: 'StackHub',
    svg: <Navigate />,
  },
];

const work = [
  {
    id: '1',
    src: 'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/projectwork.png?updatedAt=1691385279209',
    icon: <Navigate />,
    richttext: 'StackHub',
    discription:
      'Offer sophisticated data mining capabilities that allow users to extract valuable insights from large and complex datasets. This could include algorithms for clustering, association analysis, and text mining.',
    btntext: 'SAC technology',
  },
  {
    id: '2',
    src: 'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/projectwork.png?updatedAt=1691385279209',
    icon: <Navigate />,
    richttext: 'StackHub',
    discription:
      'Offer sophisticated data mining capabilities that allow users to extract valuable insights from large and complex datasets. This could include algorithms for clustering, association analysis, and text mining.',
    btntext: 'SAC technology',
  },
];

const Project = () => {
  return (
    <div className={WorkStyle.WorkPage}>
      <div className={WorkStyle.Page}>
        <div className={WorkStyle.MainSection}>
          <div className={WorkStyle.Text}>
            <h3>Our Works</h3>
            <p className={WorkStyle.Description}>
              Explore our accomplished live projects here, showcasing successful
              deliveries and exceptional outcomes. These endeavours highlight
              our commitment to excellence and effective execution.
            </p>
          </div>
          <div className={WorkStyle.ImageSection}>
            <Image
              src="https://ik.imagekit.io/9o5td0iez/AUCO-WEB/works.png?updatedAt=1691385282784"
              alt="Picture of the author"
              width={401}
              height={437}
              className={WorkStyle.ProjectImage}
            />
          </div>
        </div>

        {/* Component use */}
        <div className={WorkStyle.WorkComponents}>
          <WorkComponent work={work} />
        </div>
      </div>

      <div className={WorkStyle.ProjectInfo}>
        {data.map((val) => {
          return (
            <div key={val.id} className="relative">
              <Image
                src={val.image}
                alt="Picture of the author"
                width={401}
                height={437}
                className={WorkStyle.ImageProject}
              />
              <div className={WorkStyle.ProjectText}>
                <h6 className="px-2">{val.text}</h6>
                <div className="w-4 h-4">{val.svg}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
