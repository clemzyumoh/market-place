// import { useNavigate } from "react-router-dom";
// import Badge from "../../../components/home/Products/Badge";

// const ListProduct = ({ item }) => {
//   const navigate = useNavigate();

//   return (
//     <div
//       onClick={() =>
//         navigate(
//           `/product/${item.productName.toLowerCase().split(" ").join("")}`,
//           { state: { item } }
//         )
//       }
//       className="w-full h-28 bg-gray-100 mb-4 flex items-center gap-4 cursor-pointer p-3">
//       <img className="w-24 h-24 object-cover" src={item.img} alt="" />
//       <div className="absolute top-6 left-8">
//         {item.Badge && <Badge text="New" />}
//       </div>
//       <div className="flex flex-col gap-1">
//         <p className="font-semibold text-lg">{item.productName}</p>
//         <p className="text-xs text-gray-600">{item.des}</p>
//         <p className="text-sm">
//           Price:{" "}
//           <span className="text-primeColor font-semibold">${item.price}</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ListProduct;

import { BsSuitHeartFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";
import Badge from "../../../components/home/Products/Badge";

const ListProduct = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const rootId = item.productName.toLowerCase().split(" ").join("");

  const handleDetails = () => {
    navigate(`/product/${rootId}`, { state: { item } });
    };
    

  return (
    <div className="w-full relative  overflow-hidden group border border-gray-200 bg-white mb-4  flex lg:gap-6">
      {/* IMAGE */}
      <div className="relative w-44 h-44  flex-shrink-0">
        <img
          src={item.img}
          alt={item.productName}
          className="w-full h-full object-cover"
        />

        {/* BADGE */}
        {item.badge && (
          <div className="absolute w-5 top-2 left-2">
            <Badge className="w-5" text="New" />
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="flex flex-col m-4  justify-center flex-1">
        <div>
          <h2 className="text-lg sm:text-md font-bold text-primeColor">
            {item.productName}
          </h2>
          <p className="text-sm text-gray-500 lg:flex hidden mt-1">
            {item.des}
          </p>
          <p className="text-sm mt-2">
            Price:{" "}
            <span className="font-semibold text-primeColor">${item.price}</span>
          </p>
          <p className="text-xs text-gray-400 mt-1">{item.color}</p>
        </div>

        {/* ACTIONS (HOVER) */}
        <div className="lg:flex hidden gap-6 text-sm text-[#767676] mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="hover:text-primeColor flex items-center gap-1">
            Compare <GiReturnArrow />
          </button>

          <button
            onClick={() =>
              dispatch(
                addToCart({
                  _id: item._id,
                  name: item.productName,
                  quantity: 1,
                  image: item.img,
                  badge: item.badge,
                  price: item.price,
                  colors: item.color,
                })
              )
            }
            className="hover:text-primeColor flex items-center gap-1">
            Add to Cart <FaShoppingCart />
          </button>

          <button
            onClick={handleDetails}
            className="hover:text-primeColor flex items-center gap-1">
            View Details <MdOutlineLabelImportant />
          </button>

          <button className="hover:text-primeColor flex items-center gap-1">
            Wishlist <BsSuitHeartFill />
          </button>
        </div>
      </div>

      <div className=" flex justify-center items-center w-full pt-3 lg:hidden absolute bg-white -bottom-[100%] group-hover:bottom-0 duration-700">
        <ul className="w-full h-full flex justify-between flex-col items-center  gap-2 font-titleFont px-2 border-l border-r">
          <div className="flex border-b-[1px] border-b-gray-200 hover:border-b-primeColor justify-between w-full ">
            <li className="text-[#767676] hover:text-primeColor text-sm font-normal   flex items-center  gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              Compare
              <span>
                <GiReturnArrow />
              </span>
            </li>
            <li
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: item._id,
                    name: item.productName,
                    quantity: 1,
                    image: item.img,
                    badge: item.badge,
                    price: item.price,
                    colors: item.color,
                  })
                )
              }
              className="text-[#767676] hover:text-primeColor text-sm font-normal  flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              Add to Cart
              <span>
                <FaShoppingCart />
              </span>
            </li>
          </div>
          <div className="flex border-b-[1px]  justify-between w-full ">
            <li
              onClick={handleDetails}
              className="text-[#767676] hover:text-primeColor text-sm font-normal flex items-center  gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              View Details
              <span className="text-lg">
                <MdOutlineLabelImportant />
              </span>
            </li>
            <li className="text-[#767676] hover:text-primeColor text-sm font-normal  flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              Add to Wish List
              <span>
                <BsSuitHeartFill />
              </span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default ListProduct;
