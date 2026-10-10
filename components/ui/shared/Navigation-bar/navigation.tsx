import Image from "next/image";
import logo from "@/public/svg/logo.svg"
import cart from "@/public/svg/cart.svg"

function Navigation() {
  return (
    <nav className="mb-8 flex w-full items-center justify-between border border-white/30 bg-white/20 px-6 py-3 shadow-[0_8px_32px_rgba(15,23,42,0.12)] backdrop-blur-2xl backdrop-saturate-150 ring-1 ring-white/10">
      <div className="cursor-pointer flex items-center justify-center gap-2.5">
        <Image src={logo} alt="logo" height={40} width={40} />
        <a href="#" className="font-bricolage">
          Nexora
        </a>
      </div>
      <ul className="list-none flex gap-8">
        <li>
          <a
            className="font-public relative text-1xl font-medium no-underline text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            href=""
          >
            About Us
          </a>
        </li>
        <li>
          <a
            className="font-public relative text-1xl font-medium no-underline text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            href=""
          >
            Accessories
          </a>
        </li>
        <li>
          <a
            className="font-public relative text-1xl font-medium no-underline text-black after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            href=""
          >
            New Arrivals
          </a>
        </li>
      </ul>
      <div className="flex gap-7.5">
        <a
          href="/login"
          className="font-space rounded-md bg-black px-6 py-1.5 text-white transition duration-200 ease-in-out hover:border hover:border-black hover:bg-transparent hover:text-black"
        >
          Login
        </a>
        <div className="add-to-cart cursor-pointer">
          <Image src={cart} alt="cart" height={38} width={38} />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
