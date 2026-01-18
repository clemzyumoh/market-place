// import React, { useState } from "react";
// import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
// import Pagination from "../../components/pageProps/shopPage/Pagination";
// import ProductBanner from "../../components/pageProps/shopPage/ProductBanner";
// import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";

// // const Shop = () => {
// //   const [itemsPerPage, setItemsPerPage] = useState(12);
// //   const itemsPerPageFromBanner = (itemsPerPage) => {
// //     setItemsPerPage(itemsPerPage);
// //   };

// //   return (
// //     <div className="max-w-container mx-auto px-4">
// //       <Breadcrumbs title="Products" />
// //       {/* ================= Products Start here =================== */}
// //       <div className="w-full h-full flex pb-20 gap-10">
// //         <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
// //           <ShopSideNav />
// //         </div>
// //         <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
// //           <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} />
// //           <Pagination itemsPerPage={itemsPerPage} />
// //         </div>
// //       </div>
// //       {/* ================= Products End here ===================== */}
// //     </div>
// //   );
// // };

// const Shop = () => {
//   const [itemsPerPage, setItemsPerPage] = useState(12);
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   return (
//     <div className="max-w-container mx-auto px-4">
//       <Breadcrumbs title="Products" />

//       <div className="w-full h-full flex pb-20 gap-10">
//         <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
//           <ShopSideNav setSelectedCategory={setSelectedCategory} />
//         </div>

//         <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
//           <ProductBanner itemsPerPageFromBanner={setItemsPerPage} />
//           <Pagination
//             itemsPerPage={itemsPerPage}
//             selectedCategory={selectedCategory}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shop;

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Pagination from "../../components/pageProps/shopPage/Pagination";
import ProductBanner from "../../components/pageProps/shopPage/ProductBanner";
import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";

// const Shop = () => {
//   const [itemsPerPage, setItemsPerPage] = useState(12);
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   const location = useLocation();
//   const navigate = useNavigate();

//   // 🔹 Sync category from URL
//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const categoryFromUrl = searchParams.get("category");

//     setSelectedCategory(categoryFromUrl || "all");
//   }, [location.search]);

//   // 🔹 When sidebar changes category → update URL
//   const handleCategoryChange = (category) => {
//     if (category === "all") {
//       navigate("/shop");
//     } else {
//       navigate(`/shop?category=${category}`);
//     }
//   };

//   return (
//     <div className="max-w-container mx-auto px-4">
//       <Breadcrumbs title="Products" />

//       <div className="w-full h-full flex pb-20 gap-10">
//         <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
//           <ShopSideNav
//             selectedCategory={selectedCategory}
//             onCategoryChange={handleCategoryChange}
//           />
//         </div>

//         <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
//           <ProductBanner itemsPerPageFromBanner={setItemsPerPage} />
//           <Pagination
//             itemsPerPage={itemsPerPage}
//             selectedCategory={selectedCategory}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shop;

const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("default");

  const location = useLocation();
  const navigate = useNavigate();

  // Sync category from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSelectedCategory(params.get("category") || "all");
  }, [location.search]);

  const handleCategoryChange = (category) => {
    if (category === "all") {
      navigate("/shop");
    } else {
      navigate(`/shop?category=${category}`);
    }
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Products" />

      <div className="flex gap-10 pb-20">
        <div className="hidden mdl:inline-flex w-[25%]">
          <ShopSideNav
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange} // ✅ FIXED
          />
        </div>

        <div className="w-full flex flex-col gap-10">
          <ProductBanner
            itemsPerPageFromBanner={setItemsPerPage}
            viewMode={viewMode}
            onViewChange={setViewMode}
            onSortChange={setSortBy}
          />

          <Pagination
            itemsPerPage={itemsPerPage}
            selectedCategory={selectedCategory}
            viewMode={viewMode}
            sortBy={sortBy}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;

