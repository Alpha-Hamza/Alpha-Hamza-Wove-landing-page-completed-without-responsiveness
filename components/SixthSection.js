export default function SixthSection() {
  return (
    <div className="relative flex justify-center     my-[169.7px]">
      <div className="relative flex ">
        <img src="./images/cover.png" alt=" " className="relative" />
        <div className="absolute  right-[125.17px]">
          <img
            src="./images/bgcover.png"
            alt=" "
            className="relative top-[119px] opacity-20"
          />
        </div>
        <div className="absolute left-[128px] top-[135px]">
          <h1 className="  text-[36px] text-[#ffffff] tracking-[-0.01em] font-semibold  ">
            Stay in the loop
          </h1>
          <p className=" text-[16px] text-[#A3A3A3]  font-normal ">
            We are giving selected teams free access to Wove during our private
            beta
          </p>
          <div className=" relative bg-[#262626] w-[100%] h-[60px] top-[40px] rounded-[56px] ">
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
    </div>
  );
}
