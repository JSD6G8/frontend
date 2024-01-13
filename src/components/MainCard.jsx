import React, { useEffect, useState } from "react";
import Layout from "../Layout";

function MainCard() {
  return (
    <main
      className=" m-3 shadow-2xl rounded-2xl flex flex-col  bgbg p-4 gap-3"
      id="activities-baro"
    >
      <section className="flex border-b-2 border-slate-300 rounded-t-lg pb-2">
        <div
          id="activities-baro"
          className="bg-slate-100 w-10 h-10 rounded-full  flex flex-col justify-evenly"
        >
          <span className="material-symbols-outlined self-center">sprint</span>
        </div>
        <h1 className="text-[#ffffff] font-extrabold text-xl  mx-3 self-center">
          Morning Run
        </h1>
      </section>

      <p className=" font-medium text-md text-[#ffffff]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex minus
        itaque commodi nisi corrupti similique eum mollitia quaerat in modi?
      </p>

      <section className="flex justify-end border-t-2 border-slate-300 p-2 pb-0 gap-3">
        <span class="material-symbols-outlined text-base-100">edit</span>
        <span class="material-symbols-outlined text-info">delete</span>
      </section>
    </main>
  );
}

export default MainCard;
