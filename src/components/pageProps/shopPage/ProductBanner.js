// import React, { useEffect, useState } from "react";
// import { BsGridFill } from "react-icons/bs";
// import { ImList } from "react-icons/im";
// import { GoTriangleDown } from "react-icons/go";

// const ProductBanner = ({ itemsPerPageFromBanner }) => {
//   //   const [selected, setSelected] = useState("");
//   const [girdViewActive, setGridViewActive] = useState(true);
//   const [listViewActive, setListViewActive] = useState(false);
//   useEffect(() => {
//     const gridView = document.querySelector(".gridView");
//     const listView = document.querySelector(".listView");

//     gridView.addEventListener("click", () => {
//       setListViewActive(false);
//       setGridViewActive(true);
//     });
//     listView.addEventListener("click", () => {
//       setGridViewActive(false);
//       setListViewActive(true);
//     });
//   }, [girdViewActive, listViewActive]);

//   return (
//     <div className="w-full flex flex-col md:flex-row md:items-center justify-between">
//       {/* =========================================================
//                             Left Part Start here
//         ======================================================== */}

//       <div className="flex items-center gap-4">
//         <span
//           className={`${
//             girdViewActive
//               ? "bg-primeColor text-white"
//               : "border-[1px] border-gray-300 text-[#737373]"
//           } w-8 h-8 text-lg flex items-center justify-center cursor-pointer gridView`}
//         >
//           <BsGridFill />
//         </span>
//         <span
//           className={`${
//             listViewActive
//               ? "bg-primeColor text-white"
//               : "border-[1px] border-gray-300 text-[#737373]"
//           } w-8 h-8 text-base flex items-center justify-center cursor-pointer listView`}
//         >
//           <ImList />
//         </span>
//       </div>
//       {/* =========================================================
//                             Left Part End here
//         ======================================================== */}
//       {/* =========================================================
//                             Right Part STart here
//         ======================================================== */}
//       <div className="flex items-center gap-2 md:gap-6 mt-4 md:mt-0">
//         <div className="flex items-center gap-2 text-base text-[#767676] relative">
//           <label className="block">Sort by:</label>
//           <select
//             // onChange={(e) => setSelected(e.target.value)}
//             id="countries"
//             className="w-32 md:w-52 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
//           >
//             <option value="Best Sellers">Best Sellers</option>
//             <option value="New Arrival">New Arrival</option>
//             <option value="Featured">Featured</option>
//             <option value="Final Offer">Final Offer</option>
//           </select>
//           <span className="absolute text-sm right-2 md:right-4 top-2.5">
//             <GoTriangleDown />
//           </span>
//         </div>
//         <div className="flex items-center gap-2 text-[#767676] relative">
//           <label className="block">Show:</label>
//           <select
//             onChange={(e) => itemsPerPageFromBanner(+e.target.value)}
//             id="countries"
//             className="w-16 md:w-20 border-[1px] border-gray-200 py-1 px-4 cursor-pointer text-primeColor text-base block dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
//           >
//             <option value="12">12</option>
//             <option value="24">24</option>
//             <option value="36">36</option>
//             <option value="48">48</option>
//           </select>
//           <span className="absolute text-sm right-3 top-2.5">
//             <GoTriangleDown />
//           </span>
//         </div>
//       </div>
//       {/* =========================================================
//                             Right Part End here
//         ======================================================== */}
//     </div>
//   );
// };

// export default ProductBanner;

// import { BsGridFill } from "react-icons/bs";
// import { ImList } from "react-icons/im";
// import { GoTriangleDown } from "react-icons/go";

// const ProductBanner = ({
//   itemsPerPageFromBanner,
//   viewMode,
//   onViewChange,
//   onSortChange,
// }) => {
//   return (
//     <div className="w-full flex flex-col md:flex-row md:items-center justify-between">
//       {/* LEFT */}
//       <div className="flex items-center gap-4">
//         <button
//           onClick={() => onViewChange("grid")}
//           className={`w-8 h-8 flex items-center justify-center cursor-pointer
//             ${
//               viewMode === "grid"
//                 ? "bg-primeColor text-white"
//                 : "border border-gray-300 text-[#737373]"
//             }`}>
//           <BsGridFill />
//         </button>

//         <button
//           onClick={() => onViewChange("list")}
//           className={`w-8 h-8 flex items-center justify-center cursor-pointer
//             ${
//               viewMode === "list"
//                 ? "bg-primeColor text-white"
//                 : "border border-gray-300 text-[#737373]"
//             }`}>
//           <ImList />
//         </button>
//       </div>

//       {/* RIGHT */}
//       <div className="flex items-center gap-6 mt-4 md:mt-0">
//         <div className="relative">
//           <label className="mr-2">Sort by:</label>
//           <select
//             onChange={(e) => onSortChange(e.target.value)}
//             className="border py-1 px-4 appearance-none">
//             <option value="default">Default</option>
//             <option value="price-low">Price: Low → High</option>
//             <option value="price-high">Price: High → Low</option>
//           </select>
//           <GoTriangleDown className="absolute right-3 top-3 text-sm" />
//         </div>

//         <div className="relative">
//           <label className="mr-2">Show:</label>
//           <select
//             onChange={(e) => itemsPerPageFromBanner(+e.target.value)}
//             className="border py-1 px-4 appearance-none">
//             <option value="12">12</option>
//             <option value="24">24</option>
//             <option value="36">36</option>
//             <option value="48">48</option>
//           </select>
//           <GoTriangleDown className="absolute right-3 top-3 text-sm" />
//         </div>
//       </div>
//     </div>
//   );
// };
import { BsGridFill } from "react-icons/bs";
import { ImList } from "react-icons/im";
import { GoTriangleDown } from "react-icons/go";

const ProductBanner = ({
  itemsPerPageFromBanner,
  viewMode,
  onViewChange,
  onSortChange,
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-center justify-between mb-6">
      {/* LEFT: Grid/List toggle */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => onViewChange("grid")}
          className={`w-8 h-8 flex items-center justify-center cursor-pointer rounded-md
            ${
              viewMode === "grid"
                ? "bg-primeColor text-white"
                : "border border-gray-300 text-[#737373]"
            }`}>
          <BsGridFill />
        </button>

        <button
          onClick={() => onViewChange("list")}
          className={`w-8 h-8 flex items-center justify-center cursor-pointer rounded-md
            ${
              viewMode === "list"
                ? "bg-primeColor text-white"
                : "border border-gray-300 text-[#737373]"
            }`}>
          <ImList />
        </button>
      </div>

      {/* RIGHT: Sort & Items per page */}
      <div className="flex items-center gap-6 mt-4 md:mt-0">
        {/* SORT */}
        <div className="relative">
          <label className="mr-2 font-medium">Sort by:</label>
          <select
            onChange={(e) => onSortChange(e.target.value)}
            value={onSortChange} 
            className="border py-1 px-4 pr-8 appearance-none rounded-md">
            <option value="default">Default</option>
            <option value="price-low">Price: Low → High</option>
            <option value="price-high">Price: High → Low</option>
          </select>
          <GoTriangleDown className="absolute right-2 top-1/2 -translate-y-1/2 text-sm pointer-events-none" />
        </div>

        {/* ITEMS PER PAGE */}
        <div className="relative">
          <label className="mr-2 font-medium">Show:</label>
          <select
            onChange={(e) => itemsPerPageFromBanner(+e.target.value)}
            className="border py-1 px-4 pr-8 appearance-none rounded-md">
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
            <option value="48">48</option>
          </select>
          <GoTriangleDown className="absolute right-2 top-1/2 -translate-y-1/2 text-sm pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;


