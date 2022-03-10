import Logo from "./Logo";
import Social from "./Social";
export default function Footer() {
  return (
    <div className="relative my-[129px]">
      <div className="relative  flex justify-center">
        <img src="./images/Line1.png" alt=" " />
      </div>
      <div className=" flex px-[150px] my-[32px]">
        <Logo />
        <Social />
      </div>
      <div className="relative  flex justify-center">
        <img src="./images/Line1.png" alt=" " />
      </div>
      <div className="relative top-[32px] ">
          <p className=" text-center text-[16px] text-[#A3A3A3]  font-normal  ">Privacy Policy | Terms and Conditions</p>
          <p className=" text-center text-[18px] text-[#ffffff]  font-normal my-[8px] ">@ 2022 Wove Labs, Inc, All rights reserved.</p>
      </div>
      
      
      
      
    </div>
  );
}
