import { useEffect, useState } from "react";
import { Challenge } from "./Challenge";
import { useSelector } from "react-redux";

const ChallengeDashboard = ({
  activeCategory,
  activeSubCategory,
  promptLoading,
}) => {
  // states
  const [filteredChallenges, setFilterChallenges] = useState([]);
  const challenges = useSelector((state) => state.challenges.challenges);
  // console.log(activeCategory)
  // set filterd prompt
  useEffect(() => {
    if (activeCategory && challenges?.length) {
      setFilterChallenges(
        challenges.filter((item) => item.category.name === activeCategory?.name)
      );
    } else {
      setFilterChallenges(challenges ? challenges : []);
    }
  }, [activeCategory, challenges, activeSubCategory]);

  return (
    <div className="relative w-full h-full pb-5 mt-5 overflow-y-auto pr-5">
      {promptLoading ? (
        <div className="flex justify-center items-center h-1/2 tracking-wider text-[32px] font-semibold">
          {" "}
          Loading...
        </div>
      ) : filteredChallenges.length === 0 ? (
        <div className="flex items-center justify-center text-red-500 h-1/2">
          No records found there
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-[20px]">
          {filteredChallenges.map((challenge) => (
            <Challenge key={challenge._id} challenge={challenge}></Challenge>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChallengeDashboard;
