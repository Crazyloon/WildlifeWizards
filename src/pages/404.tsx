import Image from "next/image";
import GoBack from "../components/navigation/goback";

export default function Custom404() {
  return (
    <main className="m-auto h-full max-w-3xl leading-tight">
      <span className="my-4 block text-center text-5xl">
        404 - Page Not Found
      </span>
      <span className="my-8 block text-center text-xl">
        We might have cast the wrong spell.
      </span>
      <div className="relative m-auto aspect-[5/6] h-96 md:h-[600px] lg:h-[800px]">
        <Image
          src="/ww_raccoon_wizard_home.png"
          alt="A cute raccoon wearing a purple wizard hat"
          fill
        />
      </div>
      <GoBack className="flex items-center py-12 pl-12 text-2xl" />
    </main>
  );
}
