import "../index.css";
import { FaCaretDown } from "react-icons/fa";

export default function Home() {
  return (
    <div className="mx-1">
      {/* Hero Section */}
      <div className="flex items-end sm:ml-72">
        <div className="ml-1 mt-5 sm:mt-20">
          <div className="max-w-full flex flex-col">
            <h1 className="text-4xl mb-4">
              hi<span style={{ color: "var(--color-primary)" }}>.</span>
              <br />i<span style={{ color: "var(--color-primary)" }}>'</span>m
              <br />
              khanm
              <br />
              muhammad<span style={{ color: "var(--color-primary)" }}>.</span>
              <br />
            </h1>
            <p className="text-xs sm:text-sm leading-loose sm:w-[30vw] font-extralight">
              Creative designer and developer with a passion for building sleek,
              high-performance applications. Turning ideas into interactive
              experiences—one line of code at a time.
            </p>
          </div>
        </div>
        <div className="hidden sm:flex gap-3 text-sm font-extralight justify-end w-3/5">
          scroll down{" "}
          <FaCaretDown color="var(--color-primary)" className="mt-0.5" />
        </div>
      </div>

      {/* Projects Wall */}
      <div className="my-10 flex justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-1.5 w-[100vw]">
          {/* First row */}
          <div className="col-span-2 min-h-65 max-h-65 bg-neutral-900 rounded-lg"></div>
          <div className="col-span-1 min-h-65 max-h-65 bg-neutral-900 rounded-lg"></div>
          <div className="col-span-1 min-h-65 max-h-65  bg-neutral-900 rounded-lg "></div>
          <div className="col-span-1 min-h-65 max-h-65  bg-neutral-900 rounded-lg"></div>
          <div className="row-span-2 bg-neutral-900 rounded-lg"></div>

          {/* Second row */}
          <div className="col-span-1 min-h-65 max-h-65  bg-neutral-900 rounded-lg"></div>
          <div className="row-span-2  bg-neutral-900 rounded-lg"></div>
          <div className="row-span-2 col-span-2 bg-neutral-900 rounded-lg"></div>
          <div className="col-span-1 min-h-65 max-h-65  bg-neutral-900 rounded-lg"></div>

          {/* <div className="col-span-1 min-h-65 max-h-65  bg-neutral-900 rounded-lg"></div>
          <div className="row-span-2  bg-neutral-800 rounded-lg"></div>
          <div className="col-span-2 row-span-2  bg-neutral-800 rounded-lg"></div>
          <div className="col-span-1 min-h-65 max-h-65  bg-neutral-900 rounded-lg"></div> */}

          {/* Third row */}
          <div className="col-span-1 min-h-65 max-h-65  bg-neutral-900 rounded-lg"></div>
          <div className="col-span-2 min-h-65 max-h-65  bg-neutral-900 rounded-lg"></div>

          {/* Fourth row */}
          <div className="col-span-1 min-h-65 max-h-65  bg-neutral-900 rounded-lg"></div>
          <div className="col-span-1 min-h-65 max-h-65  bg-neutral-900 rounded-lg"></div>
          <div className="col-span-2 min-h-65 max-h-65  bg-neutral-900 rounded-lg"></div>
          <div className="col-span-1 min-h-65 max-h-65  bg-neutral-900 rounded-lg"></div>
          <div className="col-span-1 min-h-65 max-h-65  bg-neutral-900 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
