
import { Link } from 'react-scroll';


const Navbar = () => {
    const navLinks = <>
    <li>
        <Link  activeClass="active" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
       className="font-bold "
        to=''>Home</Link>
    </li>
    <li>
        <Link spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      className="font-bold" 
       to='services'>Services </Link>
    </li>
    <li>
        <Link spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      className="font-bold" 
       to='projects'>Projects </Link>
    </li>
    <li>
        <Link spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      className="font-bold" 
       to='skills'>Skills </Link>
    </li>
   
    <li>
        <Link spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
      className="font-bold" 
       to='testimonials'>Testimonials</Link>
    </li>
    <li>
       <Link spy={true} 
      smooth={true} 
      offset={50} 
      duration={500}
       className="font-bold" 
       to='social'>Social Media Handles</Link>
    </li>
    </>


    return (
        <div className={`navbar   md:px-10 top-0 z-10`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {
                  navLinks
              }
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
              navLinks
            }
          </ul>
        </div>
      </div>
    );
  };


export default Navbar;