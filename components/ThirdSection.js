export default function ThirdSection() {
  return (
    <>
      <div className=" relative  my-[300px]">
        <div className="text-center">
          <h1 className="text-[36px] text-[#ffffff] tracking-[-0.01em] font-semibold">
            Built for the New Normal
          </h1>
          <p className="text-[16px] text-[#A3A3A3]  font-normal">
            Open any of your favorite apps right in Wove. With Wove&apos;s
            persistence, you can access <br />
            your work with a single click even after a meeting has ended.
          </p>
        </div>
        <div className="relative flex justify-center  mx-auto container  my-[70px]">
          <div className="text-center mx-[87px] ">
            <img
              src="./images/icon1.png"
              alt=" "
              className="block ml-auto mr-auto "
            />
            <h3 className="text-[20px] font-medium tracking-[-0.01em] leading-5 text-[#ffffff] my-[25px]">
              Real Time Collaboration
            </h3>
            <p className="text-[16px] font-normal leading-5 text-[#A3A3A3]">
              Tranform any website into mulitplayer <br /> with Wove&apos;s
              shared browser
            </p>
          </div>
          <div className="text-center mx-[87px]">
            <img
              src="./images/icon2.png"
              alt=" "
              className="block ml-auto mr-auto "
            />
            <h3 className="text-[20px] font-medium tracking-[-0.01em] leading-5 text-[#ffffff] my-[25px]">
              Async Organization
            </h3>
            <p className="text-[16px] font-normal leading-5 text-[#A3A3A3]">
              Post-meeting organization via nesting <br /> and async, Internal
              and external <br /> shtakeholders have a source of truth to
              reference.
            </p>
          </div>
          <div className="text-center mx-[87px]">
            <img
              src="./images/icon3.png"
              alt=" "
              className="block ml-auto mr-auto "
            />
            <h3 className="text-[20px] font-medium tracking-[-0.01em] leading-5 text-[#ffffff] my-[25px]">
              Work Persistence
            </h3>
            <p className="text-[16px] font-normal leading-5 text-[#A3A3A3]">
              Achive all work inside the room, Wave <br /> rooms live and
              breathe. Participants can <br /> return to rooms after the meeting
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
