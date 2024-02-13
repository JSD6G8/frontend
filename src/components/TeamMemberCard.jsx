// TeamMemberCard.js
import React from "react";
import { BiGlobe } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const TeamMemberCard = ({ member }) => {
  return (
    <div className="max-md:my-3 max-md:max-w-max">
      <div className="mx-3 my-3 flex justify-center rounded-xl bg-slate-300 px-3 py-4 shadow-xl max-md:my-0 max-md:flex-col max-md:py-3">
        <div className="h-56 w-48 flex-shrink-0 self-center px-3 max-md:w-full max-md:px-1 max-md:py-1">
          <img
            src={member.pic}
            alt="avatar"
            className="h-56 w-48 rounded-xl object-cover max-md:w-full"
          />
        </div>
        <div className=" flex flex-col flex-wrap self-center px-2 py-4 max-md:py-2">
          <h1 className="pt-2 text-3xl font-bold max-md:text-2xl">
            {member.name}
          </h1>
          <p className="text-md mt-1 font-medium max-md:text-sm">
            {member.shortBio}
          </p>
          <hr className="my-3" />
          <p className="text-justify font-normal max-md:text-sm">
            {member.longBio}
          </p>
          <div className="mt-4 flex justify-end space-x-4 text-2xl">
            <a
              href={member.gitHub}
              className="hover:cursor-pointer"
              target="_blank"
            >
              <IoLogoGithub />
            </a>
            <a
              href={member.linkedIn}
              className="hover:cursor-pointer"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              href={member.personalSite}
              className="hover:cursor-pointer"
              target="_blank"
            >
              <BiGlobe />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
