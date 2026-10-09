import React from "react";
import Image from "next/image";
import logo from "@/public/svg/logo.svg"
import cart from "@/public/svg/cart.svg"

function Navigation() {
  return (
    <nav className="bg-white/30 backdrop-blur-md border border-white/20 p-6 shadow-xl w-100% mb-8 flex items-center justify-between">
      <div className="logo">
        <Image src={logo} alt="logo" height={46} width={45} />
      </div>
      <ul className="list-none flex gap-8">
        <li>
          <a
            className="font-ubuntu relative text-1xl font-medium no-underline text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            href=""
          >
            About Us
          </a>
        </li>
        <li>
          <a
            className="font-ubuntu relative text-1xl font-medium no-underline text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            href=""
          >
            Accessories
          </a>
        </li>
        <li>
          <a
            className="font-ubuntu relative text-1xl font-medium no-underline text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            href=""
          >
            New Arrivals
          </a>
        </li>
      </ul>
      <div className="flex gap-5">
        <button className="font-archivo py-2 px-6 rounded-md font-bold text-2xl bg-black text-white cursor-pointer">
          Login
        </button>
        <div className="add-to-cart">
          <Image src={cart} alt="cart" height={45} width={45} />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
