const Services = () => {
  return (
    <div
      id="services"
      className="services-section mb-6 bg-white rounded-lg p-6"
    >
      <h2 className="text-3xl font-bold text-blue-500 mb-4">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:scale-105">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Development of vaccines and injections
          </h3>
          <p className="text-gray-600">
            We specialize in developing vaccines and injections for a wide range
            of diseases, focusing on safety, efficacy, and accessibility.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:scale-105">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Clinical trials and research studies
          </h3>
          <p className="text-gray-600">
            Our dedicated team conducts rigorous clinical trials and research
            studies to evaluate the effectiveness and safety of our treatments.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:scale-105">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Consultation services for healthcare professionals
          </h3>
          <p className="text-gray-600">
            We offer expert consultation services to healthcare professionals,
            providing insights and guidance on the use of our products.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:scale-105">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Education and awareness programs
          </h3>
          <p className="text-gray-600">
            We are committed to raising awareness about healthcare issues and
            providing education to empower individuals and communities to make
            informed decisions about their health.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Services;
