const Header = () => {
  return (
    <header className="mb-6 bg-white-300 rounded-lg p-6 flex justify-between items-center">
      <h1 className="text-3xl font-bold">
        <a href="/" className="hover:text-white-700">
          RandomPharma
        </a>
      </h1>
      <nav>
        <ul className="flex">
          <li className="mr-6">
            <a href="#about" className="text-blue-500 hover:text-blue-700">
              About
            </a>
          </li>
          <li className="mr-6">
            <a href="#services" className="text-blue-500 hover:text-blue-700">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="text-blue-500 hover:text-blue-700">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
