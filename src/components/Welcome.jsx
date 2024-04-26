import { img1 } from "../Constants";
const Welcome = () => {
  return (
    <div className="flex items-center">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-4/5">
        <img
          src={img1}
          alt="Pharma"
          className="mb-6 rounded-lg w-full hover:scale-105"
        />
      </div>
      <div className="sm:w-1/2 md:w-2/3 lg:w-3/4 ml-6">
        <section className="about-section mb-6 bg-white rounded-lg p-6">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">
            Welcome To RandomPharma
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Your partner in combating diseases through innovative injections
          </p>
        </section>
      </div>
    </div>
  );
};

export default Welcome;
