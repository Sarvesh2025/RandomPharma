import { img2 } from "../Constants";
const About = () => {
  return (
    <section
      id="about"
      className="about-section mb-6 bg-white rounded-lg p-6  flex"
    >
      <div className="flex-1 pr-4 w-[800px]">
        <h2 className="text-3xl font-bold text-blue-500 mb-4 border-b-2 border-blue-500 pb-2">
          About Us
        </h2>
        <p className="text-lg text-gray-800 leading-relaxed border-l-4 border-gray-500 pl-4">
          RandomPharma is dedicated to developing cutting-edge solutions for
          various illnesses. With a focus on research and development, we aim to
          improve healthcare outcomes globally.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mt-4 bg-gray-100 border border-gray-300 p-4 rounded-lg hover:scale-105">
          Our team of experts works tirelessly to innovate and create new
          treatments, vaccines, and therapies that address the most pressing
          healthcare challenges of our time.
        </p>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={img2}
          alt="About Us Image"
          className="rounded-full h-72 w-72 border-4 border-blue-300"
        />
      </div>
    </section>
  );
};
export default About;
