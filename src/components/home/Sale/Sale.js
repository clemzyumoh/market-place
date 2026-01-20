import React from "react";
import { Link } from "react-router-dom";
// import {
//   saleImgOne,
//   saleImgTwo,
//   saleImgThree,

// } from "../../../assets/images/index";
import Image from "../../designLayouts/Image";
import sale1 from "../../../assets/images/sale/sale11.png"
import sale2 from "../../../assets/images/sale/sale2.png"
import sale3 from "../../../assets/images/sale/sale33.png";
const Sale = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center  justify-between gap-4 lg:gap-10">
      <div className="w-full md:w-2/3 lg:w-1/2 hover:scale-105 hover:delay-200 hover:ease-in-out hover:transition-all  h-full">
        <Link to="/shop">
          <Image className="h-full w-full  object-cover" imgSrc={sale3} />
        </Link>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex  flex-col gap-4 lg:gap-10">
        <div className="h-1/2 w-full hover:scale-105 hover:delay-200 hover:ease-in-out hover:transition-all">
          <Link to="/shop">
            <Image className="h-full w-full object-cover" imgSrc={sale2} />
          </Link>
        </div>
        <div className="h-1/2 w-full hover:scale-105 hover:delay-200 hover:ease-in-out hover:transition-all">
          <Link to="/shop">
            <Image className="h-full w-full object-cover" imgSrc={sale1} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
