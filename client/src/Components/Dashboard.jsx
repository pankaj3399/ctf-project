import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../redux-rtk/features/category/categoriesSlice";
import ChallengeDashboard from "./Challenge/ChallengeDashboard";
import { useGetAllChallengesQuery } from "../redux-rtk/features/challenges/challengesApi";
import { LoaderIcon } from "react-hot-toast";

const Dashboard = () => {
  // get :id from url params and set it to activeCategory
  const { id } = useParams();

  const { data, isLoading } = useGetAllChallengesQuery();

  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories.categories);
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );
  // console.log(categories)
  // set activeCategory to id

  // console.log(data)

  useEffect(() => {
    // on change of id set activeCategory to id

    const category = categories.find((category) => category._id === id);
    // console.log(category)
    dispatch(setSelectedCategory(category));

    // setActiveCategory(categories.find((category) => category._id === id))
  }, [id]);

  return (
    <div className="p-5 h-full">
      <div className="mx-4 relative h-full">
        <div className="z-50">
          <h1 className="flex justify-between w-full gap-[15px] items-center text-[25px]">
            <span className="text-[25px] font-extrabold	">
              {selectedCategory ? selectedCategory?.name : "All Challenges"}
            </span>
            <div>
              <span>
                <Link
                  to="/dashboard/rankings"
                  className="border rounded-md border-red-600 text-red-600 px-3 py-2 text-[14px] hover:bg-red-600 hover:text-white duration-300 ease-linear"
                >
                  Rankings
                </Link>
              </span>
              <span className="ml-5">
                <Link
                  to="/dashboard/add-new-challenge"
                  className="border rounded-md border-red-600 text-white bg-black px-3 py-2 text-[14px] hover:bg-red-600 hover:text-white duration-300 ease-linear"
                >
                  Add New Challenge
                </Link>
              </span>
            </div>
          </h1>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-1/2 tracking-wider text-[32px] font-semibold">
            {" "}
            <LoaderIcon
              style={{
                width: "25px",
                height: "25px",
              }}
            />
          </div>
        ) : (
          <ChallengeDashboard
            activeCategory={selectedCategory}
            datas={data?.data}
          ></ChallengeDashboard>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
