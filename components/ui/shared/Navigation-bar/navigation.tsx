import React from "react";
import Image from "next/image";
import logo from "@/public/svg/logo.svg"
import cart from "@/public/svg/cart.svg"
import { Ubuntu, Archivo } from "next/font/google";

const ubuntu = Ubuntu({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"]
})

const archivo = Archivo({
    weight: ["500", "600", "700", "800", "900"],
    subsets: ["latin"]
})

function Navigation() {
  return (
    <nav className="bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl w-100% mb-8 flex items-center justify-between">
      <div className="logo">
        <Image src={logo} alt="logo" height={200} width={200} />
      </div>
      <ul className="list-none flex gap-8">
        <li>
          <a className={`${ubuntu.className} relative text-2xl font-medium no-underline text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer`} href="">About Us</a>
        </li>
        <li>
          <a className={`${ubuntu.className} relative text-2xl font-medium no-underline text-black after:absolute after:bottom-0 after:left-0 after:h-[2xl] after:w-0 after:bg-black-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer`} href="">Accessories</a>
        </li>
        <li>
          <a className={`${ubuntu.className} relative text-2xl font-medium no-underline text-black after:absolute after:bottom-0 after:left-0 after:h-[2xl] after:w-0 after:bg-black-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer`}  href="">New Arrivals</a>
        </li>
      </ul>
      <div className="flex">
        <button className="py-2 px-6 rounded-md font-bold text-2xl bg-black text-white cursor-pointer">Login</button>
        <div className="add-to-cart">
          <Image src={cart} alt="cart" height={200} width={200} />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
