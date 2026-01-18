import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
//  bestSellerOne,
//  bestSellerTwo,
 // bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";
import gadget4 from "../../../assets/images/products/gadgets/gadget4.png";
import clothes11 from "../../../assets/images/products/clothes/clothes11.png";
import furniture4 from "../../../assets/images/products/furniture/furniture4.png";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={gadget4}
          productName="Drone with Camera"
          category="gadgets"
          price="600.00"
          color="Gray"
          badge={true}
          des="High-performance drone with HD camera for aerial photography."
        />
        <Product
          _id="1012"
          img={clothes11}
          productName="Basketball Shoes"
          category="clothes"
          price="300.00"
          color="white"
          badge={true}
          des="High-performance basketball shoes with superior grip."
        />
        <Product
          _id="1013"
          img={furniture4}
          productName="Native Light Chair"
          category="furniture"
          price="250.00"
          color="Beige"
          badge={false}
          des="Lightweight native-style chair perfect for modern interiors."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Travel Bag"
          price="220.00"
          color="Black"
          badge={false}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
      </div>
    </div>
  );
};

export default BestSellers;
