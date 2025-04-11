import "../index.css";
import { FaCaretDown } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="flex items-end">
        <div className="ml-72 mt-20">
          <div className="flex flex-col">
            <h1 className="text-4xl mb-4">
              hi<span style={{ color: "var(--color-primary)" }}>.</span>
              <br />i<span style={{ color: "var(--color-primary)" }}>'</span>m<br />
              khanm
              <br />
              muhammad<span style={{ color: "var(--color-primary)" }}>.</span>
              <br />
            </h1>
            <p className="text-sm leading-loose w-[30vw] font-extralight">
            Creative designer and developer with a passion for building sleek, high-performance applications. Turning ideas into interactive experiences—one line of code at a time.
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-sm font-extralight justify-end w-full">
          scroll down <FaCaretDown color="var(--color-primary)" className="mt-0.5"/>
        </div>
      </div>
    </div>
  );
}
