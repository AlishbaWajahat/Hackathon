
import Card1 from "@/components/Card1";
import Card2 from "@/components/Card2";
import Card3 from "@/components/Card3";
import Singleproduct from '@/components/Singleproduct'


import Header from "@/components/Header";
import { Fullscreen } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';


export default function Home() {
  return (
    <>
      {/* hero section */}
      <div className="bg-[#FBEBB5] max-w-[3000px] "><Header/></div>
      <div className="lg:h-[800px] md:h-[600px] h-auto bg-[#FBEBB5] max-w-[3000px] flex justify-center items-center font-poppin lg:gap-12 gap-8 md:flex-row flex-col-reverse pt-8 pb-8 md:pt-0 md:pb-0 md:px-10">
        <div className=" md:w-[440px] w-auto h-auto text-center md:text-start">
          <h1 className="font-medium md:text-[30px] text-[44px] lg:text-[64px]">Rocket single seater</h1>
          <p className="text-2xl underline underline-offset-[16px] font-medium mt-6">Shop now</p>
        </div>
        <div >
          <Image src={"/hero seat.png"} alt="seat" width={650} height={650} />
        </div>
      </div>

      {/* 1st section */}
      <div className="max-w-[3000px] h-auto py-4 px-8 flex gap-4   items-center justify-around font-poppin">
        <Card1 ImageUrl="/pic1(Home).png" width={450} height={450} />
        <Card1 ImageUrl="/pic2(Home).png" width={450} height={450} />
      </div>

      {/* 2nd section */}

      <div className="font-poppin flex flex-col items-center py-10 md:mt-14 mt-8 max-w-[3000px]">
        <h1 className="text-4xl font-medium text-center">Top Picks For You</h1>
        <p className="text-base text-[#9F9F9F] mt-4 mx-12 text-center">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
        <div className="flex gap-6 justify-center w-full flex-wrap py-6  mt-8 md:mt-14">
          <Card2 imageUrl="/pic1(2nd sec).png" text="Trenton modular sofa_3" id="1" Cost={25000} />
          <Card2 imageUrl="/pic2 (2nd sec).png" text="Granite dining table with dining chair" id="2" Cost={25000} />
          <Card2 imageUrl="/pic3(2nd sec) (2).png" text="Outdoor bar table and stool" id="3" Cost={25000} />
          <Card2 imageUrl="/pic4(2nd sec).png" text="plain console with teak mirror" id="4" Cost={25000} />
        </div>
        <Link href={"/shop"}><p className="text-[20px] underline underline-offset-[16px] font-medium mt-6 md:mt-8">View More</p></Link>
      </div>


      {/* 3rd section */}
      <div className="max-w-[3000px] bg-[#FBEBB5]  flex font-poppin items-center md:gap-20 lg:gap-28 gap-16 sm:pt-12 pt-8 justify-center md:flex-row flex-col-reverse">
        <div className=""><Image src={"/section3.png"} alt="section3" width={700} height={700} /></div>
        <div className="flex items-center flex-col">
          <p className="text-2xl font-medium text-center">New Arrivals</p>
          <p className="sm:text-5xl text-4xl font-bold mt-3 text-center ">Asgaard sofa</p>
          <div className="w-[200px] h[40px] py-2 px-4 border-2 border-black flex justify-center mt-8"> Order Now</div>
        </div>
      </div>

      {/* 4th section */}
      <div className="font-poppin flex flex-col items-center py-14 max-w-[3000px]">
        <h1 className="text-4xl font-medium text-center">Our Blogs</h1>
        <p className="text-base text-[#9F9F9F] mt-4 mx-12 text-center">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
        <div className="flex gap-6 justify-center w-full flex-wrap md:flex-nowrap pb-6 px-4 lg-px-0  mt-8 md:mt-14  items-center">
          <Card3 ImageUrl="/pic1 (4th sec).png" />
          <Card3 ImageUrl="/pic2 (4th sec).png"  />
          <Card3 ImageUrl="/pic3 (4th sec).png" />
          
        </div>
        <p className="text-[20px] underline underline-offset-[16px] font-medium mt-6 md:mt-10">View All Posts</p>
      </div>

      {/* 5th section */}
      <div className="font-poppin max-w-[3000px] sm:h-[300px] h-[200px] md:h-[450px] lg:mb-20 flex justify-center items-center relative">
        <Image src={"/section5.png"} alt="image" fill/>

        <div className=" flex flex-col z-10">
          <h1 className="md:text-6xl sm:text-4xl text-3xl font-bold text-center">Our Instagram</h1>
          <p className="text-base text-center mt-4">Follow our store on Instagram</p>
          <p className="text-base text-center mt-6">Follow us</p>
        </div>
      </div>




    </>

  );
}
