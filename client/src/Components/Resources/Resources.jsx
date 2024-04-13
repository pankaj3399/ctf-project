import React from "react";
import { useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../../redux-rtk/features/category/categoryApi";

const Resources = () => {
  useGetCategoriesQuery();

  const categories = useSelector((state) => state.categories.categories);

  return (
    <div className="px-5 md:px-24 py-8 min-h-screen w-full">
      {/* braedcumbs */}

      <div className="mt-5">
        <h1 className="text-3xl font-normal">Categories</h1>

        {/* create card of categories in grid with short description */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {categories &&
            categories.map((category) => (
              <div
                key={category?._id}
                className="bg-[#f7f7f7] p-5 rounded-md min-h-[120px] cursor-pointer shadow-md border"
              >
                <h1 className="text-xl font-semibold">{category?.name}</h1>
                <p className="mt-5 text-gray-600 text-sm">
                  {category?.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
