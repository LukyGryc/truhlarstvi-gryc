'use client';
import NavLink from "./NavLink"
import { Menu } from "lucide-react"
import NavDrawer from "./NavDrawer"
import { useState } from "react"
import { NavigationLinks } from "@/constants/navigationConstants";
import { usePathname } from "next/navigation";
import { getHref } from "@/util/linkUtil";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <header className="fixed top-0 z-50 flex justify-between w-full px-4 md:px-12 lg:px-60 py-3 md:py-4 bg-white/30 text-black backdrop-blur-md items-center">
      <h1 className="scroll-m-20 text-2xl font-semibold">
        <a href={getHref("#landingPage", isHomePage)} className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
          <span>Truhlářství Gryč</span>
        </a>
      </h1>

      <nav className="flex gap-4 hidden md:block">
        {
          NavigationLinks.map(({ id, href, label }) => (
            <NavLink key={id} href={getHref(href, isHomePage)} label={label} />
          ))
        }
      </nav>

      <Menu className="md:hidden cursor-pointer" onClick={() => { setIsMenuOpen(true) }} size={28} />
      {isMenuOpen && (
        <NavDrawer isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} isHomePage={isHomePage} />
      )}
    </header>
  )
}

export default Navbar