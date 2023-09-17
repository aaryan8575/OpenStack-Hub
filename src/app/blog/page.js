import React from 'react';
import PhotoBanner from '@/components/PhotoBanner';
import Blog from '@/components/Blog';

const blogData = [
  {
    id: 1,
    header: 'The Importance of Data Security in Saas',
    subheader:
      'By using machine learning algorithms and predictive analytics, business can automate decision-making processes. This can help businesses make faster and more accurate decisions, such as predicting failures or identifying the most profitable customers.',
    category: 'SDN technology',
    date: 'APRIL 18, 2023',
    image:
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Rectangle%2034%20(3).png?updatedAt=1692163717889',
  },
  {
    id: 2,
    header: 'Data security in SaaS',
    subheader:
      'By using machine learning algorithms and predictive analytics, business can automate decision-making processes. This can help businesses make faster and more accurate decisions, such as predicting failures or identifying the most profitable customers.',
    category: 'SDN technology',
    date: 'APRIL 18, 2023',
    image:
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Rectangle%2034.png?updatedAt=1692163717878',
  },
  {
    id: 3,
    header: ' security in SaaS',
    subheader:
      'By using machine learning algorithms and predictive analytics, business can automate decision-making processes. This can help businesses make faster and more accurate decisions, such as predicting failures or identifying the most profitable customers.',
    category: 'SDN technology',
    date: 'APRIL 18, 2023',
    image:
      'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/Rectangle%2034%20(1).png?updatedAt=1692163717956',
  },
  // {
  //   id: 4,
  //   header: 'Data  SaaS',
  //   subheader:
  //     'By using machine learning algorithms and predictive analytics, business can automate decision-making processes. This can help businesses make faster and more accurate decisions, such as predicting failures or identifying the most profitable customers.',
  //   category: 'SDN technology',
  //   date: 'APRIL 18, 2023',
  //   image:
  //     'https://ik.imagekit.io/wn0w23bqx/workDatails.png?updatedAt=1691641658221',
  // },
];

const BlogPage = () => {
  return (
    <div>
      <PhotoBanner
        title={'Blog Space!'}
        descryption={
          'Explore our blog section to stay connected with the emerging tech trends and in-demand technologies.'
        }
        image={
          'https://ik.imagekit.io/9o5td0iez/AUCO-WEB/blogpostbackground.png?updatedAt=1691385271073'
        }
      />
      <section>
        <Blog blogData={blogData} />
      </section>
    </div>
  );
};

export default BlogPage;
