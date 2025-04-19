import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero">
      <div className="absolute top-32 left-12 w-60 h-60 bg-yellow-300 rounded-full blur-3xl opacity-40 z-0" />
      <div className="absolute top-20 left-40 w-72 h-72 bg-blue-400 rounded-full blur-[100px] opacity-30 z-0" />
      <div className="absolute top-10 right-20 w-64 h-64 bg-purple-300 rounded-full blur-[100px] opacity-30 z-0" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-yellow-200 rounded-full blur-3xl opacity-40 z-0" />

      <h1 className="hero__title">It&#39;s still Day 1</h1>

      <p className="text-xl sm:text-2xl text-gray-600 mt-6 z-10 relative">
        Explore more opportunitues and activities about AWS Educate
      </p>

      <Image
        src="/hero-smile-arrow.svg"
        alt="AWS Logo"
        width={160}
        height={80}
        className="mx-auto mt-10"
      />

      <CustomButton
        title="Learn More ↓"
        containerStyles="mt-8 px-8 py-3 bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-semibold rounded-full text-lg shadow-md hover:scale-105 transition z-10 relative"
      />
    </section>
  );
};

export default Hero;
