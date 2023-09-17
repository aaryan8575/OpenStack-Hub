import Testimonial from '@/components/Testimonial';
import WhyOpenstack from '@/components/WhyOpenstack';
import HomeBanner from '@/containers/HomeBanner';
import Service from '@/components/Services';
import Cta from '@/components/Cta';
import OurWorks from '@/containers/OurWorks';
// import HomeBlog from '@/containers/HomeBlog';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HomeBanner />
      <Service />
      <WhyOpenstack />
      <Cta
        heading="Elevate Your Business with Exceptional IT Services"
        description="We are here to simplify the complex ideas to simple by providing you with smooth technological solutions that would enlarge your success."
      />
      <OurWorks />
      <Testimonial />
      {/* <HomeBlog /> */}
    </main>
  );
}
