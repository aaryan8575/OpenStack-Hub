import React from 'react';
import BulletPoint from '@/public/assets/icons/bulletPoint.svg';
import Forms from '@/components/Form/Form';

const qualifications = [
  'Bachelors degree in Computer Science, Software Engineering, or a related field (or equivalent work experience).',
  'At least 4 years of professional experience in software development, with a focus on JavaScript frameworks like React.js, Node.js, React Native, or Flutter.',
  'Strong expertise in React.js and its ecosystem (Redux, React Router, etc.) for building robust web applications.',
  'Proficiency in server-side development using Node.js and Express.js for creating scalable APIs and backend services.',
  'Experience with mobile app development using React Native, Flutter, or other JavaScript-based frameworks.',
  'Solid understanding of web technologies such as HTML, CSS, and RESTful APIs.',
  'Strong knowledge of version control systems (e.g., Git) and agile development methodologies.',
  'Excellent problem-solving and analytical skills, with the ability to troubleshoot complex technical issues.',
  'Previous experience in team management or leadership roles is highly desirable.',
  'Strong communication skills, with the ability to effectively collaborate with cross-functional teams and stakeholders.',
  'If you are a highly motivated individual with a passion for JavaScript frameworks, team management, and delivering high-quality software solutions, we would love to have you on board. Join our team and be part of a dynamic and innovative environment where you can make a significant impact. Apply now and take your career to new heights as a Senior Developer!',
];

const responsibilities = [
  'Lead and manage a team of developers, providing technical guidance, mentorship, and support throughout the software development lifecycle.',
  'Design, develop, and maintain web and mobile applications using JavaScript frameworks such as React.js, Node.js, React Native, or Flutter.',
  'Collaborate with cross-functional teams to gather requirements, analyze user needs, and develop scalable and high-quality software solutions.',
  'Ensure the performance, reliability, and security of the applications through effective code reviews, testing, and optimization techniques.',
  'Stay up-to-date with the latest industry trends and technologies, and proactively suggest and implement improvements to existing systems.',
  'Participate in architectural discussions and contribute to the overall technical strategy of the projects.',
  'Collaborate with UI/UX designers to create intuitive and visually appealing user interfaces.',
  'Troubleshoot and resolve technical issues, providing guidance and support to the team as needed.',
  'Conduct knowledge sharing sessions and provide training to team members to enhance their technical skills.',
  'Maintain documentation related to development processes, code, and system architecture.',
];

const otherBenefits = [
  '  5 day working and flexible culture.',
  'Leave Encashment',
  'Paid Time Off',
  'Paid Sick Time',
];

export default function TextData() {
  return (
    <div className="px-container lg:flex lg:flex-row-reverse pt-10">
      <div className="lg:ml-10 xl:ml-20 lg:relative">
        <div className="lg:sticky py-5 sm:py-10 lg:py-12 lg:top-12 lg:right-0">
          <Forms
            components={[
              { name: 'NAME', field: 'text', value: 'Your name' },
              { name: 'EMAIL', field: 'email', value: 'Your Email' },
              { name: 'PHONE', field: 'tel', value: 'Your Phone Number' },
              { name: 'Apply Now', field: 'button', value: 'Apply Now' },
            ]}
          ></Forms>
        </div>
      </div>
      <div>
        <h3 className="py-12">Job Description</h3>
        <div className="pb-10">
          <p>
            We are seeking a highly skilled and experienced senior developer to
            join our team and contribute to the success of our software
            projects. As a senior developer, you will play a crucial role in
            team management and the development of web and mobile applications
            using JavaScript frameworks such as React.js, Node.js, React Native,
            or Flutter. If you are a motivated and talented professional with
            expertise in these technologies, we would love to hear from you.
          </p>
        </div>
        <h3 className="py-12">Job Responsibilities</h3>
        <div>
          {responsibilities.map((responsibility, index) => (
            <div key={index} className="flex items-start gap-3 pl-3">
              <div className="pt-2">
                <BulletPoint />
              </div>
              <p>{responsibility}</p>
            </div>
          ))}
        </div>
        <h3 className="py-12">Qualifications</h3>
        <div>
          {qualifications.map((point, index) => (
            <div key={index} className="flex items-start gap-3 pl-3">
              <div className="pt-2">
                <BulletPoint />
              </div>
              <p>{point}</p>
            </div>
          ))}
        </div>
        <h3 className="py-12">Other Benefits</h3>
        <div className="pb-24">
          {otherBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3 pl-3">
              <div className="pt-2">
                <BulletPoint />
              </div>
              <p>{benefit}</p>
            </div>
          ))}
          <p className="pt-9">
            If you are a highly motivated individual with a passion for
            JavaScript frameworks, team management, and delivering high-quality
            software solutions, we would love to have you on board. Join our
            team and be part of a dynamic and innovative environment where you
            can make a significant impact. Apply now and take your career to new
            heights as a Senior Developer! To apply, please submit your resume
            and cover letter outlining your relevant experience and why you are
            interested in joining The Special Character as a Sr. Full Stack
            Developer. We look forward to reviewing your application and
            exploring the possibilities of working together to make a meaningful
            impact in the Tech industry.
          </p>
        </div>
      </div>
    </div>
  );
}
