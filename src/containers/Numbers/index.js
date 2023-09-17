import TextGradient from '@/components/TextGradient';
import React from 'react';

export default function index() {
  const textContent = {
    title: 'Persistence is',
    subTitle: 'our motto',
    description:
      'Through dedication and perseverance, we honed our craft and embarked on numerous projects that challenged us to innovate, adapt, and evolve. With each new endeavor, we delved deep into the intricacies of design and functionality, consistently pushing the envelope to create solutions that not only met but exceeded expectations. From our inaugural project that set the stage for what was to come, to the collaborations that forged lasting partnerships, we continued to elevate our standards and redefine industry norms.',
    section3: [
      {
        name: 'developers',
        value: '17',
      },
      {
        name: 'Site of Day',
        value: '3',
      },
      {
        name: 'Projects',
        value: '8+',
      },
      {
        name: 'Dedicated',
        value: '99%',
      },
    ],
  };

  return (
    <section>
      <div className="grid md:grid-cols-[40%_1fr] gap-10 justify-center items-center border-b border-neutral-50 py-10">
        <div className=" md:min-w-[250px] lg:min-w-[400px]">
          <h2>{textContent.title}</h2>
          <h5>{textContent.subTitle}</h5>
        </div>

        <div>
          <p>{textContent.description}</p>
        </div>
      </div>
      <div className="py-10 grid grid-cols-2 md:grid-cols-4">
        {textContent.section3.map((obj, index) => {
          return (
            <div key={index} className="flex flex-col items-center p-4">
              <h1>
                <TextGradient className="p-3">{obj.value}</TextGradient>
              </h1>
              <h5 className="capitalize">{obj.name}</h5>
            </div>
          );
        })}
      </div>
    </section>
  );
}
