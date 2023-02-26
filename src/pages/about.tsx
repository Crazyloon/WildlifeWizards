import Head from "next/head";
import Section from "../components/structural/section";

const About = () => {
  return (
    <>
      <Head>
        <title>About Wildlife Wizards</title>
      </Head>
      <Section className="bg-purple-800 text-center text-white">
        <h1>About Us</h1>
      </Section>
      <Section className="px-2">
        <div className="m-auto max-w-xl">
          <h2>Quick Facts</h2>
          <div className="mb-5 inline-grid grid-cols-[auto_auto] gap-x-4 text-gray-700 dark:text-gray-300 [&>:nth-child(odd)]:text-right">
            <span>Founded:</span>
            <span>2022</span>
            <span>Size:</span>
            <span>Less than 10 employees</span>
            <span>Location:</span>
            <span>Covington, WA</span>
            <span>CEO:</span>
            <span>Leif Pedersen</span>
          </div>

          <h2>Who We Are</h2>
          <p className="mb-4">
            We are Wildlife Wizards, ready to be your trusted animal control
            experts. We are a team of experienced professionals who specialize
            in humane wildlife removal and management services. Our mission is
            to provide safe, effective, and humane solutions to wildlife-related
            problems in residential, commercial, and industrial settings. We
            understand the importance of coexisting with nature and strive to
            promote harmony between humans and wildlife.
          </p>
          <h2>What We Do</h2>
          <p className="mb-4">
            We offer a wide range of services including animal trapping and
            removal, exclusion, wildlife damage repair, and wildlife management.
            Our team is trained and certified to handle a variety of wildlife
            species including bats, raccoons, squirrels, skunks, opossums, and
            more. We use the latest techniques and equipment to safely and
            efficiently remove and relocate wildlife from your property. Our
            focus is on preventing future wildlife problems by identifying and
            addressing the root cause of invasions.
          </p>
          <h2>What We Value</h2>
          <p className="mb-4">
            We take pride in our commitment to providing exceptional customer
            service and satisfaction. Our team is available 7 days a week to
            handle emergency wildlife situations and provide prompt, reliable
            service. We believe in transparency and honesty, and we will work
            with you to find the best solution for your unique situation.
          </p>
        </div>
      </Section>
    </>
  );
};

export default About;
