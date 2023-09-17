import React from 'react';
import Image from 'next/image';
import DarkBullet from 'public/assets/icons/DarkBullet.svg';
import SectionDescription from '@/components/SectionDetail';

const DigitalServices = () => {
  const digitalCards = [
    {
      id: 1,
      title: 'web development ',
      subTitle:
        'Create dynamic and engaging websites using the latest technologies to enhance user experience and drive online presence.',
    },
    {
      id: 2,
      title: 'App development ',
      subTitle:
        'Build innovative and user-friendly mobile applications for iOS and Android platforms to cater to the growing demand for on-the-go solutions.     ',
    },
    {
      id: 3,
      title: 'Custom Software',
      subTitle:
        'Experience the future of IT solutions with our customized services. Unlock unique efficiency and growth with technology thats as unique as your vision.',
    },
    {
      id: 4,
      title: 'UI/UX',
      subTitle:
        'Take advantage of our excellent UI/UX design services to improve your digital products. Our skilled designers create user interfaces that are seamless and engaging so as to increase customer retention. ',
    },
    {
      id: 5,
      title: 'IT Consultation',
      subTitle:
        'Establish a robust online store, optimize product listings, and implement secure payment gateways to enable seamless buying and selling experiences for customers.',
    },
  ];

  return (
    <section className="md:py-20 py-10 flex flex-col gap-20">
      <SectionDescription
        heading="Flexible IT Services
        For Your Needs"
        description="From pixel-perfect layouts to intuitive navigation, we transform visions into virtual realities. Let's sculpt your online presence together."
      />
      <div className="lg:flex ">
        <div className="lg:w-1/2 relative">
          <div className="flex justify-center py-3 lg:m-9 xl:m-14 sticky top-28 left-0">
            <div className="relative w-[250px] h-[250px] ">
              <Image
                src="/assets/gifs/services.gif"
                fill
                sizes="(max-width: 768px) 100vw,30vw"
                style={{ objectFit: 'cover' }}
                alt="gif for services"
              />
              {/* <video
                  method="dialog"
                  className="modal-box relative "
                  height={850}
                  width={850}
                  controls
                >
                  <source src="/assets/video/video1.mp4" type="video/mp4" />
                </video> */}
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 lg:border-l-2 lg:flex lg:flex-col lg:justify-center lg:items-center lg:border-borderColor">
          {digitalCards.map((data, index) => {
            return (
              <>
                <div className="relative p-7 md:my-6 2xl:p-10 my-5  lg:m-9 xl:m-14 border-[1px] rounded-xl border-borderColor bg-primary3">
                  <div className="absolute top-0 lg:left-[-52px] xl:left-[-72px] hidden lg:block  w-3 aspect-square ">
                    <DarkBullet />
                  </div>

                  <div className="relative w-12 aspect-square mb-1">
                    <Image
                      src="https://ik.imagekit.io/9o5td0iez/AUCO-WEB/BigBulletPoint.svg?updatedAt=1691397337886"
                      fill
                      alt=""
                      sizes="10vw"
                    ></Image>
                    <div className="absolute top-0 left-0 w-full aspect-square flex justify-center items-center">
                      <h5>{index + 1}</h5>
                    </div>
                  </div>
                  <div>
                    <h5 className="py-2 lg:py-4 xl:py-8 ">{data.title} </h5>
                    <p>{data.subTitle}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DigitalServices;
