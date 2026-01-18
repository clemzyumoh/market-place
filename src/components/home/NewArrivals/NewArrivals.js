import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
 // newArrOne,
  newArrTwo,
 // newArrThree,
 // newArrFour,
} from "../../../assets/images/index";
import gadget3 from "../../../assets/images/products/gadgets/gadget3.png";

import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";


import elec1 from "../../../assets/images/products/electronics/elec1.png";
import elec7 from "../../../assets/images/products/electronics/elec7.png";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={elec7}
            productName="65-Inch Smart TV"
            category="electronics"
            price="800.00"
            color="Black"
            badge={true}
            des="Ultra HD 65-inch smart television with vibrant display."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Smart Watch"
            price="250.00"
            color="Black"
            badge={true}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={gadget3}
            productName="Wireless Joystick"
            category="gadgets"
            price="350.00"
            color="Black"
            badge={false}
            des="Ergonomic wireless joystick for smooth and responsive gaming experience."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={elec1}
            productName="Washing Machine"
            category="electronics"
            price="500.00"
            color="Silver"
            badge={true}
            des="High-performance washing machine with energy-saving technology."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrTwo}
            productName="Funny toys for babies"
            price="60.00"
            color="Mixed"
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
