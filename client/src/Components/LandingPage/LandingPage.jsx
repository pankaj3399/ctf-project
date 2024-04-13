import bgImage from "../../assets/homepage.webp";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    // add a background image to the landing page
    <div
      className="bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col items-center py-24 h-full bg-black bg-opacity-50">
        <h1 className="text-white text-6xl font-bold">Capture The Flag</h1>
        <p className="text-white text-2xl my-5">Ready . Set . PWN!</p>

        <Link
          to="/signup"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Join Now
        </Link>
      </div>

      {/* category slider */}
    </div>
  );
};

export default LandingPage;
