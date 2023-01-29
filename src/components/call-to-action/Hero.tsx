import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#9d15d8] to-[#5f00a9]">
      <div className="max-w-xl lg:max-w-full">
        <Image
          src="/ww_hero.png"
          alt="Hero banner showing Wildlife Wizards logo"
          width={960}
          height={540}
        />
      </div>
    </div>
  );
};

export default Hero;
