const Footer = () => {
    return (
      <footer className="text-center bg-white rounded-lg p-8">
        <section className="contact-section mb-6">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">Contact Us</h2>
          <ul className="mb-4">
            <li>
              Email:{" "}
              <a
                href="mailto:info@randompharma.com"
                className="text-blue-500 hover:underline"
              >
                info@randompharma.com
              </a>
            </li>
            <li>
              Phone: <span className="text-blue-500">123-456-7890</span>
            </li>
          </ul>
          <div className="social-media mb-4 justify-center">
            <h3 className="text-xl font-bold mb-2">Follow Us:</h3>
            <ul className="flex justify-center">
              <li className="mr-4">
                <a
                  href="https://twitter.com/randompharma"
                  className="text-blue-500 hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li className="mr-4">
                <a
                  href="https://www.facebook.com/randompharma"
                  className="text-blue-500 hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/randompharma"
                  className="text-blue-500 hover:underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="contact-form">
            <h3 className="text-xl font-bold mb-2">Contact Form</h3>
            <form className="flex flex-wrap justify-center">
              <input
                className="w-full sm:w-auto border border-gray-300 rounded-md p-2 mb-2 mr-2 focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Name"
              />
              <input
                className="w-full sm:w-auto border border-gray-300 rounded-md p-2 mb-2 mr-2 focus:outline-none focus:border-blue-500"
                type="email"
                placeholder="Email"
              />
              <textarea
                className="w-full sm:w-auto border border-gray-300 rounded-md p-2 mb-2 mr-2 resize-none focus:outline-none focus:border-blue-500"
                placeholder="Message"
              ></textarea>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </section>
        <p>&copy; 2024 RandomPharma. All rights reserved.</p>
      </footer>
    );
}
export default Footer