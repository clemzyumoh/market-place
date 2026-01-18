// import React, { useState } from "react";
// // import { FaPlus } from "react-icons/fa";
// import { ImPlus } from "react-icons/im";
// import NavTitle from "./NavTitle";

// const Category = () => {
//   const [showSubCatOne, setShowSubCatOne] = useState(false);
//   const items = [
//     {
//       _id: 990,
//       title: "New Arrivals",
//       icons: true,
//     },
//     {
//       _id: 991,
//       title: "Gadgets",
//     },
//     {
//       _id: 992,
//       title: "Accessories",
//       icons: true,
//     },
//     {
//       _id: 993,
//       title: "Electronics",
//     },
//     {
//       _id: 994,
//       title: "Others",
//     },
//   ];
//   return (
//     <div className="w-full">
//       <NavTitle title="Shop by Category" icons={false} />
//       <div>
//         <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
//           {items.map(({ _id, title, icons }) => (
//             <li
//               key={_id}
//               className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center justify-between"
//             >
//               {title}
//               {icons && (
//                 <span
//                   onClick={() => setShowSubCatOne(!showSubCatOne)}
//                   className="text-[10px] lg:text-xs cursor-pointer text-gray-400 hover:text-primeColor duration-300"
//                 >
//                   <ImPlus />
//                 </span>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };


// export default Category;

import React from "react";

const categories = ["all", "gadgets", "furniture", "clothes", "accessories", "electronics", "others"];

const Category = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="w-full">
      <h3 className="font-titleFont font-semibold mb-4">
        Shop by Category
      </h3>

      <ul className="flex flex-col gap-3 text-[#767676]">
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`cursor-pointer capitalize duration-200
              ${
                selectedCategory === cat.toLocaleLowerCase()
                  ? "text-primeColor font-semibold"
                  : "hover:text-primeColor"
              }`}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;