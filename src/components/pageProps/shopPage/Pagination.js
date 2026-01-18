// import React, { useState } from "react";
// import ReactPaginate from "react-paginate";
// import Product from "../../home/Products/Product";
// import { paginationItems } from "../../../constants";

// const items = paginationItems;
// function Items({ currentItems }) {
//   return (
//     <>
//       {currentItems &&
//         currentItems.map((item) => (
//           <div key={item._id} className="w-full">
//             <Product
//               _id={item._id}
//               img={item.img}
//               productName={item.productName}
//               price={item.price}
//               color={item.color}
//               badge={item.badge}
//               des={item.des}
//             />
//           </div>
//         ))}
//     </>
//   );
// }

// const Pagination = ({ itemsPerPage }) => {
//   // Here we use item offsets; we could also use page offsets
//   // following the API or data you're working with.
//   const [itemOffset, setItemOffset] = useState(0);
//   const [itemStart, setItemStart] = useState(1);

//   // Simulate fetching items from another resources.
//   // (This could be items from props; or items loaded in a local state
//   // from an API endpoint with useEffect and useState)
//   const endOffset = itemOffset + itemsPerPage;
//   //   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//   const currentItems = items.slice(itemOffset, endOffset);
//   const pageCount = Math.ceil(items.length / itemsPerPage);

//   // Invoke when user click to request another page.
//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % items.length;
//     setItemOffset(newOffset);
//     // console.log(
//     //   `User requested page number ${event.selected}, which is offset ${newOffset},`
//     // );
//     setItemStart(newOffset);
//   };

//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
//         <Items currentItems={currentItems} />
//       </div>
//       <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
//         <ReactPaginate
//           nextLabel=""
//           onPageChange={handlePageClick}
//           pageRangeDisplayed={3}
//           marginPagesDisplayed={2}
//           pageCount={pageCount}
//           previousLabel=""
//           pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
//           pageClassName="mr-6"
//           containerClassName="flex text-base font-semibold font-titleFont py-10"
//           activeClassName="bg-black text-white"
//         />

//         <p className="text-base font-normal text-lightText">
//           Products from {itemStart === 0 ? 1 : itemStart} to {endOffset} of{" "}
//           {items.length}
//         </p>
//       </div>
//     </div>
//   );
// };


// export default Pagination;

// import React, { useState, useEffect } from "react";
// import ReactPaginate from "react-paginate";
// import Product from "../../home/Products/Product";
// import { paginationItems } from "../../../constants";
// import ListProduct from "./ListProduct";

//const items = paginationItems;


// const Pagination = ({ itemsPerPage, selectedCategory, viewMode, sortBy }) => {
//   const [itemOffset, setItemOffset] = useState(0);

//   // 1️⃣ Filter
//   let filteredItems =
//     selectedCategory === "all"
//       ? paginationItems
//       : paginationItems.filter(
//           (item) =>
//             item.category?.toLowerCase() === selectedCategory.toLowerCase()
//         );

//   // 2️⃣ Sort
//   if (sortBy === "price-low") {
//     filteredItems = [...filteredItems].sort(
//       (a, b) => Number(a.price) - Number(b.price)
//     );
//   }

//   if (sortBy === "price-high") {
//     filteredItems = [...filteredItems].sort(
//       (a, b) => Number(b.price) - Number(a.price)
//     );
//   }

//   // 3️⃣ Paginate
//   const endOffset = itemOffset + itemsPerPage;
//   const currentItems = filteredItems.slice(itemOffset, endOffset);
//   const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

//   const handlePageClick = (event) => {
//     setItemOffset(event.selected * itemsPerPage);
//   };

//   // Reset page on category / sort change
//   useEffect(() => {
//     setItemOffset(0);
//   }, [selectedCategory, sortBy, itemsPerPage]);



//   function Items({ currentItems, viewMode }) {
//   if (viewMode === "list") {
//     return (
//       <div className="flex flex-col">
//         {currentItems.map((item) => (
//           <ListProduct key={item._id} item={item} />
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div
//         className={
//           viewMode === "grid"
//             ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
//             : "flex flex-col gap-6"
//         }>
//         {currentItems.map((item) => (
//           <Product key={item._id} {...item} />
//         ))}
//       </div>

//       <ReactPaginate
//         onPageChange={handlePageClick}
//         pageCount={pageCount}
//         previousLabel=""
//         nextLabel=""
//         containerClassName="flex py-10"
//         pageClassName="mr-6"
//         pageLinkClassName="w-9 h-9 border flex items-center justify-center"
//         activeClassName="bg-black text-white"
//       />
//     </div>
//   );
// };

// export default Pagination;
import  { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";
import ListProduct from "./ListProduct"; // make sure you created this
import { paginationItems } from "../../../constants";


const Pagination = ({ itemsPerPage, selectedCategory, viewMode, sortBy }) => {
  const [itemOffset, setItemOffset] = useState(0);

  // 1️⃣ Filter by category
  let filteredItems =
    selectedCategory === "all"
      ? paginationItems
      : paginationItems.filter(
          (item) =>
            item.category?.toLowerCase() === selectedCategory.toLowerCase()
        );

  // 2️⃣ Sort
  if (sortBy === "price-low") {
    filteredItems = [...filteredItems].sort(
      (a, b) => Number(a.price) - Number(b.price)
    );
  } else if (sortBy === "price-high") {
    filteredItems = [...filteredItems].sort(
      (a, b) => Number(b.price) - Number(a.price)
    );
  }

  // 3️⃣ Paginate
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredItems.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageClick = (event) => {
    setItemOffset(event.selected * itemsPerPage);
  };

  // Reset page when category / sort / itemsPerPage changes
  useEffect(() => {
    setItemOffset(0);
  }, [selectedCategory, sortBy, itemsPerPage]);

  return (
    <div>
      {/* Render Products */}
      {viewMode === "list" ? (
        <div className="flex flex-col">
          {currentItems.map((item) => (
            <ListProduct key={item._id} item={item} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {currentItems.map((item) => (
            <Product key={item._id} {...item} />
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center py-10">
        <ReactPaginate
          onPageChange={handlePageClick}
          pageCount={pageCount}
          previousLabel=""
          nextLabel=""
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          containerClassName="flex"
          pageClassName="mr-6"
          pageLinkClassName="w-9 h-9 border flex items-center justify-center"
          activeClassName="bg-black text-white"
        />
      </div>

      {/* Info */}
      <p className="text-base text-lightText text-center mt-2">
        Products from {itemOffset + 1} to{" "}
        {Math.min(endOffset, filteredItems.length)} of {filteredItems.length}
      </p>
    </div>
  );
};

export default Pagination;
