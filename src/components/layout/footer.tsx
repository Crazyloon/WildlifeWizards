import Link from "next/link";

const Footer = () => {
  const date: number = new Date().getFullYear();
  return (
    <>
      <div className="m-auto max-w-3xl px-4 pt-10 text-gray-800 dark:text-gray-400">
        <Link href={"/"} className="hover:no-underline">
          <span className="bg-gradient-to-br from-[#9d15d8] to-[#5f00a9] bg-clip-text font-brand text-2xl text-transparent dark:from-[#d36bff] dark:to-[#b350ff]">
            Wildlife Wizards
          </span>
        </Link>
      </div>
      <div className="m-auto grid w-full max-w-3xl grid-cols-1 justify-items-center gap-8 px-4 pb-10 pt-4 text-gray-800 dark:text-gray-400 xs:grid-cols-2 sm:grid-cols-4">
        <div className="flex w-full flex-col">
          <h4 className="bold mb-2 underline underline-offset-2">Company</h4>
          <Link href="/careers" className="pb-1">
            <span className="text-sm md:text-base">Careers</span>
          </Link>
          <Link href="/crew" className="pb-1">
            <span className="text-sm md:text-base">Meet the Crew</span>
          </Link>
          <Link href="/blog" className="pb-1">
            <span className="text-sm md:text-base">Blog</span>
          </Link>
        </div>
        <div className="flex w-full flex-col">
          <h4 className="bold mb-2 underline underline-offset-2">Resources</h4>
          <Link href="/diy" className="pb-1">
            <span className="text-sm md:text-base">DIY</span>
          </Link>
          <Link href="/localwildlife" className="pb-1">
            <span className="text-sm md:text-base">Local Wildlife</span>
          </Link>
        </div>
        <div className="flex w-full flex-col">
          <h4 className="bold mb-2 underline underline-offset-2">Social</h4>
          <Link href="/facebook" className="pb-1">
            <span className="text-sm md:text-base">Facebook</span>
          </Link>
          <Link href="/twitter" className="pb-1">
            <span className="text-sm md:text-base">Twitter</span>
          </Link>
          <Link href="/instagram" className="pb-1">
            <span className="text-sm md:text-base">Instagram</span>
          </Link>
          <Link href="/tiktok" className="pb-1">
            <span className="text-sm md:text-base">TikTok</span>
          </Link>
        </div>
        <div className="flex w-full flex-col">
          <h4 className="bold mb-2 underline underline-offset-2">Legal</h4>
          <Link href="/privacy" className="pb-1">
            <span className="text-sm md:text-base">Privacy Statement</span>
          </Link>
          <Link href="/cookies" className="pb-1">
            <span className="text-sm md:text-base">Cookies</span>
          </Link>
          <Link href="/insurance" className="pb-1">
            <span className="text-sm md:text-base">Insurance</span>
          </Link>
        </div>
      </div>
      <section className="pb-2 text-center text-sm capitalize text-gray-600">
        copyright © {date} wildlife wizards - all rights reserved
      </section>
    </>
  );
};

export default Footer;
