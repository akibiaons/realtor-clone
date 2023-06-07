import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation(); // To the left is init..
  const navigate = useNavigate(); // Same here <--
  function isRouteActive(route){
    return location.pathname === route;
  };
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
          <img src="https://raw.githubusercontent.com/akibiaons/realtor-clone/main/public/logo.png" alt="realtor logo" className='h-10 cursor-pointer'
          onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10 border-b">
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${isRouteActive("/")
                  ? "text-red-700 border-b-2 border-[#5B45BB] "
                  : "text-black "}`} 
            onClick={()=>navigate("/")}>
              Home
            </li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${isRouteActive("/offers")
                  ? "text-red-700 border-b-2 border-[#5B45BB] "
                  : "text-black "}`}
            onClick={()=>navigate("/offers")}
            >
              Leases
            </li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${isRouteActive("/sign-in")
                  ? "text-red-700 border-b-2 border-[#5B45BB] "
                  : "text-black "}`}
            onClick={()=>navigate("/sign-in")}
            >
              Sign In
            </li>
          </ul> 
        </div>
      </header>
    </div>
  )
}
