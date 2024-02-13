import React from "react";
import { BiGlobe } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import Layout from "./Layout";

const AboutUs = () => {
  return (
    <Layout>
      <main className="mockup-browser m-5 h-screen border border-base-300 bg-base-200">
        <div className="mockup-browser-toolbar">
          <div className="input border border-base-300 text-center font-medium">
            JSD6G8/about-us
          </div>
        </div>
        <div className="h-full overflow-x-scroll max-md:max-w-max">
          <div className="mx-3 my-3 flex justify-center rounded-xl bg-secondary px-3 py-4 shadow-xl max-md:my-0 max-md:flex-col max-md:py-3">
            <div className="h-56 w-48 flex-shrink-0 self-center px-3 max-md:w-full max-md:px-1 max-md:py-1">
              <img
                src="http://placekitten.com/500/800"
                alt="avatar"
                className="h-56 w-48 rounded-xl object-cover max-md:w-full"
              />
            </div>
            <div className=" flex flex-col flex-wrap self-center px-2 py-4 max-md:py-2">
              <h1 className="pt-2 text-3xl font-bold max-md:text-2xl">
                Theppitak Maneepong (Mob)
              </h1>
              <p className="text-md mt-1 font-medium max-md:text-sm">
                Previously a pm, now on a journey of becoming web developer
              </p>
              <hr className="my-3" />
              <p className="text-justify font-normal max-md:text-sm">
                As a former project manager — now on my way to becoming a web
                and software developer — with four years of experience managing
                diverse types of projects for clients from various industries, I
                combined my newly acquired knowledge with experiences in
                managing problems with a systematic mindset, an eye on small
                details and a touch of creativity.
              </p>
              <div className="mt-4 flex justify-end space-x-4 text-2xl">
                <a
                  href="https://github.com/mmmmmob"
                  className="hover:cursor-pointer"
                  target="_blank"
                >
                  <IoLogoGithub />
                </a>
                <a
                  href="https://linkedin.com/theppitak-m"
                  className="hover:cursor-pointer"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://theppitak.me"
                  className="hover:cursor-pointer"
                  target="_blank"
                >
                  <BiGlobe />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AboutUs;
