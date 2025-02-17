import React from "react";
import { Link } from "react-router-dom";
export function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className=" max-h-[768px] w-full  overflow-auto">
      <nav className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-[rgba(2,26,54,1)]   text-white shadow">
        <div className="flex items-center justify-between text-blue-gray-900">
         <Link to='/' className="mr-4 cursor-pointer py-1.5 font-medium">
            CyberSecure.in
            </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">
              <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-x-1">
            <Link to='/login'> <button className="hidden lg:inline-block text-blue-400 mr-5">
                Log In
              </button></Link>
              <button className="hidden mr-4 lg:inline-block bg-blue-600 text-white px-4 py-2 rounded">
                Sign In
              </button>
              <button
                className="ml-auto h-6 w-6 text-blue-gray-900 lg:hidden"
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {openNav && (
          <div className="lg:hidden">
            <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
              <li className="">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
            </ul>
            <div className="flex flex-col gap-2">
              <button className="w-full text-blue-600 ">Log In</button>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded">
                Sign In
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
