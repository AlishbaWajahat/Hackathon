

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PreFooter from '@/components/PreFooter';
import Shop from '@/components/Shop';



function page() {

  return (
    <>
      <Header />
      <Hero text="Shop" />
      <Shop/>

      {/* Footer Section */}
      <PreFooter />
    </>
  );
}

export default page;

