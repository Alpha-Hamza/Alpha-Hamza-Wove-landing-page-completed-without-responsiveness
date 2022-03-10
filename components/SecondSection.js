import Buttons from "./Buttons";
import BgImage from "./BgImage";

export default function SecondSection() {
  return (
    <div className="relative top-[228px]  ">
      <div className=" flex  justify-center   gap-x-[80px]  ">
        <Buttons />
      </div>
      <div className=" relative my-[20px]  ">
        <div className="relative flex justify-center">
         <img src="./images/Line.png" alt=" " />
        </div>
        <div className="relative flex justify-center">
        <p className="absolute text-[#ffffff] text-center my-[48px] ">
          Run the most effective client workshops in Wove using apps like Mural
          and Miro
        </p>
        <BgImage />
        <img src="./images/Frame.png" alt=" " className="absolute my-[102.49px]"/>

        </div>
        
       
        <div className="relative flex justify-center my-[36.64px]">
          <img src="./images/icons.png" alt=" " />
        </div>
      </div>
      
    </div>
  );
}
