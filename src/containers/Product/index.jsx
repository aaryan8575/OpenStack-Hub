import FaqQuestion from '@/components/FaqQuestion';
import React from 'react';
import Image from 'next/image';
import Slider from './slider';


const data = {
  auco: {
    id: 1,
    title: ' AuCo: Catalyzing Network’s Evolution',
    description:
      'Allows User to endlessly make connections and expand networking by sharing their business cards digitally. Be it conferences, meetings, or chance encounters, users will never face the difficulty of running out of cards.',
    workImages: [
      'https://ik.imagekit.io/wn0w23bqx/workDatails.png?updatedAt=1691641658',
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Group%2034468-2.png',
      'https://ik.imagekit.io/wn0w23bqx/workDatails.png?updatedAt=1691641658',
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Group%2034468-2.png',
      'https://ik.imagekit.io/wn0w23bqx/workDatails.png?updatedAt=1691641658',
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Group%2034468-2.png',
      'https://ik.imagekit.io/wn0w23bqx/workDatails.png?updatedAt=1691641658',
    ],
    Features: [
      {
        id: '1',
        title: 'Features',
        descryption:
          'Get Connected with an Infinite number of people without running out of your cards. AuCo personalized business cards are not just adaptable but also easily shareable providing you multiple sharing options – QR code, link, NFC and Social Media.',
      },
      {
        id: '2',
        title: 'How does the Intelligent Analytics Suite work?',
        descryption:
          'Liberate yourself from all the design concerns by tailoring your personalized business cards swiftly with our predesigned templates. ',
      },
      {
        id: '3',
        title: 'What types of data can the IAS analyze?',
        descryption:
          'Research health shows 88% of business cards handed out are thrown out in less than a week. By switching to digitalized cards, you can contribute towards an eco-friendly future as they can easily be upgraded as well as deleted leaving behind zero carbon footprint. ',
      },
    ],
  },
  foodboss: {
    id: 2,
    title: 'Food Boss Details:',
    description:
      'Offers easy shopping options that allows user to shop online from their nearest stores. Be it groceries, home essentials, pet care or gardening, this app take cares of each of the needs and requirements of its customers.',
    workImages: [
      'https://ik.imagekit.io/wn0w23bqx/workDatails.png?updatedAt=1691641658',
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Group%2034468-2.png',
      'https://ik.imagekit.io/wn0w23bqx/workDatails.png?updatedAt=1691641658',
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Group%2034468-2.png',
      'https://ik.imagekit.io/wn0w23bqx/workDatails.png?updatedAt=1691641658',
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Group%2034468-2.png',
      'https://ik.imagekit.io/wn0w23bqx/workDatails.png?updatedAt=1691641658',
    ],
    Features: [
      {
        id: '1',
        title: 'Features',
        descryption:
          'Get Connected with an Infinite number of people without running out of your cards. AuCo personalized business cards are not just adaptable but also easily shareable providing you multiple sharing options – QR code, link, NFC and Social Media.',
      },
      {
        id: '2',
        title: 'How does the Intelligent Analytics Suite work?',
        descryption:
          'Liberate yourself from all the design concerns by tailoring your personalized business cards swiftly with our predesigned templates. ',
      },
      {
        id: '3',
        title: 'What types of data can the IAS analyze?',
        descryption:
          'Research health shows 88% of business cards handed out are thrown out in less than a week. By switching to digitalized cards, you can contribute towards an eco-friendly future as they can easily be upgraded as well as deleted leaving behind zero carbon footprint. ',
      },
    ],
  },
  'better-that': {
    id: 2,
    title: 'Better That Details',
    description:
      'Offers valuable and trendy merchandise shopping options that allows users to hand-pick outfits from a huge collection that too at users’ convenience. What sets them apart is their social deeds of donation for good cause and societal benefits.',
    workImages: [
      'https://ik.imagekit.io/wn0w23bqx/workDatails.png?updatedAt=1691641658',
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Group%2034468-2.png',
      'https://ik.imagekit.io/wn0w23bqx/workDatails.png?updatedAt=1691641658',
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Group%2034468-2.png',
      'https://ik.imagekit.io/wn0w23bqx/workDatails.png?updatedAt=1691641658',
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Group%2034468-2.png',
      'https://ik.imagekit.io/wn0w23bqx/workDatails.png?updatedAt=1691641658',
    ],
    Features: [
      {
        id: '1',
        title: 'Features',
        descryption:
          'Get Connected with an Infinite number of people without running out of your cards. AuCo personalized business cards are not just adaptable but also easily shareable providing you multiple sharing options – QR code, link, NFC and Social Media.',
      },
      {
        id: '2',
        title: 'How does the Intelligent Analytics Suite work?',
        descryption:
          'Liberate yourself from all the design concerns by tailoring your personalized business cards swiftly with our predesigned templates. ',
      },
      {
        id: '3',
        title: 'What types of data can the IAS analyze?',
        descryption:
          'Research health shows 88% of business cards handed out are thrown out in less than a week. By switching to digitalized cards, you can contribute towards an eco-friendly future as they can easily be upgraded as well as deleted leaving behind zero carbon footprint. ',
      },
    ],
  },
};
export default function Produt({ slugid }) {
  return (
    <section className="md:flex lg:flex-row lg:gap-16 lg:mt-40 mb-24 items-center  md:flex-col ">
      <div className="my-10 md:w-[40%] ">
        <div className=" relative w-full aspect-square rounded-xl overflow-hidden ">
          <Slider images={data[slugid].workImages} />
        </div>
      </div>

      <div className="md:w-[60%]">
        <h4 className="pb-4">{data[slugid].title}</h4>
        <p className="pb-8">{data[slugid].description}</p>

        <FaqQuestion Questions={data[slugid].Features} />
      </div>
    </section>
  );
}
