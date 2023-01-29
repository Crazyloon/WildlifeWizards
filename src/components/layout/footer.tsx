const Footer = () => {
  const date: number = new Date().getFullYear();
  return (
    <>
      <section className="m-auto grid w-full max-w-3xl grid-cols-4 gap-8 px-2 py-12 text-gray-800 dark:text-gray-400 md:px-14">
        <div className="flex flex-col">
          <h4 className="bold mb-2 underline underline-offset-2">Company</h4>
          <span className="text-sm">Careers</span>
          <span className="text-sm">Meet the Team</span>
          <span className="text-sm">Blog</span>
        </div>
        <div className="flex flex-col">
          <h4 className="bold mb-2 underline underline-offset-2">Resources</h4>
          <span className="text-sm">DIY</span>
          <span className="text-sm">Common Creatures</span>
        </div>
        <div className="flex flex-col">
          <h4 className="bold mb-2 underline underline-offset-2">Social</h4>
          <span className="text-sm">Facebook</span>
          <span className="text-sm">Twitter</span>
          <span className="text-sm">Instagram</span>
          <span className="text-sm">TikTok</span>
        </div>
        <div className="flex flex-col">
          <h4 className="bold mb-2 underline underline-offset-2">Legal</h4>
          <span className="text-sm">Privacy Statement</span>
          <span className="text-sm">Cookies</span>
          <span className="text-sm">Insurance</span>
        </div>
      </section>
      <section className="pb-2 text-center text-sm capitalize text-gray-400">
        copyright © {date} wildlife wizards - all rights reserved
      </section>
    </>
  );
};

export default Footer;
