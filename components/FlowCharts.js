export default function FlowCharts() {
  return (
    <div className="relative my-[114px]">
      <div className="relative  flex justify-end mx-[50px]">
        <img src="./images/flow1.png" alt=" " />
        <h1 className="  absolute left-0 my-[150px] text-[36px] text-[#ffffff] tracking-[-0.01em] font-semibold ">
          Before Wove
        </h1>
        <p className="  absolute left-0 my-[200px] text-[16px] text-[#A3A3A3]  font-normal ">
          Silos that make it a nightmare to keep <br /> track, making you switch
          between tools <br /> back and forth
        </p>
      </div>
      <div className="relative  flex justify-end mx-[50px] my-[128.92px]">
        <img src="./images/flow2.png" alt=" " />
        <h1 className="  absolute left-0 my-[150px] text-[36px] text-[#ffffff] tracking-[-0.01em] font-semibold ">
          After Wove
        </h1>
        <p className="  absolute left-0 my-[200px] text-[16px] text-[#A3A3A3]  font-normal ">
          Fluid collaboration that allows everything <br /> to be tracked
          allowing you to focus on <br /> the most important of aspects
        </p>
      </div>
    </div>
  );
}
