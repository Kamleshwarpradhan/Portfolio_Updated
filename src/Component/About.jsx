import React from "react";
import SectionTitle from "./SectionTitle";
import Skills from "./Skills";
import profile from "/ProfilePic.jpg"

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lg:py-32 flex flex-col gap-8"
    >
      <SectionTitle titno={"01."} titlename={"About Me"} />
      {/* Text and Image */}
      <div className="flex flex-col md:flex-row gap-16">
        <div className="flex flex-col gap-4 text-base text-textDark w-full lg:w-2/3">
          <p>
            Hello! My name is Kamleshwar and I enjoy creating things that live
            on the internet. My intreset in web development started when I khnow
            about this in my 3rd semester via my classmates. Some students are
            participating in some hackathon and making things that we can use in
            our daily life. Then I stared learning about HTML and CSS and
            javascript and many more.
          </p>
          <p>
            Fast-forward to today, I have created so much things with the help
            of this technology and I really like all the projects which I have
            created and always excited to learn new technology.
          </p>
          <p>
            I have knowledge of both{" "}
            <span className="text-textGreen inline-flex relative cursor-pointer overflow-x-hidden h-7 group mr-1">
              Frontend
              <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
            </span>
            and{" "}
            <span className="text-textGreen inline-flex relative cursor-pointer overflow-x-hidden h-7 group">
              Backend
              <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
            </span>
            . Recently I'm learning about a powerful technology which has both
            server-side and client-side rendering known as{" "}
            <span className="text-textGreen inline-flex relative cursor-pointer overflow-x-hidden h-7 group">
              NextJs
              <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
            </span>
            .
          </p>
          {/* Skills */}

          <div>
                <p className="mb-4">Here are few technologies I have been working with recently. Hoping to add some more in future.</p>
               <Skills />
          </div>
        </div>
        <div className="w-[350px] mx-auto lg:w-1/3 h-80 group relative">
              <div className="absolute w-full h-80  rounded-lg">
                  <div className="w-full h-full relative z-20 flex pl-6 lg:pl-0">
                      <img src={profile} alt="ProfilePic" className="rounded-lg h-full w-full bg-center group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
                      <div className="hidden lg:inline-block absolute w-full h-80 bg-textGreen/10 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
                      <div className="hidden -z-10 absolute lg:inline-flex w-full h-80 border-2 border-textGreen rounded-md translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>
                  </div>
              </div>
        </div>
      </div>
    </section>
  );
};

export default About;
