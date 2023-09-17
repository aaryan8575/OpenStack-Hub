import Blog from '@/components/Blog';
import SectionDescription from '@/components/SectionDetail';
import React from 'react';

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
];

const HomeBlog = () => {
  return (
    <section className="py-20">
      <SectionDescription
        heading="Explore Our Engaging Blog: Insights Await"
        description="The smart sales assistant can also provide insights into customer
        behavior and preferences, allowing you to optimize your marketing and
        sales strategies."
      />
      <div className="md:w-4/5 mx-auto">
        <Blog blogData={blogData} />
      </div>
    </section>
  );
};

export default HomeBlog;
