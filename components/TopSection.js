import Logo from "./Logo";
export default function TopSection() {
  return (
    <div mx-auto container>
      <div className="flex justify-center  ">
        <div className=" absolute top-[64px]  ">
          <Logo />
        </div>
        <div className="  px-[240px] top-[60.08px] h-[428.17px] opacity-80 ">
          <img src="./images/Gradient.png" alt=" " />
        </div>
        <div className=" absolute   top-[208px]   ">
          <h1 className="  text-[60px] leading-[66px] text-center  font-bold text-[#ffffff] tracking-[-1%]   ">
            The Collaboration <br />
            Meta-Layer for <span className="text-[#7FE3EC]">Work</span>
          </h1>
          <p className=" h-12 not-italic text-lg my-[32px] text-center text-[#D4D4D4] text-[18px] ">
            Stop falling through the cracks. The tools you already know and
            love, all in <br />
            one place.
            <span className=" font-bold">
              {" "}
              Meet, collaborate, and organize
            </span>{" "}
            all of your work in Wove.{" "}
          </p>
        </div>
      </div>
      <div className="relative flex justify-center my-[48px] ">
        <div className=" relative bg-[#262626] w-[30%] h-[60px] rounded-[56px] ">
          <input
            type={"text"}
            placeholder="Email Address"
            className="  relative  h-[60px]  bg-[#262626] rounded-[56px] placeholder:px-[20px]"
          />
          <div className=" absolute right-[6px] bg-[#0585F2] w-[40%] h-[48px] rounded-[56px]  top-[6px]   ">
            <button className="  relative  left-[24px] top-[12px] text-[#ffffff] text-[16px] font-medium tracking-tight    ">
              Request Early Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
