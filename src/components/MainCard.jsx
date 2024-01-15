import React, { useEffect, useState } from "react";
import Layout from "../Layout";

function MainCard() {
  return (
    <main
      className=" m-3 shadow-2xl rounded-2xl flex flex-col  bg-power p-4 gap-3"
      id="activities-baro"
    >
      <section className="flex justify-between border-b-[1px] border-[#ffffff] rounded-t-lg pb-2">
        <article className="flex">
          <div
            className="bg-slate-100 w-10 h-10 rounded-full  flex flex-col justify-evenly"
          >
            <span className="material-symbols-outlined self-center">
              sprint
            </span>
          </div>
          <h1 className="text-[#ffffff] font-extrabold text-xl  mx-3 self-center">
            Morning Run
          </h1>
        </article>
        <span className="self-center text-[#004E0E] text-xl font-bold">
          40 mins
        </span>
      </section>

      <section>
        <p className=" font-medium text-md text-[#ffffff] tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex minus
          itaque commodi nisi corrupti similique eum mollitia quaerat in modi?
        </p>
      </section>

      <section className="flex justify-between items-center border-t-[1px] border-[#ffffff] p-2 pb-0">
        <span className="text-[#ffffff] font-mono text-sm">14-02-2024  |  19.05 - 19.45</span>
        {/* <span className="text-[#ffffff] font-mono text-sm">19.05 - 19.45</span> */}
        <article className="flex gap-2">
          <span className="material-symbols-outlined text-base-200">edit</span>
          <span className="material-symbols-outlined text-info">delete</span>
        </article>
      </section>
    </main>
  );
}

export default MainCard;
