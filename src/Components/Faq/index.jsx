import React from 'react';
import Styles from './faq.module.css';
import FaqQuestion from '../FaqQuestion/FaqQuestion.module.css';

const LeftQuestions = [
  {
    id: '1',
    title: 'What specialities does Openstack Hub provide?',
    descryption:
      'Openstack Hub offers various features inclusive of planned execution, efficiency, performance, reliability, timely delivery etc. which plays a significant role in client’s satisfaction.',
  },
  {
    id: '2',
    title: 'How does the Openstack Hub team function?',
    descryption:
      'Openstack Hub team functions as a coordinated unit within our IT company. We operate in a well-defined structure and teamwork approach. The approach involves assembling the team, followed by wireframing, prototyping, and UI/UX designing. Subsequently, product road mapping is conducted, leading to coding, reviews, and merges, accompanied by daily scrum calls and weekly demos. The process includes continuous integration and iterative delivery, along with the integration of quality assurance. The project culminates in a launch with support maintenance.',
  },
  {
    id: '3',
    title:
      'How do we prioritize building strong relationships with our clients? ',
    descryption:
      'As an IT service company our main motto is building strong relationships with the clients. We establish partnerships built on trust and mutual growth by prioritizing clear communication, adopting a collaborative approach, actively listening and understanding, ensuring customer satisfaction, maintaining quality assurance, facilitating regular interaction, and offering post-project support.',
  },
];
const RightQuestions = [
  {
    id: '1',
    title: 'What industries can benefit from the Openstack Hub?',
    descryption:
      'Openstack Hub offers versatile solutions that serve a wide area in industries and sectors. The industries and sectors which can benefit from the openstack hub are fintech, e-commerce, lifestyle, ed-tech, social networking, gamify, healthcare tech, and sports tech. ',
  },
  {
    id: '2',
    title: 'How do we approach each project with a personalized strategy?',
    descryption:
      'We approach each project at openstack hub with a personalized strategy by first understanding our client’s unique goals and challenges. Our team customize solutions to their specific needs to prepare a proper plan, clear communication and collaboration ensuring alignment throughout the process. We conduct thorough research to address industry-specific variation, while agile methodologies allow us to adapt and refine our strategy as needed. We deliver outcomes that resonate with their vision and drive success.',
  },
  {
    id: '3',
    title: 'How do we manage project timelines and ensure timely delivery',
    descryption:
      'Time-oriented is the fundamental principle of our company. Through careful planning, agile project management, and qualified project managers, OpenStack Hub guarantees on-time project delivery. We avoid overcommitment with our precise scope definition and accurate time predictions. We stay in close contact with our customers, fostering teamwork and reducing surprises. Early risk identification helps us avoid unexpected delays. The process is further accelerated through quality assurance checks, resource allocation, and client feedback loops. We deliver dependable IT solutions by taking a proactive approach and maintaining ongoing monitoring.',
  },
];
const Faq = ({ data }) => {
  return (
    <section className={Styles.main}>
      <div className={Styles.content}>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
      </div>
      <div className={Styles.questionsWrapper}>
        <div className={Styles.questions}>
          <FaqQuestion Questions={LeftQuestions} />
        </div>
        <div className={Styles.questions}>
          <FaqQuestion Questions={RightQuestions} />
        </div>
      </div>
    </section>
  );
};

export default Faq;
