import React from 'react';
import PhotoBanner from '@/components/PhotoBanner';
import WorkDetails from '@/containers/WorkDetails';
import Produt from '@/containers/Product';
import Cta from '@/components/Cta';
import Faq from '@/components/Faq';

const TextData = {
  auco: {
    title: ' AuCo: Catalyzing Network’s Evolution',
    description:
      'A digital business card app that helps you to expand your network seamlessly with zero carbon footprints.',
    details: [
      {
        id: 1,
        title: 'Product Description',
        description:
          'AuCo is a new era networking app that provides its users the opportunities to connect with a digital business card reflecting uniqueness and brand personality. Through a simple tap, quick scan, or shared link, you can instantly provide your details, making your information readily available, accessible, and easy to share with anyone, anywhere, and at any time.',
      },
    ],
    workImages: [
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Group%2034468-2.png',
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Group%2034468-2.png',
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Group%2034468-2.png',
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Group%2034468-2.png',
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Group%2034468-2.png',
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Group%2034468-2.png',
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Group%2034468-2.png',
    ],
  },
  foodboss: {
    title: 'FoodBoss: Grocery ka Boss',
    description:
      'Grocery shopping became easy with FoodBoss-Grocery ka Boss. Either you are a seller or a buyer, this app makes grocery trading convenient for you.',
    details: [
      {
        id: 1,
        title: 'Product Description',
        description:
          'Our XYZ game console is a premium game console that offers exceptional performance, stunning graphics and immersive sound. Its sleek design and user-friendly interface make it a great addition to any gaming system. Whether you are a casual gamer or a die-hard enthusiast, the XYZ game console is guaranteed to provide you with hours of entertainment and excitement.',
      },
    ],
    workImages: [
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/unnamed.webp',
      'https://ik.imagekit.io/wn0w23bqx/workDatails.png?updatedAt=1691641658',
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/unnamed.webp',
      'https://ik.imagekit.io/wn0w23bqx/workDatails.png?updatedAt=1691641658',
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/unnamed.webp',
      'https://ik.imagekit.io/wn0w23bqx/workDatails.png?updatedAt=1691641658',
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/unnamed.webp',
    ],
  },
  'better-that': {
    title: 'Better That: To do better with',
    description:
      'Better That is an Australia’s leading e-commerce merchandise shopping destination on a mission to ‘do better’ by everyone.',
    details: [
      {
        id: 1,
        title: 'Product Description ',
        description:
          'Our XYZ game console is a premium game console that offers exceptional performance, stunning graphics and immersive sound. Its sleek design and user-friendly interface make it a great addition to any gaming system. Whether you are a casual gamer or a die-hard enthusiast, the XYZ game console is guaranteed to provide you with hours of entertainment and excitement.',
      },
    ],
    workImages: [
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Rectangle%2032.png',
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Rectangle%2032.png',
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Rectangle%2032.png',
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Rectangle%2032.png',
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Rectangle%2032.png',
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Rectangle%2032.png',
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Rectangle%2032.png',
    ],
  },
};
const faqData = {
  title: 'We&apos;re The Best And We Can Explain Why',
  description:
    'The Smart Sales Assistant can also provide insights into customer behavior and preferences, allowing you to optimize your marketing and sales strategies.',
};
const Page = ({ params }) => {
  return (
    <div>
      <PhotoBanner
        title={TextData[`${params.slug}`].title}
        descryption={TextData[`${params.slug}`].description}
        image={
          'https://ik.imagekit.io/wn0w23bqx/Banner.png?updatedAt=1691668218299s'
        }
      />
      {/* <WorkDetails data={TextData[`${params.slug}`]} /> */}
      <Produt slugid={`${params.slug}`} />
      <Cta
        heading="Elevate Your Business with Exceptional IT Services"
        description="We are here to simplify the complex ideas to simple by providing you with smooth technological solutions that would enlarge your success."
      />
      <Faq data={faqData} />
    </div>
  );
};

export default Page;
